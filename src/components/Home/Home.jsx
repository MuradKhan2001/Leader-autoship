import "./style.scss";
import Navbar from "../Navbar/Navbar";
import React, {useEffect, useState} from "react";
import Slider from "react-slick";
import Footer from "../footer/Footer";
import Header from "../header/Heade";
import Typical from "react-typical"
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
import Aos from "aos";
import {useNavigate} from "react-router-dom";
import ReactPlayer from "react-player";


const Home = () => {
    const navigate = useNavigate();
    const [radioQuote, setRadioQuote] = useState("open");
    const [checkBoxQuote, setCheckBoxQuote] = useState(false);
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
            des: "You can put personal items up to 100 lbs. in a box or single piece of luggage that will be in the trunk of the car during transport."
        },
        {
            title: "When is the vehicle going to be picked-up?",
            des: "After an order is placed, we search our car carrier network to find a trucker to transport your vehicle. We will assign the best one available and give you an estimated pickup time. The trucker will call you to confirm the details ahead of schedule."
        },
        {
            title: "When will my vehicle be delivered?",
            des: "When you place an order, you will receive an estimated transit time for your shipment. This will give you a window for when your car will be delivered. Transit times depend on moving distance. With each delivery being unique, it is possible that your car would be delivered faster than the estimated transit time provided."
        },
        {
            title:"How do I pay for my auto shipping?",
            des:"We accept all major credit cards, electronic transfer, postal money order, and bank/certified check for the deposit. The rest of the money you will pay on the delivery spot once you get your car in cash or any certified funds. You can also do payment on Zelle, CashApp or Venmo!"
        }
    ]);

    const [ActiveQuestion, setActiveQuestion] = useState("");

    useEffect(() => {
        Aos.init({duration: 1000});
    }, []);

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
        centerMode: true,
        centerPadding: 0,
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

    return <div className="home-wrapper">
        <Header/>
        <Navbar/>
        <div className="home_page">
            <Slider {...settingsHomeSlider}>
                {homePhoto ? homePhoto.map((item, index) => {
                    return <div key={index}>
                        <img src={item.image} alt=""/>
                    </div>
                }) : ""}
            </Slider>
            <div className="home-sloy"></div>
            <div className="home_contents">
                <div className="left_side">
                    <div className="text-wrapper">
                        <div className="top-text">
                            Logistics & Leader Auto Ship
                        </div>
                        <div className="text-large">
                            <p> WE DELIVER</p>
                            <Typical
                                loop={Infinity}
                                steps={[
                                    "Motorcycles",
                                    2300,
                                    "Suvs",
                                    2300,
                                    "Boats-Rvs",
                                    2300,
                                    "Pick up",
                                    2300,
                                    "Cars",
                                    2300,
                                ]}/>
                        </div>
                        <div className="des-text">
                            Leader Auto Ship is Top-Rated Car Shipping
                            Company in the United States
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
                    <div data-aos="flip-right" className="get-quote-card">
                        <div className="title-quote">
                            Get a quote online, or call at
                        </div>
                        <div className="num-company">
                            (610) 982-4587
                        </div>
                        <div className="icons-quote">
                            <div className="icon-quote active">
                                <img src="./images/mdi_location.png" alt=""/>
                            </div>
                            <div className="line-quote"></div>
                            <div className="icon-quote">
                                <img src="./images/truck.png" alt=""/>
                            </div>
                            <div className="line-quote"></div>
                            <div className="icon-quote">
                                <img src="./images/person.png" alt=""/>
                            </div>
                            <div className="line-quote"></div>
                            <div className="icon-quote">
                                <img src="./images/check_circle.png" alt=""/>
                            </div>
                        </div>

                        <div className="input-quote">
                            <label htmlFor="from">transport car from:*</label>
                            <input placeholder="ZIP or City" id="from" type="text"/>
                        </div>

                        <div className="input-quote">
                            <label htmlFor="from">transport car to:*</label>
                            <input placeholder="ZIP or City" id="from" type="text"/>
                        </div>

                        <div className="radio-quote">
                            <div className="label-radios">
                                transport type:*
                            </div>

                            <div onClick={() => setRadioQuote("open")} className="radio">
                                <div className={`radio-btn ${radioQuote === "open" ? "active" : ""}`}>
                                    <div
                                        className={`radio-circle ${radioQuote === "open" ? "active-radio" : ""}`}></div>
                                </div>
                                <div className="radio-text">
                                    Open
                                </div>
                            </div>

                            <div onClick={() => setRadioQuote("enclosed")} className="radio">
                                <div className={`radio-btn ${radioQuote === "enclosed" ? "active" : ""}`}>
                                    <div
                                        className={`radio-circle ${radioQuote === "enclosed" ? "active-radio" : ""}`}></div>
                                </div>
                                <div className="radio-text">
                                    Enclosed
                                </div>
                            </div>

                            <div className="radio">
                                <div className="check-box">
                                    <div className="checkbox-wrapper-13">
                                        <input
                                            onChange={(e) => {
                                                setCheckBoxQuote((prevState) => !prevState);
                                            }}
                                            id="c1-13"
                                            type="checkbox"
                                        />
                                    </div>
                                    <label htmlFor="c1-13">
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur eius iste
                                        repellendus similique, ullam vero.
                                    </label>
                                </div>
                            </div>
                        </div>

                        <button className="quote-btn">
                            Next
                        </button>

                    </div>
                </div>
            </div>
        </div>
        <div className="about-us">
            <div className="img-side">
                <ReactPlayer
                    controls
                    url='https://youtu.be/LCyYjYJnjUk'/>
            </div>
            <div className="sides">
                <div className="main-title">
                    How do i book with an auto transport company?
                </div>
                <div className="title">
                    Leader Auto ship’s company guide to quick, easy and safe auto shipping
                </div>
                <div className="steps">
                    <div className="step">
                        <img src="./images/step1.png" alt=""/>
                        <div className="text">
                            <div className="title-step">
                                Step 1
                            </div>
                            <div className="des">
                                Quote and book your order
                            </div>
                        </div>
                    </div>
                    <div className="step">
                        <img src="./images/step2.png" alt=""/>
                        <div className="text">
                            <div className="title-step">
                                Step 2
                            </div>
                            <div className="des">
                                We pick up your vehicle
                            </div>
                        </div>
                    </div>
                    <div className="step">
                        <img src="./images/step3.png" alt=""/>
                        <div className="text">
                            <div className="title-step">
                                Step 3
                            </div>
                            <div className="des">
                                Recieve your vehicle
                            </div>
                        </div>
                    </div>
                </div>
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
        <div className="section-service">
            <div className="main-title">
                Services
            </div>
            <div className="title">
                Services We offer
            </div>
            <div className="services-box">
                <div data-aos="flip-right" className="service">
                    <div className="img-service">
                        <img src="./images/service1.jpg" alt=""/>
                    </div>
                    <div className="title">DOOR TO DOOR SHIPPING</div>
                    <div className="des">
                        Door-to-door car shipping is the most convenient method of auto transport. You select a specific
                        address for your vehicle to be picked up and dropped off. The truck driver will pick up and drop
                        off your vehicle as close to this desired address as safely and legally possible.
                    </div>
                </div>
                <div data-aos="flip-right" className="service">
                    <div className="img-service">
                        <img src="./images/service2.jpg" alt=""/>
                    </div>
                    <div className="title">OPEN AUTO SHIPPING</div>
                    <div className="des">
                        Our reliable service ensures your vehicle reaches its destination securely and affordably. With
                        open carriers, we offer efficient, cost-effective transport, providing peace of mind for your
                        car's journey.
                    </div>
                </div>
                <div data-aos="flip-right" className="service">
                    <div className="img-service">
                        <img src="./images/service3.jpg" alt=""/>
                    </div>
                    <div className="title">ENCLOSED AUTO SHIPPING</div>
                    <div className="des">
                        Enclosed car transport is a type of auto transport that adds protection for vehicles. It’s a
                        great car shipping option if you need to transport a classic or luxury car. Enclosed carriers
                        can often only carry a few vehicles at the same time, in most cases, up to 7 automobiles.
                    </div>
                </div>
                <div data-aos="flip-right" className="service">
                    <div className="img-service">
                        <img src="./images/service4.jpg" alt=""/>
                    </div>
                    <div className="title">MOTORCYCLE SHIPPING</div>
                    <div className="des">
                        Nationwide motorcycle shipping has never been easier with Leader Auto Ship. We offer two types
                        of motorcycle transport services to our customers: Door-to-Door (home delivery) and shipping
                        between distribution centers. Home delivery (Door-to-Door) transport is the most common and
                        preferred customer solution.
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
        <div className="delivery-container">
            <div className="main-title">
                Shipping Destinations
            </div>
            <div className="title">
                <div className="title-left">
                    Where We Deliver Your Vehicles in the USA!
                </div>
            </div>
            <div className="contents">
                <div data-aos="zoom-in" className="content">
                    <div className="img">
                        <img src="./images/state1.png" alt=""/>
                    </div>
                    <div className="title">
                        California
                    </div>
                    <div className="des">
                        Car shipping services anywhere to or from The Golden State
                    </div>
                </div>

                <div data-aos="zoom-in" className="content">
                    <div className="img">
                        <img src="./images/state2.png" alt=""/>
                    </div>
                    <div className="title">
                        Florida
                    </div>
                    <div className="des">
                        Florida auto transport services, to and from The Sunshine State
                    </div>
                </div>

                <div data-aos="zoom-in" className="content">
                    <div className="img">
                        <img src="./images/state4.png" alt=""/>
                    </div>
                    <div className="title">
                        Texas
                    </div>
                    <div className="des">
                        Vehicle shipping services to and throughout The Lone Star State
                    </div>
                </div>

                <div data-aos="zoom-in" className="content">
                    <div className="img">
                        <img src="./images/state3.png" alt=""/>
                    </div>
                    <div className="title">
                        New York
                    </div>
                    <div className="des">
                        Transport your car anywhere to or from The Empire State
                    </div>
                </div>
            </div>
            <div onClick={() => navigate("/states")} className="more-btn">
                More states
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
        <div className="quations-container">
            {question.map((item, index) => {
                return <div className={`quation ${ActiveQuestion === index ? "active" : ""}`}>
                    <div className="top-side">
                        <div className="number">
                            0{index + 1}
                        </div>
                        <div className="title">
                            {item.title}
                        </div>
                        <div onClick={() => {
                            if (ActiveQuestion === index) {
                                setActiveQuestion("")
                            } else setActiveQuestion(index)
                        }} className={`button ${ActiveQuestion === index ? "rotate-icon" : ""}`}>
                            <img src="./images/Union.png" alt=""/>
                        </div>
                    </div>
                    {ActiveQuestion === index && <div className="des-quation">
                        {item.des}
                    </div>}
                </div>
            })}

        </div>
        <Footer/>
    </div>
};
export default Home