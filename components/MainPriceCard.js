import React from "react";
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";
import Ticker from "./Ticker";
import { format } from "date-fns";
import Chart from "./Chart";
import { Button } from "@mui/material";
import { useSelector } from "react-redux";

function MainPriceCard() {
    const selectedStock = useSelector(
        (state) => state.selectedStock.selectedStock
    );
    if (!selectedStock) return null;

    const today = format(new Date(), "MMM dd, yyyy");

    return (
        <div className="main-price-card gradient">
            <header>
                <div className="title">{selectedStock.name}</div>
                <Button color="inherit">
                    <KeyboardArrowDownRoundedIcon className="arrow-expand" />
                </Button>
            </header>
            <Chart symbol={selectedStock.symbol} />
            <div className="price"> ₹{selectedStock.price} </div>
            <Ticker change={selectedStock.change} price={selectedStock.price} />
            <p>Today ( {today} )</p>
        </div>
    );
}

export default MainPriceCard;
