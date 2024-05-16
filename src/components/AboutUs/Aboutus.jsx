import "./style.scss"
import Header from "../header/Heade";
import Navbar from "../Navbar/Navbar";
import {useNavigate} from "react-router-dom";
import Footer from "../footer/Footer";
import Slider from "react-slick/lib";
import React, {useEffect, useState} from "react";
import ScrollTrigger from "react-scroll-trigger";
import CountUp from "react-countup";
import Aos from "aos";


const AboutUs = () => {
    const navigate = useNavigate();
    const [counterOn, setCounterOn] = useState(false)

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

    useEffect(() => {
        Aos.init({duration: 1000});
    }, []);

    return <div className="about-us-container">
        <Header/>
        <Navbar/>
        <div className="header-content">
            <div className="home-sloy">
                <div className="home_contents">
                    <div className="left_side">
                        <div className="text-wrapper">
                            <div className="top-text">
                                Logistics & Leader Auto Ship
                            </div>
                            <div className="text-large">
                                <p>Over a Decade of Outstanding Delivery and Exponential Growth</p>
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

        <div data-aos="fade-up" className="section-why-us">
            <div className="content-info">
                <div className="side">
                    <div className="title">
                        Why you should book with one of the best auto shipping companies
                    </div>

                    <div data-aos="zoom-in" className="info">
                        <img src="./images/plus1.png" alt=""/>
                        <div className="name">
                            DEDICATED ADVISORS
                        </div>
                    </div>
                    <div data-aos="zoom-in" className="info">
                        <img src="./images/plus2.png" alt=""/>
                        <div className="name">
                            TOP RATED COMPANY
                        </div>
                    </div>
                    <div data-aos="zoom-in" className="info">
                        <img src="./images/Dollar.png" alt=""/>
                        <div className="name">
                            ZERO UPFRONT PAYMENT
                        </div>
                    </div>
                    <div data-aos="zoom-in" className="info">
                        <img src="./images/plus4.png" alt=""/>
                        <div className="name">
                            INSURANCE COVERAGE
                        </div>
                    </div>
                    <div data-aos="zoom-in" className="info">
                        <img src="./images/plus5.png" alt=""/>
                        <div className="name">
                            16K+ AUTO CARRIERS
                        </div>
                    </div>
                </div>
                <div className="side">
                    <div className="main-images">
                        <img src="./images/about-us1.jpg" alt=""/>
                        <div className="image">
                            <img src="./images/about-us3.jpg" alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="counter">
            <div className="title">
                The numbers show Who we are
            </div>
            <div className="counts">
                <div className="count">
                    <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
                        <div className="num">
                            {counterOn && <CountUp start={0} end={22890} duration={2} delay={0}/>}
                            +
                        </div>
                    </ScrollTrigger>
                    <div className="text">
                        SATISFIED CUSTOMER
                    </div>
                </div>
                <div className="count">
                    <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
                        <div className="num">
                            {counterOn && <CountUp start={0} end={1275} duration={2} delay={0}/>}
                            +
                        </div>
                    </ScrollTrigger>
                    <div className="text">
                        REVIEWS
                    </div>
                </div>
                <div className="count">
                    <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
                        <div className="num">
                            {counterOn && <CountUp start={0} end={3} duration={2} delay={0}/>}
                            +
                        </div>
                    </ScrollTrigger>
                    <div className="text">
                        EXPERIENCE
                    </div>
                </div>
                <div className="count">
                    <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
                        <div className="num">
                            {counterOn && <CountUp start={0} end={15000} duration={2} delay={0}/>}
                            +
                        </div>
                    </ScrollTrigger>
                    <div className="text">
                        DRIVERS
                    </div>
                </div>
            </div>
        </div>

        <div className="what-we-do">
            <div className="main-title">
                What We Offer
            </div>
            <div className="title">
                Discovering the Power of Our Advantages
            </div>
            <div className="content-box">
                <div className="content">
                    <div className="icon">
                        <img src="./images/persons.png" alt=""/>
                    </div>
                    <div className="title">
                        Dedicated advisors
                    </div>
                    <div className="des">
                        Our professional advisors work around the clock to ensure you receive the best auto transport
                        experience.
                    </div>
                </div>
                <div className="content">
                    <div className="icon">
                        <img src="./images/Shield.png" alt=""/>
                    </div>
                    <div className="title">
                        Insurance coverage
                    </div>
                    <div className="des">
                        Car transport companies include insurance coverage in your shipping quote. Our selected auto
                        haulers must meet insurance standards before qualifying to be part of our carrier network.
                    </div>
                </div>
                <div className="content">
                    <div className="icon">
                        <img src="./images/Document.png" alt=""/>
                    </div>
                    <div className="title">
                        Personalized approach
                    </div>
                    <div className="des">
                        Why choose our auto transport company? Leader Auto Ship works with you through every step of
                        your car or truck’s move. Experience hassle-free shipping when you choose us as your car
                        transporter and enjoy an easy and painless shipment process.
                    </div>
                </div>
                <div className="content">
                    <div className="icon">
                        <img src="./images/Dollar.png" alt=""/>
                    </div>
                    <div className="title">
                        Zero upfront payment
                    </div>
                    <div className="des">
                        You read that right, no upfront payment! The best auto transport companies charge you once the
                        carrier has been dispatched for your order. So, you can book with your auto transport company
                        now and not worry about the car shipping costs until later.
                    </div>
                </div>
                <div className="content">
                    <div className="icon">
                        <img src="./images/Star.png" alt=""/>
                    </div>
                    <div className="title">
                        Top rated company
                    </div>
                    <div className="des">
                        We're a top-rated auto transport company, so your car will get from point A to point B without
                        you having to break a single sweat. By having your car delivered straight to your door, you’re
                        allowing the experts to handle every step of the process and ensure there are no speed bumps
                        along the way.
                    </div>
                </div>
                <div className="content">
                    <div className="icon">
                        <img src="./images/Shield-tick.png" alt=""/>
                    </div>
                    <div className="title">
                        Auto cariers
                    </div>
                    <div className="des">
                        Our auto transporter company has a huge network of haulers who are personally vetted auto
                        shipping experts, ensuring your vehicle is transported by trusted members of the industry. These
                        vehicle transport companies will treat your car like their own.
                    </div>
                </div>
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

        <Footer/>
    </div>
};

export default AboutUs