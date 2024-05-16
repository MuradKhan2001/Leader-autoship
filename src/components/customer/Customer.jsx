import "./style.scss"
import Header from "../header/Heade";
import Navbar from "../Navbar/Navbar";
import {useNavigate} from "react-router-dom";
import Footer from "../footer/Footer";


const Customer = () => {
    const navigate = useNavigate();

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
                                <p>CONTACT LEADER AUTO SHIP</p>
                            </div>
                            <div className="des-text">
                                We're eager to receive your feedback.
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
        <div className="form-box">
            <div className="title">
                QUICK FEEDBACK FORM
            </div>
            <div className="input-box">
                <input placeholder="Your full name*" type="text"/>
                <input placeholder="Email*" type="text"/>
                <input placeholder="Phone number*" type="text"/>
                <textarea placeholder="Message"></textarea>
                <button className="send-btn">Submit</button>
            </div>
        </div>
        <Footer/>
    </div>
};

export default Customer