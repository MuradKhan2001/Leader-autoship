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
            <img src="./images/logo.png" alt=""/>
        </div>
        <div className="information-wrapper">
            <div className="info-box">
                <div className="icon-info">
                    <img src="./images/clock.png" alt=""/>
                </div>
                <div className="text-information">
                    <div className="title">
                        <div> Mon to Fri: 09:00AM to 09:00PM</div>
                        <div> Sat & Sun: 10:00am to 8:00pm</div>
                    </div>
                </div>
            </div>
            <div className="info-box">
                <div className="icon-info">
                    <img src="./images/mail.png" alt=""/>
                </div>
                <div className="text-information">
                    <div className="title">Email</div>
                    {contact.email}
                </div>
            </div>
            <div className="info-box">
                <div className="icon-info">
                    <img src="./images/telephone.png" alt=""/>
                </div>
                <div className="text-information">
                    <div className="title">
                        Call Us
                    </div>
                    {contact.phone1}
                </div>
            </div>
        </div>
    </div>
};

export default Header