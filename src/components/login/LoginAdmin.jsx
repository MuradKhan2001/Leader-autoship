import "./style.scss";

const LoginAdmin = () => {


    return <div className="login-container">

        <div className="login-card">
            <div className="logo">
                <img src="./images/logo1.png" alt=""/>
            </div>
            <div className="input_box">
                <input placeholder="+998" type="text"/>
                <input placeholder="Parol" type="password"/>
            </div>

            <div onClick={() => {
                localStorage.setItem("admin", "admin")
                window.location.reload()
                window.location.pathname = "/"
            }} className="btn-login">
                Kirish
            </div>
        </div>
    </div>
};

export default LoginAdmin;