import "../Styles/Component/HomeNav.css";

const HomeNav = () => {
    return (
        <nav id="mainScreenNav">
            <a href="/">
                <img id="navLogo" src="assets/logo.png" alt="logo">
                </img>
            </a>
            <div id="navRight">
                <button className="navButton" id="registerButton">Register</button>
                <button className="navButton" id="signinButton">Sign-in</button>
            </div>
        </nav>
    )
}

export default HomeNav;