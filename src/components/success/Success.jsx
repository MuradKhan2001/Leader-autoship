import "./style.scss"
import Header from "../header/Heade";
import Navbar from "../Navbar/Navbar";
import Footer from "../footer/Footer";
import React from "react";

const Success = () => {

    return <div className="our-team-container">
        <Header/>
        <Navbar/>
        <div className="success-page">
            <div className="image">
                <img src="./images/success.png" alt=""/>
            </div>
            <div className="title">
                THANK YOU!
            </div>
            <div className="des">
                <h5>We have received your request. Our car shipping specialist will email your quote and contact you
                    shortly.</h5>
                <br/>
                <h4>WHAT TO EXPECT NEXT?</h4>
                <p>- You will get a call or text messages from one of our specialists asking exact pickup - drop off
                    addresses, contact info of the person who will give and receive the vehicle.</p>

                <p>- The agent contacts you 1-2 days before pickup date to update you with an available driver in the
                    area.</p>

                <p>- Once everything is scheduled the agent forwards you the driver’s contact info so that you can get
                    an direct update during transfer.</p>


                <p>If you still have a question feel free to contact us at: <br/>
                    <a href={`tel: +5676664696`} className="name">(567) 666-4696</a> &nbsp;
                    or
                    &nbsp;
                    <a href="mailto:support@leaderautoship.com">support@leaderautoship.com</a></p>
            </div>
        </div>
        <Footer/>
    </div>
};

export default Success