import "./style.scss"
import Header from "../header/Heade";
import Navbar from "../Navbar/Navbar";
import {useNavigate} from "react-router-dom";
import Footer from "../footer/Footer";
import Slider from "react-slick/lib";
import React, {useContext, useEffect, useState} from "react";
import axios from "axios";
import Aos from "aos";
import {MyContext} from "../App/App";
import {Helmet} from "react-helmet";


const BussinesPageOne = () => {
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
            <title>Auto Dealerships</title>
            <meta name="description"
                  content="Reliable vehicle shipping services for auto dealerships. Simplify inventory transfers and ensure quick, secure deliveries."/>
        </Helmet>

        <header>
            <Header/>
            <Navbar/>
        </header>

        <main>
            <section className="header-content header-content-one">
                <div className="home-sloy">
                    <div className="home_contents">
                        <div className="left_side">
                            <div className="text-wrapper">
                                <strong className="top-text">
                                    Logistics & Leader Auto Ship
                                </strong>
                                <h1 className="text-large">
                                    <p data-aos="zoom-in">Reach your sales goals.
                                        Faster than ever</p>
                                </h1>
                                <article className="des-text">
                                    Navigate obstacles and determine the best path forward with Leader Auto Ship’s
                                    Business
                                    Solutions.
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
                    <img src="./for-business/one/photo1.webp" alt="Efficient dealership auto logistics services delivering substantial value." loading="lazy"/>
                </div>
                <div className="sides-text">
                    <h2 className="title">
                        Efficient dealership auto logistics services delivering substantial value.
                    </h2>
                    <article className="des">
                        Leader Auto Ship offers a suite of business solutions to bolster your dealership's operational
                        excellence, providing the resilience and capacity required for sustained growth. Our solutions
                        integrate dependable service and cutting-edge technology across every phase of a vehicle's
                        journey,
                        enhancing efficiency for shippers, carriers, and end consumers alike.
                    </article>
                </div>
            </section>

            <section className="section-works">
                <div className="sides-text">
                    <h2 className="title">
                        Capacity with flexibility
                    </h2>
                    <article className="des">
                        Leader Auto Ship’s extensive nationwide carrier network of over 16,000 ensures consistent and
                        available capacity along with the ability to weather market fluctuations with ease.

                        How do you need it shipped? We can secure open or enclosed transportation, expedited shipping or
                        create a custom solution to meet your exact requirements.
                    </article>
                </div>
                <div className="sides">
                    <img src="./for-business/one/photo2.webp" alt="Capacity with flexibility" loading="lazy"/>
                </div>
            </section>

            <section className="section-works">
                <div className="sides">
                    <img src="./for-business/one/photo3.webp" alt="Single unit to full-load capacity" loading="lazy"/>
                </div>
                <div className="sides-text">
                    <h2 className="title">
                        Single unit to full-load capacity
                    </h2>
                    <article className="des">
                        With a foundation in the retail market, Leader Auto Ship is the industry’s leader in single
                        vehicle
                        moves. Even if you just have one or two units to move, you need transportation fast, Leader Auto
                        Ship fast.
                        When your dealership has a large number of vehicles to transport, rely on Leader Auto Ship. We
                        can
                        handle high volume, multiple full loads for cars and trucks as well as motorcycles, powersports,
                        inoperable vehicles and more.
                    </article>
                </div>
            </section>

            <section className="section-works">
                <div className="sides-text">
                    <h2 className="title">
                        Reliable pricing and delivery
                    </h2>
                    <article className="des">
                        Leader Auto Ship has multiple ways to provide you with pricing information. We can use our
                        market
                        predictive calculator to offer spot quotes, customize set pricing to fit your exact needs or
                        provide
                        contract pricing.
                        Once you have the order and are ready for transportation, Leader Auto Ship is ready with speedy
                        dispatch and transit times. We can respond to your fluctuating schedule and move vehicles on and
                        off
                        your lots faster to decrease cycle time.
                    </article>
                </div>
                <div className="sides">
                    <img src="./for-business/one/photo4.webp" alt="Reliable pricing and delivery" loading="lazy"/>
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

export default BussinesPageOne