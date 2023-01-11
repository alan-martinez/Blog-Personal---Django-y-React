import Features from "components/carrers/Features";
import Header from "components/carrers/Header";
import PositionList from "components/carrers/PositionList";
import Testimonial from "components/carrers/Testimonial";
import Footer from "components/navigation/Footer";
import Navbar from "components/navigation/Navbar";
import Layout from "hocs/layouts/Layout";
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";

function Carrers()
{
    useEffect(()=>{
        window.scrollTo(0,0)
    },[])
    return (
        <Layout>
            <Helmet>
                <title>Alan Mtz | Carreras</title>
                <meta name="description" content="Agencia de software y marketing digital. Servicios de creacion de pagina web y desarrollo de aplicaciones." />
                <meta name="keywords" content='agencia de software, agencia de marketing, creacion de pagina web' />
                <meta name="robots" content='all' />
                <link rel="canonical" href="https://github.com/alan-martinez" />
                <meta name="author" content='Alan Mtz' />
                <meta name="publisher" content='Alan Mtz' />

                {/* Social Media Tags */}
                <meta property="og:title" content='Alan Mtz | Software Agency' />
                <meta property="og:description" content='Agencia de software y marketing digital. Servicios de creacion de pagina web y desarrollo de aplicaciones.' />
                <meta property="og:url" content="https://github.com/alan-martinez" />
                <meta property="og:image" content='https://bafybeicwrhxloesdlojn3bxyjqnxgsagtd4sl53a7t4cn4vfe2abmybzua.ipfs.w3s.link/lightbnuilbg.jpg' />

                <meta name="twitter:title" content='Alan Mtz | Software Agency' />
                <meta
                    name="twitter:description"
                    content='Agencia de software y marketing digital. Servicios de creacion de pagina web y desarrollo de aplicaciones.'
                />
                <meta name="twitter:image" content='https://bafybeicwrhxloesdlojn3bxyjqnxgsagtd4sl53a7t4cn4vfe2abmybzua.ipfs.w3s.link/lightbnuilbg.jpg' />
                <meta name="twitter:card" content="summary_large_image" />
            </Helmet>
            <Navbar/>
                <div className="pt-28">
                    <Header/>    
                    <Testimonial/>
                    <div className="bg-gray-50">
                    <div className=" mx-auto lg:mx-12 pt-24 pb-12">
                        <h3 className="lg:text-5xl text-3xl px-4 font-bold leading-6 text-gray-900">Work with top notch companies
                    </h3>
                    </div>
                        <div className="mx-12 max-w-7xl py-12 px-4 sm:px-6 lg:px-8">
                            <div className="grid grid-cols-2 gap-8 md:grid-cols-6 lg:grid-cols-5">
                            <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                                <img className="h-12" src="https://tailwindui.com/img/logos/tuple-logo-gray-400.svg" alt="Tuple" />
                            </div>
                            <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                                <img className="h-12" src="https://tailwindui.com/img/logos/mirage-logo-gray-400.svg" alt="Mirage" />
                            </div>
                            <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                                <img className="h-12" src="https://tailwindui.com/img/logos/statickit-logo-gray-400.svg" alt="StaticKit" />
                            </div>
                            <div className="col-span-1 flex justify-center md:col-span-3 lg:col-span-1">
                                <img
                                className="h-12"
                                src="https://tailwindui.com/img/logos/transistor-logo-gray-400.svg"
                                alt="Transistor"
                                />
                            </div>
                            <div className="col-span-2 flex justify-center md:col-span-3 lg:col-span-1">
                                <img
                                className="h-12"
                                src="https://tailwindui.com/img/logos/workcation-logo-gray-400.svg"
                                alt="Workcation"
                                />
                            </div>
                            </div>
                        </div>
                    </div>
                    <Features/>
                    <Features/>
                    <PositionList/>
                </div>
            <Footer/>
        </Layout>
    )
};

export default Carrers;