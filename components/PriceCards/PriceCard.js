import React from "react";
import Ticker from "../Ticker";
import KeyboardArrowRightRoundedIcon from "@mui/icons-material/KeyboardArrowRightRounded";
import { Button } from "@mui/material";
import { useDispatch } from "react-redux";
import { setSelectedStock } from "../redux/actions/stockActions";

function PriceCard({ stock }) {
    const imageSrc = "https://en.bitcoin.it/w/images/en/2/29/BC_Logo_.png";
    // imageSrc={`https://s3-symbol-logo.tradingview.com/${stock.name.toLowerCase()}.svg`}
    const { name, symbol, change, price } = stock;

    const dispatch = useDispatch();

    return (
        <div className="price-card">
            <div className="details">
                <img src={imageSrc} />
                <div>
                    {name}
                    <div className="symbol">{symbol}</div>
                </div>
            </div>
            <div className="price-container">
                <div className="price">
                    {price}
                    <Ticker display="brief" change={change} />
                </div>
                <Button
                    color="inherit"
                    onClick={() => dispatch(setSelectedStock(stock))}
                >
                    <KeyboardArrowRightRoundedIcon />
                </Button>
            </div>
        </div>
    );
}

export default PriceCard;
