import "./style.scss"
import Header from "../header/Heade";
import Navbar from "../Navbar/Navbar";
import {useNavigate} from "react-router-dom";
import Footer from "../footer/Footer";
import React, {useEffect, useState} from "react";
import Aos from "aos";


const GetQuote = () => {
    const navigate = useNavigate();
    const [radioQuote, setRadioQuote] = useState("open");
    const [checkBoxQuote, setCheckBoxQuote] = useState(false);
    const [quote, setQuote] = useState(1)

    useEffect(() => {
        Aos.init({duration: 1000});
    }, []);

    return <div className="get-quote-container">
        <Header/>
        <Navbar/>
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
                                    allowing us
                                    to
                                    send automated sales calls, text messages, and prerecorded voicemails to
                                    the
                                    provided phone number. Your consent is not required for purchasing any
                                    items,
                                    commodities, or services. Message and data rates may apply.
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
        <Footer/>
    </div>
};

export default GetQuote