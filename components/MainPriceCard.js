import React from "react";
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";
import Ticker from "./Ticker";
import { format } from "date-fns";
import Chart from "./Chart";

function MainPriceCard({ highlightStock }) {
    if (!highlightStock) return "";
    const today = format(new Date(), "MMM dd, yyyy");

    return (
        <div className="main-price-card gradient">
            <header>
                <div className="title">{highlightStock.name}</div>
                <KeyboardArrowDownRoundedIcon className="arrow-expand" />
            </header>
            <Chart symbol={highlightStock.symbol} />
            <div className="price"> ₹{highlightStock.price} </div>
            <Ticker
                change={highlightStock.change}
                price={highlightStock.price}
            />
            <p>Today ( {today} )</p>
        </div>
    );
}

export default MainPriceCard;
