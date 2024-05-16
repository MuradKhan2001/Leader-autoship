import {useContext, useState, useRef} from "react";
import "./style.scss";
import {useNavigate} from "react-router-dom";
import {CSSTransition} from "react-transition-group";
import "bootstrap/dist/css/bootstrap.min.css";
import {MyContext} from "../App/App";

const Navbar = () => {
    let value = useContext(MyContext);
    const nodeRef = useRef(null);
    const [nav, setNav] = useState(false);
    const navigate = useNavigate();

    return <div className="navbar-wrapper">
        <CSSTransition
            in={window.innerWidth > 768 ? true : nav}
            nodeRef={nodeRef}
            timeout={100}
            classNames="alert"
            unmountOnExit
        >
            <div className="nav-list">
                <div ref={nodeRef} className="sloy-mobile">
                    <div onClick={() => {
                    }} className="nav-item-hide">
                        <img onClick={() => setNav(false)} src="./images/close.png" alt=""/>
                    </div>

                    <div onClick={() => navigate("/how-it-works")} className="nav-item">How it works?</div>
                    <div onClick={() => navigate("/for-individuals")} className="nav-item">For individuals</div>
                    <div className="nav-item">
                        For businesses
                        <div className="submenu">
                            <div onClick={() => navigate("/auto-dealerships")} className="name">Auto Dealerships</div>
                            <div onClick={() => navigate("/auto-auctions")} className="name">Auto auctions</div>
                            <div onClick={() => navigate("/rental-car-companies")} className="name">Car rental
                                companies
                            </div>
                        </div>
                    </div>

                    <div className="nav-item">
                        Why us
                        <div className="submenu">
                            <div onClick={() => navigate("/reviews")} className="name">Reviews</div>
                            <div onClick={() => navigate("/about-us")} className="name">About us</div>
                            <div onClick={() => navigate("/our-team")} className="name">Our team</div>
                        </div>
                    </div>

                    <div className="nav-item">
                        Contact
                        <div className="submenu-contact">
                            <div onClick={() => navigate("/carrier")} className="name">Carrier</div>
                            <div onClick={() => navigate("/customer")} className="name">Customer</div>
                        </div>
                    </div>
                </div>
            </div>
        </CSSTransition>

        <div className="mobile-left-side">
            <div className="icons-social-media">
                <a href="#">
                    <img src="./images/Instagram.png" alt=""/>
                </a>

                <a href="#">
                    <img src="./images/Facebook.png" alt=""/>
                </a>

                <a href="#">
                    <img src="./images/Vector.png" alt=""/>
                </a>
            </div>

            <div onClick={() => navigate("/get-quote")} className="driver_btn">
                Get a quote
            </div>

            <div className="nav-show">
                <img onClick={() => {
                    setNav(true)
                }} src="./images/menu_hamburger.png" alt=""/>
            </div>
        </div>
    </div>
}
export default Navbar