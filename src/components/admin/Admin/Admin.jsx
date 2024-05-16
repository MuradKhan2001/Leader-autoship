import {useState, useEffect, useContext} from "react";
import {useNavigate, Route, Routes, NavLink} from "react-router-dom";
import "./admin.scss"
import {adminPageRoutes} from "../../../rootes";
import {MyContext} from "../../App/App";


const Admin = () => {
    let value = useContext(MyContext);
    const navigate = useNavigate();
    const [adminMenu, setAdminMenu] = useState(false)

    const menues = [
        {
            name: "Dashboard",
            url: "/",
            img: "../images/admin/dashboard.png"
        },
        {
            name: "Drivers",
            url: "/drivers",
            img: "../images/admin/driver.png"
        },
    ];

    useEffect(() => {
        // axios.get(`${value.url}dashboard/home/`, {
        //     headers: {
        //         "Authorization": `Token ${localStorage.getItem("token")}`
        //     }
        // }).then((response) => {
        //     setStatisticsCount(response.data)
        //     setCountPrice(response.data.balance)
        // }).catch((error) => {
        //     if (error.response.statusText == "Unauthorized") {
        //         window.location.pathname = "/";
        //         localStorage.removeItem("token");
        //     }
        // });
    }, []);

    return <div className="admin-home">

        <div className={`left-box ${adminMenu ? "" : "hide-left"}`}>

            <div className={`logo ${adminMenu ? "" : "hide-logo"}`}>
                <img onClick={() => navigate('/')} src="../images/admin/logo1.png" alt=""/>
            </div>

            <div className="admin-navbar">
                {
                    menues.map((item, index) => {
                        return <NavLink to={item.url} key={index}
                                        className={`nav-item ${({isActive}) => isActive ? "active" : ""}`}>
                            <img src={item.img} alt=""/>
                            {adminMenu ?  <span>{item.name}</span> :""}
                        </NavLink>
                    })
                }
            </div>

            <div onClick={() => setAdminMenu(!adminMenu)} className={`circle ${adminMenu ? "" : "circle-rotate"}`}>
                <img src="../images/admin/previous.png" alt=""/>
            </div>

        </div>

        <div className={`right-box ${adminMenu ? "" :"show-right"}`}>
            <div className="top-box">
                <div ></div>
                <div className="title" >
                    <img src="./images/admin/logo2.png" alt=""/>
                </div>
                <div className="icons">
                    <div onClick={() => {
                        window.location.pathname = "/";
                        localStorage.removeItem("admin")
                    }} className="exit"><img src="./images/admin/logout.png" alt=""/></div>
                </div>
            </div>

            <div className="bottom-box">
                <Routes>
                    {
                        adminPageRoutes.map((route, index) => (
                            <Route key={index} {...route} />
                        ))
                    }
                </Routes>
            </div>
        </div>
    </div>
};

export default Admin