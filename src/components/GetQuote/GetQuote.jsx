import "./style.scss"
import Header from "../header/Heade";
import Navbar from "../Navbar/Navbar";
import {useNavigate} from "react-router-dom";
import Footer from "../footer/Footer";
import {useEffect, useState} from "react";
import Aos from "aos";


const GetQuote = () => {
    const navigate = useNavigate();
    const [radioQuote, setRadioQuote] = useState("open");
    const [checkBoxQuote, setCheckBoxQuote] = useState(false);

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
                <div className="icon-quote active">
                    <img src="./images/mdi_location.png" alt=""/>
                </div>
                <div className="line-quote"></div>
                <div className="icon-quote">
                    <img src="./images/truck.png" alt=""/>
                </div>
                <div className="line-quote"></div>
                <div className="icon-quote">
                    <img src="./images/person.png" alt=""/>
                </div>
                <div className="line-quote"></div>
                <div className="icon-quote">
                    <img src="./images/check_circle.png" alt=""/>
                </div>
            </div>

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
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur eius iste
                            repellendus similique, ullam vero.
                        </label>
                    </div>
                </div>
            </div>

            <button className="quote-btn">
                Next
            </button>

        </div>
        <Footer/>
    </div>
};

export default GetQuote