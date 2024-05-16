import "./style.scss"
import Header from "../header/Heade";
import Navbar from "../Navbar/Navbar";
import {useNavigate} from "react-router-dom";
import Footer from "../footer/Footer";
import Slider from "react-slick/lib";
import React, {useState} from "react";


const BussinesPageOne = () => {
    const navigate = useNavigate();

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
        centerMode: true,
        centerPadding: 0,
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
                slidesToShow: 2, slidesToScroll: 2
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
        centerMode: true,
        centerPadding: 0,
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

    return <div className="for-business-container">
        <Header/>
        <Navbar/>
        <div className="header-content header-content-one">
            <div className="home-sloy">
                <div className="home_contents">
                    <div className="left_side">
                        <div className="text-wrapper">
                            <div className="top-text">
                                Logistics & Leader Auto Ship
                            </div>
                            <div className="text-large">
                                <p>Reach your sales goals.
                                    Faster than ever</p>
                            </div>
                            <div className="des-text">
                                Navigate obstacles and determine the best path forward with United Freeway
                                Transportation’s Business Solutions.
                            </div>
                            <div className="buttons-home">
                                <button onClick={() => navigate("/get-quote")} type="button" className="button-home">
                                    Get a quote
                                </button>
                                <button type="button" className="button-home">
                                    Call now
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="right_side">
                    </div>
                </div>
            </div>
        </div>

        <div className="section-works">
            <div className="sides">
                <img src="./for-business/one/photo1.jpg" alt=""/>
            </div>
            <div className="sides-text">
                <div className="title">
                    Efficient dealership auto logistics services delivering substantial value.
                </div>
                <div className="des">
                    Leader Auto Ship offers a suite of business solutions to bolster your dealership's operational
                    excellence, providing the resilience and capacity required for sustained growth. Our solutions
                    integrate dependable service and cutting-edge technology across every phase of a vehicle's journey,
                    enhancing efficiency for shippers, carriers, and end consumers alike.
                </div>
            </div>
        </div>

        <div className="section-works">
            <div className="sides-text">
                <div className="title">
                    Capacity with flexibility
                </div>
                <div className="des">
                    Leader Auto Ship’s extensive nationwide carrier network of over 16,000 ensures consistent and
                    available capacity along with the ability to weather market fluctuations with ease.

                    How do you need it shipped? We can secure open or enclosed transportation, expedited shipping or
                    create a custom solution to meet your exact requirements.
                </div>
            </div>
            <div className="sides">
                <img src="./for-business/one/photo2.jpg" alt=""/>
            </div>
        </div>

        <div className="section-works">
            <div className="sides">
                <img src="./for-business/one/photo3.jpg" alt=""/>
            </div>
            <div className="sides-text">
                <div className="title">
                    Single unit to full-load capacity
                </div>
                <div className="des">
                    With a foundation in the retail market, Leader Auto Ship is the industry’s leader in single vehicle
                    moves. Even if you just have one or two units to move, you need transportation fast, Leader Auto
                    Ship fast.
                    When your dealership has a large number of vehicles to transport, rely on Leader Auto Ship. We can
                    handle high volume, multiple full loads for cars and trucks as well as motorcycles, powersports,
                    inoperable vehicles and more.
                </div>
            </div>
        </div>

        <div className="section-works">
            <div className="sides-text">
                <div className="title">
                    Reliable pricing and delivery
                </div>
                <div className="des">
                    Leader Auto Ship has multiple ways to provide you with pricing information. We can use our market
                    predictive calculator to offer spot quotes, customize set pricing to fit your exact needs or provide
                    contract pricing.
                    Once you have the order and are ready for transportation, Leader Auto Ship is ready with speedy
                    dispatch and transit times. We can respond to your fluctuating schedule and move vehicles on and off
                    your lots faster to decrease cycle time.
                </div>
            </div>
            <div className="sides">
                <img src="./for-business/one/photo4.jpg" alt=""/>
            </div>
        </div>

        <div className="partners">
            <Slider {...settingsPartners}>
                <div className="logo">
                    <img src="./images/partner1.png" alt=""/>
                </div>
                <div className="logo">
                    <img src="./images/footer-img.png" alt=""/>
                </div>
                <div className="logo">
                    <img src="./images/partner2.png" alt=""/>
                </div>
                <div className="logo">
                    <img src="./images/partner3.png" alt=""/>
                </div>
                <div className="logo">
                    <img src="./images/partner4.png" alt=""/>
                </div>
                <div className="logo">
                    <img src="./images/partner5.png" alt=""/>
                </div>
                <div className="logo">
                    <img src="./images/partner6.png" alt=""/>
                </div>
            </Slider>
        </div>
        <div className="reviews-container">
            <div className="main-title">
                Explore Our Reviews!
            </div>
            <div className="title">
                See What Our Customers are Saying
            </div>
            <div className="slider-box-reviews">
                <Slider {...settingsReviews}>
                    <div className="review">
                        <div className="content">
                            <div className="header">
                                <div className="left">
                                    <div className="name">
                                        <div className="name-user">Mr. Smith</div>
                                        User
                                    </div>
                                </div>
                                <div className="google">
                                    <img src="./images/devicon_google.png" alt=""/>
                                </div>
                            </div>
                            <div className="des">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni, nobis.
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni, nobis.
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni, nobis.
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni, nobis.
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni, nobis.
                            </div>
                            <div className="stars">
                                <img src="./images/star1.png" alt=""/>
                                <img src="./images/star1.png" alt=""/>
                                <img src="./images/star1.png" alt=""/>
                                <img src="./images/star1.png" alt=""/>
                                <img src="./images/star1.png" alt=""/>
                            </div>
                        </div>
                    </div>

                    <div className="review">
                        <div className="content">
                            <div className="header">
                                <div className="left">
                                    <div className="name">
                                        <div className="name-user">Mr. Smith</div>
                                        User
                                    </div>
                                </div>
                                <div className="google">
                                    <img src="./images/devicon_google.png" alt=""/>
                                </div>
                            </div>
                            <div className="des">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni, nobis.
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni, nobis.
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni, nobis.
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni, nobis.
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni, nobis.
                            </div>
                            <div className="stars">
                                <img src="./images/star1.png" alt=""/>
                                <img src="./images/star1.png" alt=""/>
                                <img src="./images/star1.png" alt=""/>
                                <img src="./images/star1.png" alt=""/>
                                <img src="./images/star1.png" alt=""/>
                            </div>
                        </div>
                    </div>

                    <div className="review">
                        <div className="content">
                            <div className="header">
                                <div className="left">
                                    <div className="name">
                                        <div className="name-user">Mr. Smith</div>
                                        User
                                    </div>
                                </div>
                                <div className="google">
                                    <img src="./images/devicon_google.png" alt=""/>
                                </div>
                            </div>
                            <div className="des">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni, nobis.
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni, nobis.
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni, nobis.
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni, nobis.
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni, nobis.
                            </div>
                            <div className="stars">
                                <img src="./images/star1.png" alt=""/>
                                <img src="./images/star1.png" alt=""/>
                                <img src="./images/star1.png" alt=""/>
                                <img src="./images/star1.png" alt=""/>
                                <img src="./images/star1.png" alt=""/>
                            </div>
                        </div>
                    </div>

                    <div className="review">
                        <div className="content">
                            <div className="header">
                                <div className="left">
                                    <div className="name">
                                        <div className="name-user">Mr. Smith</div>
                                        User
                                    </div>
                                </div>
                                <div className="google">
                                    <img src="./images/devicon_google.png" alt=""/>
                                </div>
                            </div>
                            <div className="des">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni, nobis.
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni, nobis.
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni, nobis.
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni, nobis.
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni, nobis.
                            </div>
                            <div className="stars">
                                <img src="./images/star1.png" alt=""/>
                                <img src="./images/star1.png" alt=""/>
                                <img src="./images/star1.png" alt=""/>
                                <img src="./images/star1.png" alt=""/>
                                <img src="./images/star1.png" alt=""/>
                            </div>
                        </div>
                    </div>

                    <div className="review">
                        <div className="content">
                            <div className="header">
                                <div className="left">
                                    <div className="name">
                                        <div className="name-user">Mr. Smith</div>
                                        User
                                    </div>
                                </div>
                                <div className="google">
                                    <img src="./images/devicon_google.png" alt=""/>
                                </div>
                            </div>
                            <div className="des">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni, nobis.
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni, nobis.
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni, nobis.
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni, nobis.
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni, nobis.
                            </div>
                            <div className="stars">
                                <img src="./images/star1.png" alt=""/>
                                <img src="./images/star1.png" alt=""/>
                                <img src="./images/star1.png" alt=""/>
                                <img src="./images/star1.png" alt=""/>
                                <img src="./images/star1.png" alt=""/>
                            </div>
                        </div>
                    </div>

                    <div className="review">
                        <div className="content">
                            <div className="header">
                                <div className="left">
                                    <div className="name">
                                        <div className="name-user">Mr. Smith</div>
                                        User
                                    </div>
                                </div>
                                <div className="google">
                                    <img src="./images/devicon_google.png" alt=""/>
                                </div>
                            </div>
                            <div className="des">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni, nobis.
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni, nobis.
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni, nobis.
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni, nobis.
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni, nobis.
                            </div>
                            <div className="stars">
                                <img src="./images/star1.png" alt=""/>
                                <img src="./images/star1.png" alt=""/>
                                <img src="./images/star1.png" alt=""/>
                                <img src="./images/star1.png" alt=""/>
                                <img src="./images/star1.png" alt=""/>
                            </div>
                        </div>
                    </div>

                </Slider>
            </div>
        </div>
        <Footer/>
    </div>
};

export default BussinesPageOne