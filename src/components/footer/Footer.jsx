import "./style.scss";
import {useNavigate} from "react-router-dom";
import React, {useContext, useEffect, useState} from "react";
import axios from "axios";
import {MyContext} from "../App/App";

const Footer = () => {
    const [contact, setContact] = useState("");
    let value = useContext(MyContext);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`${value.url}contact/`).then((response) => {
            setContact(response.data[0])
        });

    }, []);

    return <>
        <div className="footer-container">
            <div className="footer-body">
                <div className="section-logo">
                    <div className="logo">
                        <img src="./images/logo.webp" alt="leader-auto-ship-logo" loading="lazy"/>
                    </div>
                    <div className="item">
                        <div className="icon">
                            <img src="./images/pin.webp" alt="location-company" loading="lazy"/>
                        </div>
                        <strong className="text">
                            {contact.address}
                        </strong>
                    </div>
                    <div className="item">
                        <div className="icon">
                            <img src="./images/telephone.webp" alt="phone-company" loading="lazy"/>
                        </div>
                        <strong className="text">
                            <a href={`tel:${contact.phone1}`} className="name">(567) 666-4696</a>
                        </strong>
                    </div>
                    <div className="item">
                        <div className="icon">
                            <img src="./images/mail.webp" alt="gmail-company" loading="lazy"/>
                        </div>
                        <strong className="text">
                            <a href={`mailto:${contact.email}`} className="name">{contact.email}</a>
                        </strong>
                    </div>
                    <div className="social-media">
                        <a target="_blank" href={contact.instagramm}>
                            <img src="./images/Instagram.webp" alt="instagram" loading="lazy"/>
                        </a>

                        <a target="_blank" href={contact.facebook}>
                            <img src="./images/Facebook.webp" alt="facebook" loading="lazy"/>
                        </a>

                        <a target="_blank" href={contact.twitter}>
                            <img src="./images/Vector.webp" alt="twitter" loading="lazy"/>
                        </a>
                    </div>
                </div>

                <div className="section-menu">
                    <h3 className="title-footer">
                        Menu
                    </h3>
                    <div onClick={() => {
                        setTimeout(() => {
                            window.scrollTo(0, 0)
                        }, 200)
                        navigate("/how-it-works")
                    }} className="item-footer">How it works?
                    </div>
                    <div onClick={() => {
                        setTimeout(() => {
                            window.scrollTo(0, 0)
                        }, 200)
                        navigate("/for-individuals")
                    }} className="item-footer">For individuals
                    </div>
                    <div onClick={() => {
                        setTimeout(() => {
                            window.scrollTo(0, 0)}, 200)
                        navigate("/auto-dealerships")}} className="item-footer">
                        For businesses
                    </div>
                    <div onClick={() => {
                        navigate("/about-us")
                        setTimeout(() => {
                            window.scrollTo(0, 0)
                        }, 200)}} className="item-footer">
                        Why us
                    </div>
                    <div onClick={() => {
                        navigate("/carrier")

                        setTimeout(() => {
                            window.scrollTo(0, 0)
                        }, 200)

                    }} className="item-footer">
                        Contact
                    </div>
                </div>

                <div className="section-menu">
                    <div className="title-footer">
                        Useful links
                    </div>

                    <div onClick={() => {
                        navigate("/about-us")
                        setTimeout(() => {
                            window.scrollTo(0, 0)
                        }, 200)}} className="item-footer">
                        About us
                    </div>
                    <div onClick={() => {
                        setTimeout(() => {
                            window.scrollTo(0, 0)
                        }, 200)
                        navigate("/our-team")
                    }} className="item-footer">
                        Our team
                    </div>
                    <div onClick={() => {
                        setTimeout(() => {
                            window.scrollTo(0, 0)
                        }, 200)
                        navigate("/reviews")
                    }} className="item-footer">
                        Reviews
                    </div>
                    <div onClick={() => {
                        setTimeout(() => {
                            window.scrollTo(0, 0)}, 200)
                        navigate("/auto-dealerships")}} className="item-footer">
                        Auto dealerships
                    </div>
                    <div onClick={() => {
                        setTimeout(() => {
                            window.scrollTo(0, 0)
                        }, 200)
                        navigate("/auto-auctions")
                    }} className="item-footer">
                        Auto auctions
                    </div>
                    <div onClick={() => {
                        setTimeout(() => {
                            window.scrollTo(0, 0)
                        }, 200)
                        navigate("/rental-car-companies")
                    }} className="item-footer">
                        Rental car companies
                    </div>

                </div>

                <div className="section-menu">
                    <div className="send-content">
                        <div className="btns">
                            <div onClick={() => navigate("/carrier")} className="btn">
                                Carrier
                            </div>
                            <div onClick={() => navigate("/customer")} className="btn">
                                Customer
                            </div>
                        </div>
                        <div className="code">
                            <div className="icons">
                                <img src="./images/partner.png" alt="partner" loading="lazy"/>
                            </div>
                            <div className="text">
                                <div> USDOT: 4232283</div>
                                <div> MC: 1638331</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                <div className="sides">
                    <div onClick={() => {
                        setTimeout(() => {
                            window.scrollTo(0, 0)
                        }, 200)
                        navigate("/")
                    }} className="text">
                        © 2024 LEADER AUTO SHIP llc
                    </div>

                    <div className="line"></div>
                    <div onClick={() => {
                        setTimeout(() => {
                            window.scrollTo(0, 0)
                        }, 200)
                        navigate("/get-quote")
                    }} className="text">
                        ALL RIGHTS RESERVED
                    </div>
                </div>
                <div className="sides">
                    <div onClick={() => {
                        navigate("/privacy-policy")
                        setTimeout(() => {
                            window.scrollTo(0, 0)
                        }, 200)
                    }} className="text">
                        PRIVACY POLICY
                    </div>
                    <div className="line"></div>
                    <div onClick={() => {
                        setTimeout(() => {
                            window.scrollTo(0, 0)
                        }, 200)
                        navigate("/terms-and-conditions")
                    }} className="text">
                        TERMS AND CONDITIONS
                    </div>
                </div>
            </div>
        </div>
    </>
};

export default Footer;