import "./header-style.scss"
import {useNavigate} from "react-router-dom";

const Header = () => {
    const navigate = useNavigate();

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
                    admin@leaderautoship.com
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
                    (567) 666-4696
                </div>
            </div>
        </div>
    </div>
};

export default Header