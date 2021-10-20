import React from "react";
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";
import Ticker from "./Ticker";
import { format } from "date-fns";

function MainPriceCard() {
    const today = format(new Date(), "MMM dd, YYYY");
    return (
        <div className="main-price-card">
            <header>
                <div className="title">
                    Amara Raja Batteries
                    <KeyboardArrowDownRoundedIcon className="arrow-expand" />
                </div>
            </header>
            <div className="price">$503.54</div>
            <Ticker />
            Today ( {today} )
        </div>
    );
}

export default MainPriceCard;
