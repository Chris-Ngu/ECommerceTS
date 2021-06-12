import "../Styles/Component/HomeNav.css";

const HomeNav = () => {
    return (
        <nav id="mainScreenNav">
            <a href="/">
                <img id="navLogo" src={require("../Assets/Images/logo.png")} alt="logo" />
            </a>
            <div id="navRight">
                <button className="navButton" id="registerButton">Register</button>
                <button className="navButton" id="signinButton">Sign-in</button>
            </div>
        </nav>
    )
}

export default HomeNav;