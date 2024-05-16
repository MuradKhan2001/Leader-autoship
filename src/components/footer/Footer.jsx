import "./style.scss";
import {useTranslation} from "react-i18next";
import {useNavigate} from "react-router-dom";

const Footer = () => {
    const navigate = useNavigate();

    return <>
        <div className="footer-container">

            <div className="section-logo">
                <div className="logo">
                    <img src="./images/logo.png" alt=""/>
                </div>


                <div className="item">
                    <div className="icon">
                        <img src="./images/pin.png" alt=""/>
                    </div>
                    <div className="text">
                        979 oak forest Dr morrow Ohio 45152
                    </div>
                </div>

                <div className="item">
                    <div className="icon">
                        <img src="./images/telephone.png" alt=""/>
                    </div>
                    <div className="text">
                        (404) 850 - 7080
                    </div>
                </div>


                <div className="item">
                    <div className="icon">
                        <img src="./images/mail.png" alt=""/>
                    </div>
                    <div className="text">
                        leaderaoutoship@gmail.com
                    </div>
                </div>



                <div className="social-media">
                    <a href=""> <img src="./images/Instagram.png" alt=""/></a>
                    <a href=""> <img src="./images/Facebook.png" alt=""/></a>
                    <a href="#"><img src="./images/Vector.png" alt=""/></a>
                </div>
            </div>


            <div className="section-menu">
                <div className="title-footer">
                    Menu
                </div>
                <div onClick={() => navigate("/how-it-works")} className="item-footer">How it works?</div>
                <div onClick={() => navigate("/for-individuals")} className="item-footer">For individuals</div>
                <div className="item-footer">
                    For businesses
                </div>
                <div className="item-footer">
                    Why us
                </div>
                <div className="item-footer">
                    Contact
                </div>
            </div>

            <div className="section-menu">
                <div className="title-footer">
                    Useful links
                </div>

                <div onClick={()=> navigate("/about-us")} className="item-footer">
                   About us
                </div>
                <div onClick={()=> navigate("/our-team")} className="item-footer">
                    Our team
                </div>
                <div onClick={()=> navigate("/reviews")} className="item-footer">
                    Reviews
                </div>
                <div onClick={()=> navigate("/auto-dealerships")} className="item-footer">
                    Auto dealerships
                </div>
                <div onClick={()=> navigate("/auto-auctions")} className="item-footer">
                    Auto auctions
                </div>
                <div onClick={()=> navigate("/rental-car-companies")} className="item-footer">
                    Rental car companies
                </div>

            </div>

            <div className="section-menu">
                <div className="send-content">
                    <div className="btns">
                        <div className="btn">
                            Carrier
                        </div>
                        <div className="btn">
                            Customer
                        </div>
                    </div>
                    <div className="code">
                        <div className="icons">
                            <img src="./images/footer-img.png" alt=""/>
                        </div>
                        <div className="text">
                            <div> USDOT: 4232283</div>
                            <div> MC: 1638331</div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </>
};

export default Footer;