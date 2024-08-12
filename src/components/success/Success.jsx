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
                Thank you
            </div>
            <div className="des">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque debitis deserunt doloremque ea et
                impedit ipsum iure libero minima obcaecati, omnis possimus quae reiciendis similique tenetur vitae
                voluptates. Alias, aliquam asperiores at atque dolor eius eligendi est eveniet ex expedita explicabo
                harum illum impedit modi molestias nesciunt nostrum numquam omnis optio perferendis placeat quae quaerat
                quam quas qui quibusdam recusandae reiciendis, sapiente similique sint totam, unde ut vel veniam vero
                vitae voluptatem? Atque commodi consequuntur id in molestiae quia quis! Ad aliquam asperiores beatae
                distinctio eaque eum ipsam ipsum maiores maxime modi odio omnis quibusdam, repudiandae rerum sit sunt
                temporibus.
            </div>
        </div>
        <Footer/>
    </div>
};

export default Success