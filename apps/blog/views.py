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