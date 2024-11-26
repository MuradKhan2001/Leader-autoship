import "./style.scss"
import Header from "../header/Heade";
import Navbar from "../Navbar/Navbar";
import {useNavigate} from "react-router-dom";
import Footer from "../footer/Footer";
import Slider from "react-slick/lib";
import React, {useContext, useEffect, useState} from "react";
import Aos from "aos";
import axios from "axios";
import {MyContext} from "../App/App";
import {Helmet} from "react-helmet";


const HowItWorks = () => {
    let value = useContext(MyContext);
    const navigate = useNavigate();
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
    const [statistics, setStatistic] = useState();
    const [comments, setComments] = useState([]);
    const [partners, setPartners] = useState([]);
    const [contact, setContact] = useState("");
    const [table, setTable] = useState([]);
    const [ActiveQuestion, setActiveQuestion] = useState("");
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
        axios.get(`${value.url}statistics/`).then((response) => {
            setStatistic(response.data[0])
        });

        axios.get(`${value.url}comment/`).then((response) => {
            setComments(response.data)
        });

        axios.get(`${value.url}partner/`).then((response) => {
            setPartners(response.data)
        });

        axios.get(`${value.url}table/`).then((response) => {
            setTable(response.data)
        });

        axios.get(`${value.url}contact/`).then((response) => {
            setContact(response.data[0])
        });

        Aos.init({duration: 1000});
    }, []);

    return <div className="how-it-works-container">
        <Helmet>
            <title>How it works</title>
            <meta name="description"
                  content="Discover how our seamless auto transport process works! From booking to delivery, we simplify shipping for individuals and businesses across the USA. This quick guide will show you in 3 simple steps. Click on above link to see it. For more info call us at 567(666)-4696"/>
        </Helmet>

        <header>
            <Header/>
            <Navbar/>
        </header>

        <main>
            <div className="header-content">
                <div className="home-sloy">
                    <div className="home_contents">
                        <div className="left_side">
                            <div className="text-wrapper">
                                <strong className="top-text">
                                    Logistics & Leader Auto Ship
                                </strong>
                                <h1 className="text-large">
                                    <p data-aos="zoom-in">How does auto transport work?</p>
                                </h1>
                                <article className="des-text">
                                    This easy guide will show you in 3 simple steps.
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
            </div>

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
            <section className="section-works">
                <div className="sides">
                    <img src="./images/step1-photo.webp" alt="Quote and book your order" loading="lazy"/>
                </div>
                <div className="sides-text">
                    <strong className="main-title">
                        Step 1
                    </strong>
                    <h1 className="title">
                        <p>Quote and book your order</p>
                    </h1>
                    <article className="des">
                        <span
                            onClick={() => navigate("/get-quote")}>Click—or tap—here for an instant online quote</span> in
                        seconds (we’re talking finger-snapping fast!), or
                        call or start a chat with one of our advisors. Then go ahead and compare our prices and services
                        (we
                        know you want to!)—we’re sure you’ll find our prices are very competitive.
                    </article>
                    <button onClick={() => navigate("/get-quote")} type="button" className="work-btn">
                        Get an instant quote
                    </button>
                </div>
            </section>
            <section className="section-works">
                <div className="sides-text">
                    <strong className="main-title">
                        Step 2
                    </strong>
                    <h1 className="title">
                        <p>We pick up your vehicle</p>
                    </h1>
                    <article className="des">
                        Schedule your pickup date, time and an easy-to-access pickup location with your trucker. You can
                        even release your car while you’re at work.
                    </article>
                </div>
                <div className="sides">
                    <img src="./images/step2-photo.webp" alt="We pick up your vehicle" loading="lazy"/>
                </div>
            </section>
            <section className="section-works">
                <div className="sides">
                    <img src="./images/service1.webp" alt="Receive your vehicle" loading="lazy"/>
                </div>
                <div className="sides-text">
                    <strong className="main-title">
                        Step 3
                    </strong>
                    <h1 className="title">
                        <p>Receive your vehicle</p>
                    </h1>
                    <article className="des">
                        Reuniting you and your vehicle is an exciting moment—and one we look forward to atLeader Auto
                        Ship!
                        Your trucker will call you when your vehicle is almost home so you can greet them both right at
                        your
                        own driveway (or a nearby agreed-upon location).
                    </article>
                </div>
            </section>
            <section className="table-box">
                <table>
                    <thead>
                    <tr>
                        <th>Total miles</th>
                        <th>Pic up estimate</th>
                        <th>Transport estimate</th>
                        <th>Total shipping estimate</th>
                    </tr>
                    </thead>
                    <tbody>
                    {table.map((item, index) => {
                        return <tr key={index}>
                            <td>{item.distance} miles</td>
                            <td>{item.pickup_time} days</td>
                            <td>{item.transport_time} days</td>
                            <td>{item.total} days</td>
                        </tr>
                    })}
                    </tbody>
                </table>
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

export default HowItWorks