import "./style.scss"
import Header from "../header/Heade";
import Navbar from "../Navbar/Navbar";
import {useNavigate} from "react-router-dom";
import Footer from "../footer/Footer";


const Carrier = () => {
    const navigate = useNavigate();

    return <div className="carrier-container">
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
                                <p>CARRIER NETWORK IN USA</p>
                            </div>
                            <div className="des-text">
                                Trusted company offering top-quality loads in the USA.
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
        <div className="form-box">
            <div className="title">
                Request a load
            </div>
            <div className="input-box">
                <input placeholder="Company name*" type="text"/>
                <input placeholder="USDOT*" type="text"/>
                <input placeholder="Phone number*" type="text"/>
                <input placeholder="Load number*" type="text"/>

                <label htmlFor="date1">Pick up date</label>
                <input type="datetime-local"/>
                <label htmlFor="date2">Drop off date</label>
                <input type="datetime-local"/>

                <textarea placeholder="Message"></textarea>

                <button className="send-btn">Submit</button>
            </div>
        </div>
        <Footer/>
    </div>
};

export default Carrier