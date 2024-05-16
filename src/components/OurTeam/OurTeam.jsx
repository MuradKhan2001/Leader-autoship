import "./style.scss"
import Header from "../header/Heade";
import Navbar from "../Navbar/Navbar";
import {useNavigate} from "react-router-dom";
import Footer from "../footer/Footer";
import Slider from "react-slick/lib";
import {useState} from "react";
import ScrollTrigger from "react-scroll-trigger";
import CountUp from "react-countup";


const OurTeam = () => {
    const [counterOn, setCounterOn] = useState(false)
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

    return <div className="our-team-container">
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
                                <p>OUR TEAM</p>
                            </div>
                            <div className="buttons-home">
                                <button onClick={()=> navigate("/get-quote")} type="button" className="button-home">
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

        <div className="main-box">
            <div className="titles">
                <div className="title-min">
                    Our team
                </div>
                <div className="main-title">
                    MEET OUR TEAM
                </div>
            </div>
            <div className="team-box">
                <div className="person">
                    <div className="photo">
                        <img src="./images/person2.png" alt=""/>
                    </div>
                    <div className="bottom-text">
                        <div className="name">Julian Jameson</div>
                        <div className="position">Profession</div>
                        <div className="contact">
                            <div className="icon">
                                <img src="./images/mail.png" alt=""/>
                            </div>
                            contact@logistics.com
                        </div>
                        <div className="contact">
                            <div className="icon">
                                <img src="./images/telephone.png" alt=""/>
                            </div>
                            (00) 112 365 489
                        </div>
                    </div>
                </div>
                <div className="person">
                    <div className="photo">
                        <img src="./images/person2.png" alt=""/>
                    </div>
                    <div className="bottom-text">
                        <div className="name">Julian Jameson</div>
                        <div className="position">Profession</div>
                        <div className="contact">
                            <div className="icon">
                                <img src="./images/mail.png" alt=""/>
                            </div>
                            contact@logistics.com
                        </div>
                        <div className="contact">
                            <div className="icon">
                                <img src="./images/telephone.png" alt=""/>
                            </div>
                            (00) 112 365 489
                        </div>
                    </div>
                </div>
                <div className="person">
                    <div className="photo">
                        <img src="./images/person2.png" alt=""/>
                    </div>
                    <div className="bottom-text">
                        <div className="name">Julian Jameson</div>
                        <div className="position">Profession</div>
                        <div className="contact">
                            <div className="icon">
                                <img src="./images/mail.png" alt=""/>
                            </div>
                            contact@logistics.com
                        </div>
                        <div className="contact">
                            <div className="icon">
                                <img src="./images/telephone.png" alt=""/>
                            </div>
                            (00) 112 365 489
                        </div>
                    </div>
                </div>
                <div className="person">
                    <div className="photo">
                        <img src="./images/person2.png" alt=""/>
                    </div>
                    <div className="bottom-text">
                        <div className="name">Julian Jameson</div>
                        <div className="position">Profession</div>
                        <div className="contact">
                            <div className="icon">
                                <img src="./images/mail.png" alt=""/>
                            </div>
                            contact@logistics.com
                        </div>
                        <div className="contact">
                            <div className="icon">
                                <img src="./images/telephone.png" alt=""/>
                            </div>
                            (00) 112 365 489
                        </div>
                    </div>
                </div>
                <div className="person">
                    <div className="photo">
                        <img src="./images/person2.png" alt=""/>
                    </div>
                    <div className="bottom-text">
                        <div className="name">Julian Jameson</div>
                        <div className="position">Profession</div>
                        <div className="contact">
                            <div className="icon">
                                <img src="./images/mail.png" alt=""/>
                            </div>
                            contact@logistics.com
                        </div>
                        <div className="contact">
                            <div className="icon">
                                <img src="./images/telephone.png" alt=""/>
                            </div>
                            (00) 112 365 489
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="admins-box">
            <div className="main-title">
                TEAM MEMBERS
            </div>
            <div className="team-box">
                <div className="person">
                    <div className="photo">
                        <img src="./images/person2.png" alt=""/>
                    </div>
                    <div className="bottom-text">
                        <div className="name">Julian Jameson</div>
                        <div className="position">Profession</div>
                        <div className="contact">
                            <div className="icon">
                                <img src="./images/mail.png" alt=""/>
                            </div>
                            contact@logistics.com
                        </div>
                        <div className="contact">
                            <div className="icon">
                                <img src="./images/telephone.png" alt=""/>
                            </div>
                            (00) 112 365 489
                        </div>
                    </div>
                </div>
                <div className="person">
                    <div className="photo">
                        <img src="./images/person2.png" alt=""/>
                    </div>
                    <div className="bottom-text">
                        <div className="name">Julian Jameson</div>
                        <div className="position">Profession</div>
                        <div className="contact">
                            <div className="icon">
                                <img src="./images/mail.png" alt=""/>
                            </div>
                            contact@logistics.com
                        </div>
                        <div className="contact">
                            <div className="icon">
                                <img src="./images/telephone.png" alt=""/>
                            </div>
                            (00) 112 365 489
                        </div>
                    </div>
                </div>
                <div className="person">
                    <div className="photo">
                        <img src="./images/person2.png" alt=""/>
                    </div>
                    <div className="bottom-text">
                        <div className="name">Julian Jameson</div>
                        <div className="position">Profession</div>
                        <div className="contact">
                            <div className="icon">
                                <img src="./images/mail.png" alt=""/>
                            </div>
                            contact@logistics.com
                        </div>
                        <div className="contact">
                            <div className="icon">
                                <img src="./images/telephone.png" alt=""/>
                            </div>
                            (00) 112 365 489
                        </div>
                    </div>
                </div>
                <div className="person">
                    <div className="photo">
                        <img src="./images/person2.png" alt=""/>
                    </div>
                    <div className="bottom-text">
                        <div className="name">Julian Jameson</div>
                        <div className="position">Profession</div>
                        <div className="contact">
                            <div className="icon">
                                <img src="./images/mail.png" alt=""/>
                            </div>
                            contact@logistics.com
                        </div>
                        <div className="contact">
                            <div className="icon">
                                <img src="./images/telephone.png" alt=""/>
                            </div>
                            (00) 112 365 489
                        </div>
                    </div>
                </div>
                <div className="person">
                    <div className="photo">
                        <img src="./images/person2.png" alt=""/>
                    </div>
                    <div className="bottom-text">
                        <div className="name">Julian Jameson</div>
                        <div className="position">Profession</div>
                        <div className="contact">
                            <div className="icon">
                                <img src="./images/mail.png" alt=""/>
                            </div>
                            contact@logistics.com
                        </div>
                        <div className="contact">
                            <div className="icon">
                                <img src="./images/telephone.png" alt=""/>
                            </div>
                            (00) 112 365 489
                        </div>
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

export default OurTeam