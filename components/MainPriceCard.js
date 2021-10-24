import React from "react";
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";
import Ticker from "./Ticker";
import { format } from "date-fns";

function MainPriceCard() {
    const today = format(new Date(), "MMM dd, yyyy");
    return (
        <div className="main-price-card gradient">
            <header>
                <div className="title">Amara Raja Batteries</div>
                <KeyboardArrowDownRoundedIcon className="arrow-expand" />
            </header>
            <div className="price">$503.54</div>
            <Ticker />
            <p>Today ( {today} )</p>
        </div>
    );
}

export default MainPriceCard;
