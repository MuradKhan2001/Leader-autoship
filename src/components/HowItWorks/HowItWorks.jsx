import "./style.scss"
import Header from "../header/Heade";
import Navbar from "../Navbar/Navbar";
import {useNavigate} from "react-router-dom";
import Footer from "../footer/Footer";
import Slider from "react-slick/lib";
import React, {useEffect, useState} from "react";
import ReactPlayer from "react-player";
import Aos from "aos";


const HowItWorks = () => {
    const navigate = useNavigate();
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
                                <p>How does auto transport work?</p>
                            </div>
                            <div className="des-text">
                                This easy guide will show you in 3 simple steps.
                            </div>
                            <div className="buttons-home">
                                <button type="button" className="button-home">
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
        <div data-aos="zoom-in" className="about-us">
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
        <div  className="section-works">
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
                    <p>Recieve your vehicle</p>
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
                <tr>
                    <td>500 - 1000 miles</td>
                    <td>5 days</td>
                    <td>2 days</td>
                    <td>8 days</td>
                </tr>
                <tr>
                    <td>500 - 1000 miles</td>
                    <td>5 days</td>
                    <td>2 days</td>
                    <td>8 days</td>
                </tr>
                <tr>
                    <td>500 - 1000 miles</td>
                    <td>5 days</td>
                    <td>2 days</td>
                    <td>8 days</td>
                </tr>
                </tbody>
            </table>
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

export default HowItWorks