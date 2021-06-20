import HomeNav from "../../Component/HomeNav/HomeNav";
import "./Home.css";

const homePage = () => {
    return (
        <div id="mainScreenBody">
            <div id="mainScreenInnerBody">
                <HomeNav />
                <div id="mainScreenSloganContainer">
                    <div>
                        <h2 className="title">Keyboard Collection</h2>
                        <h2 className="title">Trading Assessor</h2>
                    </div>
                    <button id="sloganButton">Proceed</button>
                </div>
                <div className="home-info">
                    <div className="home-panel">
                        <h3 className="panel-header">Panel 1</h3>
                        <p>Image here</p>
                        <p>Description here</p>
                        <p>button here</p>
                    </div>
                    <div className="home-panel">
                        <h3 className="panel-header">Panel 2</h3>
                        <p>Image here</p>
                        <p>Description here</p>
                        <p>button here</p>
                    </div>
                    <div className="home-panel">
                        <h3 className="panel-header">Panel 3</h3>
                        <p>Image here</p>
                        <p>Description here</p>
                        <p>button here</p>
                    </div>
                </div>
                <footer>
                    <p>Insert information, disclaimers, and media links here</p>
                </footer>
            </div >
        </div >
    )
}

export default homePage;