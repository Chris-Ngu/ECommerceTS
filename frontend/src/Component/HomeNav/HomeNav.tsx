import "./HomeNav.css";
import Logo from "../../Assets/Images/logo.png";

const HomeNav = () => {
    return (
        <nav id="mainScreenNav">
            <a href="/">
                <img id="navLogo" src={Logo} alt="logo" />
            </a>
            <div id="navRight">
                <button className="navButton" id="registerButton">Register</button>
                <button className="navButton" id="signinButton">Sign-in</button>
            </div>
        </nav>
    )
}

export default HomeNav;