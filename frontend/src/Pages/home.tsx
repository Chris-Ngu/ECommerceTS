import HomeNav from "../Component/HomeNav";
import "../Styles/Pages/Home.css";

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
            </div >
        </div >
    )
}

export default homePage;