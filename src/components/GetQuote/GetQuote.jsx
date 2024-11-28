import "./style.scss"
import Header from "../header/Heade";
import Navbar from "../Navbar/Navbar";
import Footer from "../footer/Footer";
import React, {Suspense, useEffect} from "react";
import Aos from "aos";
import 'react-bootstrap-typeahead/css/Typeahead.css';
import {Helmet} from "react-helmet";
import Loader from "../loader/Loader";
const LazyQuote = React.lazy(() => import("../quote/Quote"));

const GetQuote = () => {
    useEffect(() => {
        Aos.init({duration: 1000});
    }, []);


    return <div className="get-quote-container">
        <Helmet>
            <title>Get a quote</title>
            <meta name="description"
                  content="Get a free, instant auto transport quote online! Ship your car quickly and affordably with trusted professionals."/>
        </Helmet>
        <header>
            <Header/>
            <Navbar/>
        </header>
        <main>
            <section data-aos="flip-right" className="get-quote-card">
                <Suspense fallback={<Loader/>}>
                    <LazyQuote/>
                </Suspense>
            </section>
        </main>
        <footer>
            <Footer/>
        </footer>
    </div>
};

export default GetQuote