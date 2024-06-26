import "./style.scss";
import Navbar from "../Navbar/Navbar";
import React, {useEffect, useState, useContext} from "react";
import Slider from "react-slick";
import Footer from "../footer/Footer";
import Header from "../header/Heade";
import Typical from "react-typical"
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
import Aos from "aos";
import {useNavigate} from "react-router-dom";
import {MyContext} from "../App/App";
import axios from "axios";


const Home = () => {
    let value = useContext(MyContext);
    const navigate = useNavigate();
    const [radioQuote, setRadioQuote] = useState("open");
    const [checkBoxQuote, setCheckBoxQuote] = useState(false);
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
            title: "How do I pay for my auto shipping?",
            des: "We accept all major credit cards, electronic transfer, postal money order, and bank/certified check for the deposit. The rest of the money you will pay on the delivery spot once you get your car in cash or any certified funds. You can also do payment on Zelle, CashApp or Venmo!"
        }
    ]);
    const [contact, setContact] = useState("");
    const [quote, setQuote] = useState(1)

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
                        <div data-aos="zoom-in" className="text-large">
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

                            <a href={`tel:${contact.phone1}`} className="button-home">
                                Call now
                            </a>
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
                            <div className={`icon-quote ${quote === 1 || quote === 2 || quote === 3 ? "active" : ""}`}>
                                <img src="./images/mdi_location.png" alt=""/>
                            </div>

                            <div className={`line-quote ${quote === 2 || quote === 3 ? "active" : ""}`}></div>
                            <div className={`icon-quote ${quote === 2 || quote === 3 ? "active" : ""}`}>
                                <img src="./images/truck.png" alt=""/>
                            </div>

                            <div className={`line-quote ${quote === 3 ? "active" : ""}`}></div>
                            <div className={`icon-quote ${quote === 3 ? "active" : ""}`}>
                                <img src="./images/person.png" alt=""/>
                            </div>

                            <div className={`line-quote ${quote === 4 ? "active" : ""}`}></div>
                            <div className={`icon-quote ${quote === 4 ? "active" : ""}`}>
                                <img src="./images/check_circle.png" alt=""/>
                            </div>
                        </div>

                        {
                            quote === 1 &&
                            <div className="step1">
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
                                                By checking this box, you agree to our Terms and Privacy Policy,
                                                allowing us to send sms to the provided phone number. Your
                                                consent is not required for purchasing any items, commodities, or
                                                services. Message and data rates may apply.
                                            </label>
                                        </div>
                                    </div>
                                </div>

                                <button onClick={() => setQuote(2)} className="quote-btn">
                                    Next
                                </button>
                            </div>
                        }

                        {
                            quote === 2 &&
                            <div className="step2">
                                <div className="input-quote">
                                    <label htmlFor="from">Vehicle type:*</label>
                                    <select name="vehicle" id="vehicle">
                                        <option value="">Car</option>
                                        <option value="">Truck</option>
                                    </select>
                                </div>
                                <div className="input-quote">
                                    <label htmlFor="from">Vehicle year: *</label>
                                    <select name="vehicle" id="vehicle">
                                        <option value="">2023</option>
                                        <option value="">2024</option>
                                    </select>
                                </div>
                                <div className="input-quote">
                                    <label htmlFor="from">Vehicle make:*</label>
                                    <select name="vehicle" id="vehicle">
                                        <option value="">BMW</option>
                                        <option value="">Ford</option>
                                    </select>
                                </div>
                                <div className="input-quote">
                                    <label htmlFor="from">Vehicle model:*</label>
                                    <select name="vehicle" id="vehicle">
                                        {/*<option value="">Car</option>*/}
                                        {/*<option value="">Truck</option>*/}
                                    </select>
                                </div>
                                <div className="radio-quote">
                                    <div className="label-radios">
                                        Is it running? *
                                    </div>
                                    <div onClick={() => setRadioQuote("open")} className="radio">
                                        <div className={`radio-btn ${radioQuote === "open" ? "active" : ""}`}>
                                            <div
                                                className={`radio-circle ${radioQuote === "open" ? "active-radio" : ""}`}></div>
                                        </div>
                                        <div className="radio-text">
                                            Yes
                                        </div>
                                    </div>
                                    <div onClick={() => setRadioQuote("enclosed")} className="radio">
                                        <div className={`radio-btn ${radioQuote === "enclosed" ? "active" : ""}`}>
                                            <div
                                                className={`radio-circle ${radioQuote === "enclosed" ? "active-radio" : ""}`}></div>
                                        </div>
                                        <div className="radio-text">
                                            No
                                        </div>
                                    </div>
                                </div>
                                <div className="button-box">
                                    <button onClick={() => setQuote(1)} className="prev-btn">
                                        Previous
                                    </button>

                                    <button onClick={() => setQuote(3)} className="quote-btn">
                                        Next
                                    </button>
                                </div>
                            </div>
                        }

                        {
                            quote === 3 &&
                            <div className="step1">
                                <div className="input-quote">
                                    <label htmlFor="from">First available date: *</label>
                                    <input id="from" type="date"/>
                                </div>
                                <div className="input-quote">
                                    <label htmlFor="from">Full Name: *</label>
                                    <input placeholder="Input your full name " id="from" type="text"/>
                                </div>
                                <div className="input-quote">
                                    <label htmlFor="from">Phone: *</label>
                                    <input placeholder="Contact No " id="from" type="text"/>
                                </div>
                                <div className="input-quote">
                                    <label htmlFor="from">Send a copy of the quote to: *</label>
                                    <input placeholder="Enter your email" id="from" type="text"/>
                                </div>
                                <div className="button-box">
                                    <button onClick={() => setQuote(2)} className="prev-btn">
                                        Previous
                                    </button>

                                    <button className="quote-btn">
                                        Submit
                                    </button>
                                </div>
                            </div>
                        }
                    </div>
                </div>
            </div>
        </div>
        <div className="about-us">
            <div className="img-side">
                <video autoPlay loop muted src="./images/video2.mp4"></video>
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
                            {counterOn &&
                            <CountUp start={0} end={statistics && statistics.clients} duration={2} delay={0}/>}
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
                            <CountUp start={0} end={statistics && statistics.orders} duration={2} delay={0}/>}
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
                            <CountUp start={0} end={statistics && statistics.projects} duration={2} delay={0}/>}
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
                            <CountUp start={0} end={statistics && statistics.cities} duration={2} delay={0}/>}
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
                        <img data-aos="flip-right" src="./images/persons.png" alt=""/>
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
                        <img data-aos="flip-right" src="./images/Shield.png" alt=""/>
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
                        <img data-aos="flip-right" src="./images/Document.png" alt=""/>
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
                        <img data-aos="flip-right" src="./images/Dollar.png" alt=""/>
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
                        <img data-aos="flip-right" src="./images/Star.png" alt=""/>
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
                        <img data-aos="flip-right" src="./images/Shield-tick.png" alt=""/>
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
                    {comments.map((item, index) => {
                        return <div key={index} className="review">
                            <div className="content">
                                <div className="header">
                                    <div className="left">
                                        <div className="name">
                                            <div className="name-user">{item.name}</div>
                                        </div>
                                    </div>
                                    <div className="google">
                                        <img src={item.image} alt=""/>
                                    </div>
                                </div>
                                <div className="des">
                                    {item.comment}
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
                    })}


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
            <div onClick={() => {
                setTimeout(() => {
                    window.scrollTo(0, 0)
                }, 200)
                navigate("/states")
            }} className="more-btn">
                More states
            </div>
        </div>
        <div className="partners">
            <Slider {...settingsPartners}>
                {partners.map((item, index) => {
                    return <div key={index} className="logo">
                        <img src={item.logo} alt=""/>
                    </div>
                })}
            </Slider>
        </div>
        <div className="quations-container">
            {question.map((item, index) => {
                return <div key={index} className={`quation ${ActiveQuestion === index ? "active" : ""}`}>
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