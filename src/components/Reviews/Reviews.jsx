import "./style.scss"
import Header from "../header/Heade";
import Navbar from "../Navbar/Navbar";
import {useNavigate} from "react-router-dom";
import Footer from "../footer/Footer";
import Slider from "react-slick/lib";
import React, {useState} from "react";


const Reviews = () => {
    const navigate = useNavigate();
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

    const [reviews, setReviews] = useState([
        {
            name: "Gread Experence", logo: "./images/devicon_google.png", des: ` Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam architecto assumenda
                            commodi consequuntur debitis eaque eveniet ipsam laborum nam nesciunt pariatur quas, sit
                            velit! Aliquam blanditiis nesciunt nisi praesentium quaerat quas quod repellat tenetur.
                            Dolores dolorum fugit ipsa molestiae perferendis porro quia rerum tempora tempore vero.
                            Facere facilis quis rerum?`
        },
        {
            name: "Gread Experence", logo: "./images/devicon_google.png", des: ` Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam architecto assumenda
                            commodi consequuntur debitis eaque eveniet ipsam laborum nam nesciunt pariatur quas, sit
                            velit! Aliquam blanditiis nesciunt nisi praesentium quaerat quas quod repellat tenetur.
                            Dolores dolorum fugit ipsa molestiae perferendis porro quia rerum tempora tempore vero.
                            Facere facilis quis rerum?`
        },
        {
            name: "Gread Experence", logo: "./images/devicon_google.png", des: ` Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam architecto assumenda
                            commodi consequuntur debitis eaque eveniet ipsam laborum nam nesciunt pariatur quas, sit
                            velit! Aliquam blanditiis nesciunt nisi praesentium quaerat quas quod repellat tenetur.
                            Dolores dolorum fugit ipsa molestiae perferendis porro quia rerum tempora tempore vero.
                            Facere facilis quis rerum?`
        }
        , {
            name: "Gread Experence", logo: "./images/devicon_google.png", des: ` Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam architecto assumenda
                            commodi consequuntur debitis eaque eveniet ipsam laborum nam nesciunt pariatur quas, sit
                            velit! Aliquam blanditiis nesciunt nisi praesentium quaerat quas quod repellat tenetur.
                            Dolores dolorum fugit ipsa molestiae perferendis porro quia rerum tempora tempore vero.
                            Facere facilis quis rerum?`
        }
        , {
            name: "Gread Experence", logo: "./images/devicon_google.png", des: ` Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam architecto assumenda
                            commodi consequuntur debitis eaque eveniet ipsam laborum nam nesciunt pariatur quas, sit
                            velit! Aliquam blanditiis nesciunt nisi praesentium quaerat quas quod repellat tenetur.
                            Dolores dolorum fugit ipsa molestiae perferendis porro quia rerum tempora tempore vero.
                            Facere facilis quis rerum?`
        }
        , {
            name: "Gread Experence", logo: "./images/devicon_google.png", des: ` Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam architecto assumenda
                            commodi consequuntur debitis eaque eveniet ipsam laborum nam nesciunt pariatur quas, sit
                            velit! Aliquam blanditiis nesciunt nisi praesentium quaerat quas quod repellat tenetur.
                            Dolores dolorum fugit ipsa molestiae perferendis porro quia rerum tempora tempore vero.
                            Facere facilis quis rerum?`
        }
    ]);

    return <div className="reviews-container">
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
                                <p>LEADER AUTO SHIP REVIEWS</p>
                            </div>
                            <div className="des-text">
                                Ensuring our customers' full satisfaction is our priority, and receiving positive
                                feedback on our car transport services brings us immense joy.
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
                {reviews.map((item, index) => {
                    return <div key={index} className={(index + 1) % 2 === 0 ? "review-large" : "review"}>
                        <div className="content">
                            <div className="header">
                                <div className="left">
                                    <div className="name">
                                        <div className="name-user">{item.name}</div>
                                    </div>
                                </div>
                                <div className="google">
                                    <img src={item.logo} alt=""/>
                                </div>
                            </div>
                            <div className="des">
                                {item.des}
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

export default Reviews