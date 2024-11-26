import "./style.scss"
import Header from "../header/Heade";
import Navbar from "../Navbar/Navbar";
import {useNavigate} from "react-router-dom";
import Footer from "../footer/Footer";
import Slider from "react-slick/lib";
import React, {useContext, useEffect, useState} from "react";
import {MyContext} from "../App/App";
import axios from "axios";
import Aos from "aos";
import {Helmet} from "react-helmet";


const BussinesPageThree = () => {
    let value = useContext(MyContext);
    const navigate = useNavigate();
    const [comments, setComments] = useState([])
    const [partners, setPartners] = useState([])
    const [contact, setContact] = useState("");
    const settingsPartners = {
        lazyLoad: false,
        slidesToShow: 5,
        dots: false,
        infinite: true,
        speed: 2000,
        autoplay: true,
        navs: true,
        slidesToScroll: 5,
        initialSlide: 5,
        responsive: [{
            breakpoint: 1024, settings: {
                slidesToShow: 5, slidesToScroll: 5, infinite: true, dots: false
            }
        }, {
            breakpoint: 600, settings: {
                slidesToShow: 3, slidesToScroll: 3, initialSlide: 3
            }
        }, {
            breakpoint: 480, settings: {
                slidesToShow: 3, slidesToScroll: 3
            }
        }]
    };
    const settingsReviews = {
        lazyLoad: false,
        slidesToShow: 3,
        dots: false,
        infinite: true,
        speed: 2000,
        autoplay: true,
        navs: true,
        slidesToScroll: 3,
        initialSlide: 3,
        responsive: [{
            breakpoint: 1024, settings: {
                slidesToShow: 3, slidesToScroll: 3, infinite: true, dots: false
            }
        }, {
            breakpoint: 600, settings: {
                slidesToShow: 1, slidesToScroll: 1, initialSlide: 1
            }
        }, {
            breakpoint: 480, settings: {
                slidesToShow: 1, slidesToScroll: 1
            }
        }]
    };

    useEffect(() => {
        axios.get(`${value.url}comment/`).then((response) => {
            setComments(response.data)
        });

        axios.get(`${value.url}partner/`).then((response) => {
            setPartners(response.data)
        });

        axios.get(`${value.url}contact/`).then((response) => {
            setContact(response.data[0])
        });

        Aos.init({duration: 1000});
    }, []);

    return <div className="for-business-container">

        <Helmet>
            <title>Car Rental Companies</title>
            <meta name="description"
                  content="Efficient vehicle transport solutions for car rental companies. Partner with us to manage your fleet logistics with ease."/>
        </Helmet>

        <header>
            <Header/>
            <Navbar/>
        </header>

        <main>
            <section className="header-content header-content-three">
                <div className="home-sloy">
                    <div className="home_contents">
                        <div className="left_side">
                            <div className="text-wrapper">
                                <strong className="top-text">
                                    Logistics & Leader Auto Ship
                                </strong>
                                <h1 className="text-large">
                                    <p data-aos="zoom-in">Fast execution and service to support rental car velocity</p>
                                </h1>
                                <article className="des-text">
                                    Leader Auto Ship’s 16,000+ carrier network and industry expertise delivers the
                                    capacity
                                    and service you need now
                                </article>
                                <div className="buttons-home">
                                    <button onClick={() => navigate("/get-quote")} type="button"
                                            className="button-home">
                                        Get a quote
                                    </button>
                                    <a href={`tel:${contact.phone1}`} className="button-home">
                                        Call now
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="right_side">
                        </div>
                    </div>
                </div>
            </section>

            <section className="section-works">
                <div className="sides">
                    <img src="./for-business/three/photo1.webp" alt="Proven rental car industry experience" loading="lazy"/>
                </div>
                <div className="sides-text">
                    <h2 className="title">
                        Proven rental car industry experience
                    </h2>
                    <article className="des">
                        We know the car rental space because our people have worked in it; now they’re at Leader Auto
                        Ship.
                        Each team member has worked at least 15 years at leading car rental companies. You’ll have
                        access to
                        that knowledge base and get the response you deserve, from people who understand exactly what
                        you
                        need.
                        Leader Auto Ship works with big players, such as Enterprise, Avis and Hertz, as well as small
                        and
                        medium-sized rental car companies. Each client has a dedicated account team and a single point
                        of
                        contact to streamline communication and ensure the highest level of customer service.
                    </article>
                </div>
            </section>
            <section className="section-works">
                <div className="sides-text">
                    <h2 className="title">
                        16,000+ nationwide carrier network
                    </h2>
                    <article className="des">
                        Whether you have a single unit to move or 10,000, Leader Auto Ship can handle your volume with
                        the
                        highest standards of safety and professionalism. “How many trucks can you send now?” We hear
                        that
                        all the time and respond with “as many as you need.” That’s the power of a 16,000+ nationwide
                        carrier network, fully vetted and ready to roll.
                    </article>
                </div>
                <div className="sides">
                    <img src="./for-business/three/photo2.webp" alt=" 16,000+ nationwide carrier network" loading="lazy"/>
                </div>
            </section>

            <section className="partners">
                <Slider {...settingsPartners}>
                    {partners.map((item, index) => {
                        return <div key={index} className="logo">
                            <img src={item.logo} alt="partners" loading="lazy"/>
                        </div>
                    })}
                </Slider>
            </section>
            <section className="reviews-container">
                <h3 className="main-title">
                    Explore Our Reviews!
                </h3>
                <h1 className="title">
                    See What Our Customers are Saying
                </h1>
                <div className="slider-box-reviews">
                    <Slider {...settingsReviews}>
                        {comments.map((item, index) => {
                            return <div key={index} className="review">
                                <div className="content">
                                    <div className="header">
                                        <div className="left">
                                            <div className="name">
                                                <strong className="name-user">{item.name}</strong>
                                            </div>
                                        </div>
                                        <div className="google">
                                            <img src={item.image} alt="icon-reviews" loading="lazy"/>
                                        </div>
                                    </div>
                                    <article className="des">
                                        {item.comment}
                                    </article>
                                    <div className="stars">
                                        <img src="./images/star1.webp" alt="review"/>
                                        <img src="./images/star1.webp" alt="review"/>
                                        <img src="./images/star1.webp" alt="review"/>
                                        <img src="./images/star1.webp" alt="review"/>
                                        <img src="./images/star1.webp" alt="review"/>
                                    </div>
                                </div>
                            </div>
                        })}


                    </Slider>
                </div>
            </section>
        </main>

        <footer>
            <Footer/>
        </footer>
    </div>
};

export default BussinesPageThree