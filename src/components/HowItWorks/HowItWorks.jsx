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
                                <p data-aos="zoom-in">How does auto transport work?</p>
                            </div>
                            <div className="des-text">
                                This easy guide will show you in 3 simple steps.
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
                    </div>
                </div>
            </div>
        </div>
        <div data-aos="zoom-in" className="about-us">
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
        <div className="section-works">
            <div className="sides">
                <img src="./images/step1-photo.jpg" alt=""/>
            </div>
            <div className="sides-text">
                <div className="main-title">
                    Step 1
                </div>
                <div className="title">
                    <p>Quote and book your order</p>
                </div>
                <div className="des">
                    <span onClick={() => navigate("/get-quote")}>Click—or tap—here for an instant online quote</span> in
                    seconds (we’re talking finger-snapping fast!), or
                    call or start a chat with one of our advisors. Then go ahead and compare our prices and services (we
                    know you want to!)—we’re sure you’ll find our prices are very competitive.
                </div>
                <button onClick={() => navigate("/get-quote")} type="button" className="work-btn">
                    Get an instant quote
                </button>
            </div>
        </div>
        <div className="section-works">
            <div className="sides-text">
                <div className="main-title">
                    Step 2
                </div>
                <div className="title">
                    <p>We pick up your vehicle</p>
                </div>
                <div className="des">
                    Schedule your pickup date, time and an easy-to-access pickup location with your trucker. You can
                    even release your car while you’re at work.
                </div>
            </div>
            <div className="sides">
                <img src="./images/step2-photo.jpg" alt=""/>
            </div>
        </div>
        <div className="section-works">
            <div className="sides">
                <img src="./images/service1.jpg" alt=""/>
            </div>
            <div className="sides-text">
                <div className="main-title">
                    Step 3
                </div>
                <div className="title">
                    <p>Receive your vehicle</p>
                </div>
                <div className="des">
                    Reuniting you and your vehicle is an exciting moment—and one we look forward to atLeader Auto Ship!
                    Your trucker will call you when your vehicle is almost home so you can greet them both right at your
                    own driveway (or a nearby agreed-upon location).
                </div>
            </div>
        </div>
        <div className="table-box">
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
        <div className="partners">
            <Slider {...settingsPartners}>
                {partners.map((item, index)=>{
                    return <div key={index} className="logo">
                        <img src={item.logo} alt=""/>
                    </div>
                })}
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
        <Footer/>
    </div>
};

export default HowItWorks