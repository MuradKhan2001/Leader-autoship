import "./style.scss"
import Header from "../header/Heade";
import Navbar from "../Navbar/Navbar";
import {useNavigate} from "react-router-dom";
import Footer from "../footer/Footer";
import Slider from "react-slick/lib";
import React, {useContext, useEffect, useState} from "react";
import {MyContext} from "../App/App";
import axios from "axios";
import Aos from "aos";



const States = () => {
    const navigate = useNavigate();
    let value = useContext(MyContext);
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

    return <div className="states-container">
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
                                <p>More states</p>

                            </div>
                            <div className="des-text">
                                Car transport anywhere in the U.S.
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
                <div className="content">
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

                <div className="content">
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

                <div className="content">
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

                <div className="content">
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
        </div>

        <div className="states">
            <div className="title">More states</div>
            <div className="des">Duis semper lacus scelerisque, aliquam leo quis, porttitor leo. Etiam lobortis dapibus
                libero vel porttitor. Nulla tempor elit nec feugiat tempus.Phasellus at quam id elit hendrerit semper
                feugiat id nunc.
            </div>
            <div className="state-box">
                <div className="state">New york</div>
                <div className="state">California</div>
                <div className="state">Ohio</div>
                <div className="state">Montana</div>
                <div className="state">Texas</div>
                <div className="state">New york</div>
                <div className="state">California</div>
                <div className="state">Ohio</div>
                <div className="state">Montana</div>
                <div className="state">Texas</div>
                <div className="state">New york</div>
                <div className="state">California</div>
                <div className="state">Ohio</div>
                <div className="state">Montana</div>
                <div className="state">Texas</div>
                <div className="state">New york</div>
                <div className="state">California</div>
                <div className="state">Ohio</div>
                <div className="state">Montana</div>
                <div className="state">Texas</div>
                <div className="state">New york</div>
                <div className="state">California</div>
                <div className="state">Ohio</div>
                <div className="state">Montana</div>
                <div className="state">Texas</div>
                <div className="state">New york</div>
                <div className="state">California</div>
                <div className="state">Ohio</div>
                <div className="state">Montana</div>
                <div className="state">Texas</div>
            </div>
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

export default States