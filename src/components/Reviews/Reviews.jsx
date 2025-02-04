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
import {Helmet} from "react-helmet";


const Reviews = () => {
    let value = useContext(MyContext);
    const navigate = useNavigate();
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

    return <div className="reviews-container">
        <Helmet>
            <title>Reviews</title>
            <meta name="description"
                  content="Read honest customer reviews about our vehicle shipping services.See why individuals and businesses trust us for safe and reliable auto transport."/>
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
                                    <p data-aos="zoom-in">LEADER AUTO SHIP REVIEWS</p>
                                </h1>
                                <article className="des-text">
                                    Ensuring our customers' full satisfaction is our priority, and receiving positive
                                    feedback on our car transport services brings us immense joy.
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
            </section>

            <section className="reviews-container">
                <strong className="main-title">
                    Explore Our Reviews!
                </strong>
                <h1 className="title">
                    See What Our Customers are Saying
                </h1>
                <div className="slider-box-reviews">
                    {comments.map((item, index) => {
                        return <div key={index} className={(index + 1) % 2 === 0 ? "review-large" : "review"}>
                            <div className="content">
                                <div className="header">
                                    <div className="left">
                                        <div className="name">
                                            <strong className="name-user">{item.name}</strong>
                                        </div>
                                    </div>
                                    <div className="google">
                                        <img src={item.image} alt="logo-reviews" loading="lazy"/>
                                    </div>
                                </div>
                                <div className="des">
                                    {item.comment}
                                </div>
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

export default Reviews