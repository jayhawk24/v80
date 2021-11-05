import React from "react";
import Ticker from "./Ticker";
import KeyboardArrowRightRoundedIcon from "@mui/icons-material/KeyboardArrowRightRounded";
import { Button } from "@mui/material";

function PriceCard({ stock, setHighlightStock }) {
    const imageSrc = "https://en.bitcoin.it/w/images/en/2/29/BC_Logo_.png";
    // imageSrc={`https://s3-symbol-logo.tradingview.com/${stock.name.toLowerCase()}.svg`}
    const { name, symbol, change, price } = stock;

    return (
        <div className="price-card">
            <div className="details">
                <img src={imageSrc} />
                <div>
                    {name}
                    <div className="symbol">
                        {symbol}
                        {/* {change} */}
                    </div>
                </div>
            </div>
            <div className="price-container">
                <div className="price">
                    {price}
                    <Ticker display="brief" change={change} />
                </div>
                <Button
                    color="inherit"
                    onClick={() => setHighlightStock(stock)}
                >
                    <KeyboardArrowRightRoundedIcon />
                </Button>
            </div>
        </div>
    );
}

export default PriceCard;
