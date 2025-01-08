import "./style.scss";
import Navbar from "../Navbar/Navbar";
import React, {useEffect, useState, useContext, Suspense} from "react";
import Slider from "react-slick";
import Footer from "../footer/Footer";
import Header from "../header/Heade";
import Textra from 'react-textra'
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
import Aos from "aos";
import {useNavigate} from "react-router-dom";
import {MyContext} from "../App/App";
import axios from "axios";
import {Helmet} from "react-helmet"
import LazyLoad from 'react-lazyload';
import Loader from "../loader/Loader";

const LazyQuote = React.lazy(() => import("../quote/Quote"));


const Home = () => {
    let value = useContext(MyContext);
    const navigate = useNavigate();
    const [statistics, setStatistic] = useState();
    const [comments, setComments] = useState([])
    const [partners, setPartners] = useState([])
    const [counterOn, setCounterOn] = useState(false);
    const [homePhoto, setHomePhoto] = useState([
        {image: "./images/Background2.jpg"},
        {image: "./images/home_background3.jpg"},
        {image: "./images/home-image1.jpg"},
        {image: "./images/home-image2.jpg"},
        {image: "./images/home-image3.jpg"},
    ]);
    const [question, setQuestion] = useState([
        {
            title: "Is my vehicle insured during transport?",
            des: "Trucking damage claims are covered by carrier from $100,000 up to $250,000 cargo insurance per load, and a minimum of 3/4 of a million dollars public liability and property damage."
        },
        {
            title: "Can I put personal items in the car?",
            des: "You can put personal items up to 100 lbs. All Carriers are good without any extra fee if you have around 100-150 lbs.\n" +
                "\n" +
                "If it is more than 100 lbs, it needs to be negotiated with the assigned carrier. Leader Auto Ship LLC will do our best as much as we do to make it reasonable for you!"
        },
        {
            title: "When is the vehicle going to be picked-up?",
            des: "After an order is placed, we begin the process to assign one of the best available one based on your shipment date. If you need ASAP shipment, we can make it happen within 1-24 or max 48 hours after.\n" +
                "Then you will be given estimated pickup time. The carrier will call you to confirm the details ahead of schedule."
        },
        {
            title: "When will my vehicle be delivered?",
            des: "When you place an order, you will receive an estimated transit time for your shipment. This will give you a window for when your car will be delivered. Transit times depend on moving distance. With each delivery being unique, it is possible that your car would be delivered faster than the estimated transit time provided."
        },
        {
            title: "How do I pay for my auto shipping?",
            des: "We accept all major credit cards, electronic transfer, postal money order, and bank/certified check. No DEPOSIT FEE. We only get reservation fee once the suitable and available carrier is assigned with the guaranteed.\n" +
                "\n" +
                "The rest of the money you will pay ton the delivery spot once you get your car in cash or any certified funds. You can also do payment on Zelle, CashApp or Venmo!"
        }
    ]);
    const [contact, setContact] = useState("");

    const [ActiveQuestion, setActiveQuestion] = useState("");
    const settingsHomeSlider = {
        lazyLoad: false,
        slidesToShow: 1,
        dots: false,
        infinite: true,
        fade: true,
        speed: 2000,
        autoplay: true,
        navs: true,
        slidesToScroll: 1,
        initialSlide: 1,
        responsive: [{
            breakpoint: 1024, settings: {
                slidesToShow: 1, slidesToScroll: 1, infinite: true, dots: false
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

    useEffect(() => {
        axios.get(`${value.url}banner/`).then((response) => {
            setHomePhoto(response.data)

            response.data.forEach((data) => {
                if (!document.head.querySelector(`link[rel="preload"][href="${data["image"]}"]`)) {
                    const link = document.createElement('link');
                    link.rel = 'preload';
                    link.as = 'image';
                    link.href = data["image"];
                    document.head.appendChild(link);
                }
            });

        });

        axios.get(`${value.url}statistics/`).then((response) => {
            setStatistic(response.data[0])
        });

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

    return <div className="home-wrapper">
        <Helmet>
            <title>Leader Auto Ship</title>
            <meta name="description"
                  content="Leader Auto Ship is a Top-Rated Car Shipping Company in the United States, offering reliable door-to-door car shipping, motorcycle transport, and both open and enclosed auto transport services."/>
        </Helmet>
        <header>
            <Header/>
            <Navbar/>
        </header>
        <main>
            <section className="home_page">
                <Slider {...settingsHomeSlider}>
                    {homePhoto ? homePhoto.map((item, index) => {
                        return <div key={index}>
                            <LazyLoad height={200} offset={100} once>
                                <img
                                    key={index}
                                    src={item.image}
                                    alt="banner-leader-auto-ship"
                                    loading="eager"
                                />
                            </LazyLoad>
                        </div>
                    }) : ""}
                </Slider>
                <div className="home-sloy"></div>
                <div className="home_contents">
                    <div className="left_side">
                        <div className="text-wrapper">
                            <strong className="top-text">
                                Logistics & Leader Auto Ship
                            </strong>
                            <h1 data-aos="zoom-in" className="text-large">
                                <p> WE DELIVER</p>
                                <p>
                                    <Textra effect='scale'
                                            data={['Motorcycles', 'Suvs', 'Boats-Rvs', 'Pick up', 'Cars']}/>
                                </p>
                            </h1>
                            <article className="des-text">
                                Leader Auto Ship is Top-Rated Car Shipping
                                Company in the United States
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
                        <div data-aos="flip-right" className="get-quote-card">
                            <Suspense fallback={<Loader/>}>
                                <LazyQuote/>
                            </Suspense>
                        </div>
                    </div>
                </div>
            </section>
            <section className="about-us">
                <div className="img-side">
                    <video autoPlay loop muted playsInline preload="metadata">
                        <source src="./images/video2.mp4" type="video/mp4"/>
                        Your browser does not support video!
                    </video>
                </div>
                <div className="sides">
                    <strong className="main-title">
                        How do i book with an auto transport company?
                    </strong>
                    <h2 className="title">
                        Leader Auto ship’s company guide to quick, easy and safe auto shipping
                    </h2>
                    <div className="steps">
                        <div className="step">
                            <img src="./images/step1.webp" alt="step-one" loading="lazy"/>
                            <div className="text">
                                <h3 className="title-step">
                                    Step 1
                                </h3>
                                <article className="des">
                                    Quote and book your order
                                </article>
                            </div>
                        </div>
                        <div className="step">
                            <img src="./images/step2.webp" alt=""/>
                            <div className="text">
                                <h3 className="title-step">
                                    Step 2
                                </h3>
                                <article className="des">
                                    We pick up your vehicle
                                </article>
                            </div>
                        </div>
                        <div className="step">
                            <img src="./images/step3.webp" alt=""/>
                            <div className="text">
                                <h3 className="title-step">
                                    Step 3
                                </h3>
                                <article className="des">
                                    Recieve your vehicle
                                </article>
                            </div>
                        </div>
                    </div>
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
            <section className="section-service">
                <h3 className="main-title">
                    Services
                </h3>
                <h1 className="title">
                    Services We offer
                </h1>
                <div className="services-box">
                    <div data-aos="flip-right" className="service">
                        <div className="img-service">
                            <img src="./images/service1.webp" alt="DOOR TO DOOR SHIPPING" loading="lazy"/>
                        </div>
                        <h3 className="title">DOOR TO DOOR SHIPPING</h3>
                        <article className="des">
                            Door-to-door car shipping is the most convenient method of auto transport. You select a
                            specific
                            address for your vehicle to be picked up and dropped off. The truck driver will pick up
                            and
                            drop
                            off your vehicle as close to this desired address as safely and legally possible.
                        </article>
                    </div>
                    <div data-aos="flip-right" className="service">
                        <div className="img-service">
                            <img src="./images/service2.webp" alt="OPEN AUTO SHIPPING" loading="lazy"/>
                        </div>
                        <h3 className="title">OPEN AUTO SHIPPING</h3>
                        <article className="des">
                            Our reliable service ensures your vehicle reaches its destination securely and
                            affordably.
                            With
                            open carriers, we offer efficient, cost-effective transport, providing peace of mind for
                            your
                            car's journey.
                        </article>
                    </div>
                    <div data-aos="flip-right" className="service">
                        <div className="img-service">
                            <img src="./images/service3.webp" alt="ENCLOSED AUTO SHIPPING" loading="lazy"/>
                        </div>
                        <h3 className="title">ENCLOSED AUTO SHIPPING</h3>
                        <article className="des">
                            Enclosed car transport is a type of auto transport that adds protection for vehicles.
                            It’s a
                            great car shipping option if you need to transport a classic or luxury car. Enclosed
                            carriers
                            can often only carry a few vehicles at the same time, in most cases, up to 7
                            automobiles.
                        </article>
                    </div>
                    <div data-aos="flip-right" className="service">
                        <div className="img-service">
                            <img src="./images/service4.webp" alt="MOTORCYCLE SHIPPING"/>
                        </div>
                        <h3 className="title">MOTORCYCLE SHIPPING</h3>
                        <article className="des">
                            Nationwide motorcycle shipping has never been easier with Leader Auto Ship. We offer two
                            types
                            of motorcycle transport services to our customers: Door-to-Door (home delivery) and
                            shipping
                            between distribution centers. Home delivery (Door-to-Door) transport is the most common
                            and
                            preferred customer solution.
                        </article>
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
            <section className="delivery-container">
                <h3 className="main-title">
                    Shipping Destinations
                </h3>
                <div className="title">
                    <h1 className="title-left">
                        Where We Deliver Your Vehicles in the USA!
                    </h1>
                </div>
                <div className="contents">
                    <div data-aos="zoom-in" className="content">
                        <div className="img">
                            <img src="./images/state1.webp" alt="California" loading="lazy"/>
                        </div>
                        <strong className="title">
                            California
                        </strong>
                        <article className="des">
                            Car shipping services anywhere to or from The Golden State
                        </article>
                    </div>

                    <div data-aos="zoom-in" className="content">
                        <div className="img">
                            <img src="./images/state2.webp" alt="Florida" loading="lazy"/>
                        </div>
                        <strong className="title">
                            Florida
                        </strong>
                        <article className="des">
                            Florida auto transport services, to and from The Sunshine State
                        </article>
                    </div>

                    <div data-aos="zoom-in" className="content">
                        <div className="img">
                            <img src="./images/state4.webp" alt="Texas" loading="lazy"/>
                        </div>
                        <strong className="title">
                            Texas
                        </strong>
                        <article className="des">
                            Vehicle shipping services to and throughout The Lone Star State
                        </article>
                    </div>

                    <div data-aos="zoom-in" className="content">
                        <div className="img">
                            <img src="./images/state3.webp" alt="New York" loading="lazy"/>
                        </div>
                        <strong className="title">
                            New York
                        </strong>
                        <article className="des">
                            Transport your car anywhere to or from The Empire State
                        </article>
                    </div>
                </div>
                <div onClick={() => {
                    setTimeout(() => {
                        window.scrollTo(0, 0)
                    }, 200)
                    navigate("/states")
                }} className="more-btn">
                    More states
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
            <section className="quations-container">
                {question.map((item, index) => {
                    return <div key={index} className={`quation ${ActiveQuestion === index ? "active" : ""}`}>
                        <div className="top-side">
                            <h1 className="number">
                                0{index + 1}
                            </h1>
                            <h3 className="title">
                                {item.title}
                            </h3>
                            <div onClick={() => {
                                if (ActiveQuestion === index) {
                                    setActiveQuestion("")
                                } else setActiveQuestion(index)
                            }} className={`button ${ActiveQuestion === index ? "rotate-icon" : ""}`}>
                                <img src="./images/Union.png" alt="quation" loading="lazy"/>
                            </div>
                        </div>
                        {ActiveQuestion === index && <article className="des-quation">
                            {item.des}
                        </article>}
                    </div>
                })}

            </section>
        </main>

        <footer>
            <Footer/>
        </footer>
    </div>
};
export default Home