import "./header-style.scss"
import {useNavigate} from "react-router-dom";
import {useContext, useEffect, useState} from "react";
import axios from "axios";
import Aos from "aos";
import {MyContext} from "../App/App";

const Header = () => {
    let value = useContext(MyContext);
    const [contact, setContact] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`${value.url}contact/`).then((response) => {
            setContact(response.data[0])
        });

        Aos.init({duration: 1000});
    }, []);

    return <div className="header-container">
        <div onClick={() => navigate("/")} className="logo">
            <img src="./images/logo.webp" alt="leader-auto-ship-logo"/>
        </div>
        <div className="information-wrapper">
            <div className="info-box">
                <div className="icon-info">
                    <img src="./images/clock.webp" alt="working-time" loading="lazy"/>
                </div>
                <div className="text-information">
                    <div className="title">
                        <div>Monday - Friday: Open 24 hours</div>
                        <div>Weekends: 8:00am - 9:00pm EST</div>
                    </div>
                </div>
            </div>
            <div className="info-box">
                <div className="icon-info">
                    <img src="./images/mail.webp" alt="gamil-company" loading="lazy"/>
                </div>
                <div className="text-information">
                    <div className="title">Email</div>
                    {contact.email}
                </div>
            </div>
            <div className="info-box">
                <div className="icon-info">
                    <img src="./images/telephone.webp" alt="phone" loading="lazy"/>
                </div>
                <div className="text-information">
                    <div className="title">
                        Call Us
                    </div>
                    (567) 666-4696
                </div>
            </div>
        </div>
    </div>
};

export default Header