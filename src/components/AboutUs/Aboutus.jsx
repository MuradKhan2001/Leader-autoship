import "./style.scss"
import Header from "../header/Heade";
import Navbar from "../Navbar/Navbar";
import {useNavigate} from "react-router-dom";
import Footer from "../footer/Footer";
import Slider from "react-slick/lib";
import React, {useContext, useEffect, useState} from "react";
import ScrollTrigger from "react-scroll-trigger";
import CountUp from "react-countup";
import Aos from "aos";
import {MyContext} from "../App/App";
import axios from "axios";
import {Helmet} from "react-helmet";


const AboutUs = () => {
    const navigate = useNavigate();
    const [counterOn, setCounterOn] = useState(false)
    let value = useContext(MyContext);
    const [statistics, setStatistic] = useState();
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

        axios.get(`${value.url}statistics/`).then((response) => {
            setStatistic(response.data[0])
        });

        Aos.init({duration: 1000});
    }, []);

    return <div className="about-us-container">
        <Helmet>
            <title>Why us</title>
            <meta name="description"
                  content="Why choose us? We provide reliable, affordable, and fast vehicle shipping backed by excellent customer reviews and expert care. Leader Auto Ship llc is a top-rated auto transport company and has served more than one hundred thousand customers."/>
        </Helmet>
        <header>
            <Header/>
            <Navbar/>
        </header>
        <main>
            <section className="header-content">
                <div className="home-sloy">
                    <div className="home_contents">
                        <div className="left_side">
                            <div className="text-wrapper">
                                <strong className="top-text">
                                    Logistics & Leader Auto Ship
                                </strong>
                                <h1 className="text-large">
                                    <p data-aos="zoom-in">Over a Decade of Outstanding Delivery and Exponential
                                        Growth</p>
                                </h1>
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

            <section data-aos="fade-up" className="section-why-us">
                <div className="content-info">
                    <div className="side">
                        <h3 className="title">
                            Why you should book with one of the best auto shipping companies
                        </h3>
                        <article data-aos="zoom-in" className="info">
                            <img src="./images/plus1.webp" alt="DEDICATED ADVISORS" loading="lazy"/>
                            <h3 className="name">
                                DEDICATED ADVISORS
                            </h3>
                        </article>
                        <article data-aos="zoom-in" className="info">
                            <img src="./images/plus2.webp" alt="TOP RATED COMPANY" loading="lazy"/>
                            <h3 className="name">
                                TOP RATED COMPANY
                            </h3>
                        </article>
                        <article data-aos="zoom-in" className="info">
                            <img src="./images/Dollar.webp" alt="ZERO UPFRONT PAYMENT" loading="lazy"/>
                            <h3 className="name">
                                ZERO UPFRONT PAYMENT
                            </h3>
                        </article>
                        <article data-aos="zoom-in" className="info">
                            <img src="./images/plus4.webp" alt="INSURANCE COVERAGE" loading="lazy"/>
                            <h3 className="name">
                                INSURANCE COVERAGE
                            </h3>
                        </article>
                        <article data-aos="zoom-in" className="info">
                            <img src="./images/plus5.webp" alt="16K+ AUTO CARRIERS" loading="lazy"/>
                            <h3 className="name">
                                16K+ AUTO CARRIERS
                            </h3>
                        </article>
                    </div>
                    <div className="side">
                        <div className="main-images">
                            <img src="./images/about-us1.webp" alt="car-shipping" loading="lazy"/>
                            <div className="image">
                                <img src="./images/about-us3.webp" alt="car-shipping" loading="lazy"/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="counter">
                <h1 className="title">
                    The numbers show Who we are
                </h1>
                <div className="counts">
                    <div className="count">
                        <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
                            <div className="num">
                                {counterOn &&
                                    <CountUp start={0} end={statistics && statistics.clients} duration={2}
                                             delay={0}/>}
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
                                {counterOn &&
                                    <CountUp start={0} end={statistics && statistics.orders} duration={2}
                                             delay={0}/>}
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
                                {counterOn &&
                                    <CountUp start={0} end={statistics && statistics.projects} duration={2}
                                             delay={0}/>}
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
                                {counterOn &&
                                    <CountUp start={0} end={statistics && statistics.cities} duration={2}
                                             delay={0}/>}
                                +
                            </div>
                        </ScrollTrigger>
                        <div className="text">
                            DRIVERS
                        </div>
                    </div>
                </div>
            </section>

            <section className="what-we-do">
                <h3 className="main-title">
                    What We Offer
                </h3>
                <h1 className="title">
                    Discovering the Power of Our Advantages
                </h1>
                <div className="content-box">
                    <div className="content">
                        <div className="icon">
                            <img data-aos="flip-right" src="./images/persons.webp" alt="Dedicated advisors"
                                 loading="lazy"/>
                        </div>
                        <strong className="title">
                            Dedicated advisors
                        </strong>
                        <article className="des">
                            Our professional advisors work around the clock to ensure you receive the best auto
                            transport
                            experience.
                        </article>
                    </div>
                    <div className="content">
                        <div className="icon">
                            <img data-aos="flip-right" src="./images/Shield.webp" alt="Insurance coverage"
                                 loading="lazy"/>
                        </div>
                        <strong className="title">
                            Insurance coverage
                        </strong>
                        <article className="des">
                            Car transport companies include insurance coverage in your shipping quote. Our selected
                            auto
                            haulers must meet insurance standards before qualifying to be part of our carrier
                            network.
                        </article>
                    </div>
                    <div className="content">
                        <div className="icon">
                            <img data-aos="flip-right" src="./images/Document.webp" alt="Personalized approach"
                                 loading="lazy"/>
                        </div>
                        <strong className="title">
                            Personalized approach
                        </strong>
                        <article className="des">
                            Why choose our auto transport company? Leader Auto Ship works with you through every
                            step of
                            your car or truck’s move. Experience hassle-free shipping when you choose us as your car
                            transporter and enjoy an easy and painless shipment process.
                        </article>
                    </div>
                    <div className="content">
                        <div className="icon">
                            <img data-aos="flip-right" src="./images/Dollar.webp" alt="Zero upfront payment"
                                 loading="lazy"/>
                        </div>
                        <strong className="title">
                            Zero upfront payment
                        </strong>
                        <article className="des">
                            You read that right, no upfront payment! The best auto transport companies charge you
                            once
                            the
                            carrier has been dispatched for your order. So, you can book with your auto transport
                            company
                            now and not worry about the car shipping costs until later.
                        </article>
                    </div>
                    <div className="content">
                        <div className="icon">
                            <img data-aos="flip-right" src="./images/Star.webp" alt="Top rated company" loading="lazy"/>
                        </div>
                        <strong className="title">
                            Top rated company
                        </strong>
                        <article className="des">
                            We're a top-rated auto transport company, so your car will get from point A to point B
                            without
                            you having to break a single sweat. By having your car delivered straight to your door,
                            you’re
                            allowing the experts to handle every step of the process and ensure there are no speed
                            bumps
                            along the way.
                        </article>
                    </div>
                    <div className="content">
                        <div className="icon">
                            <img data-aos="flip-right" src="./images/Shield-tick.webp" alt="Auto cariers"
                                 loading="lazy"/>
                        </div>
                        <strong className="title">
                            Auto cariers
                        </strong>
                        <article className="des">
                            Our auto transporter company has a huge network of haulers who are personally vetted
                            auto
                            shipping experts, ensuring your vehicle is transported by trusted members of the
                            industry.
                            These
                            vehicle transport companies will treat your car like their own.
                        </article>
                    </div>
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
        </main>
        <footer>
            <Footer/>
        </footer>
    </div>
};

export default AboutUs