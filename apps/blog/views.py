from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework import permissions

from .models import Post, ViewCount
from apps.category.models import Category

from .serializers import PostListSerializer
from .paginacion import SmallSetPagination, MediumSetPagination, LargeSetPagination

class BlogListView(APIView):
    permission_classes = (permissions.AllowAny,)
    def get (self, request, format=None):
        if Post.objects.all().exists():
            
            posts = Post.objects.all()

            paginator = SmallSetPagination()
            result = paginator.paginate_queryset(posts, request)

            serializer = PostListSerializer(result, many=True)
            
            return paginator.get_paginated_response({'posts':serializer.data})
        else:
            return Response({'error':'not post found'}, status=status.HTTP_404_NOT_FOUND)

class ListPostsByCategoryView(APIView):
    permission_classes = (permissions.AllowAny,)
    def get (self, request, format=None):
        if Post.objects.all().exists():
            
            slug = request.query_params.get('slug')
            category = Category.objects.get(slug=slug)

            posts = Post.objects.order_by('-published').all()

            # if category.parent:
            #     #Si estamos viendo el hijo de una categoria, filtrar solo por esta categoria y no por el padre tambien
            #     posts = posts.filter(category=category)
            # else: #si no tiene una categoria,significa que ella misma es la categoria padre
            #     #Filtrar categoria sola
            if not Category.objects.filter(parent = category).exists():
                posts = posts.filter(category=category)
            #si esta categoria padre tiene hijos, filtrar por la categoria padre y sus hijos
            else:
                sub_categories = Category.objects.filter(parent = category)

                filtered_categories = [category]

                for cat in sub_categories:
                    filtered_categories.append(cat)
                    
                filtered_categories = tuple(filtered_categories)

                posts = posts.filter(category__in = filtered_categories)


            paginator = SmallSetPagination()
            result = paginator.paginate_queryset(posts, request)
            serializer = PostListSerializer(result, many=True)

            # return Response({'success':'successs'}, status=status.HTTP_200_OK)
            
            return paginator.get_paginated_response({'posts':serializer.data})
        else:
            return Response({'error':'not post found'}, status=status.HTTP_404_NOT_FOUND)