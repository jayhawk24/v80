import React from "react";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import MainPriceCard from "./MainPriceCard";
import PriceCardsContainer from "./PriceCardsContainer";

function App() {
    return (
        <div className="content">
            <div className="header">
                <div className="title">
                    Hello World
                    <div className="greet">Have a great day !</div>
                </div>

                <div className="icons">
                    <AccountCircleIcon />
                    <NotificationsNoneIcon />
                </div>
            </div>
            <MainPriceCard />
            <PriceCardsContainer />
        </div>
    );
}

export default App;
