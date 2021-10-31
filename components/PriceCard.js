import React from "react";
import Ticker from "./Ticker";
import KeyboardArrowRightRoundedIcon from "@mui/icons-material/KeyboardArrowRightRounded";

function PriceCard({ imageSrc, title, symbol, alpha, price }) {
    return (
        <div className="price-card">
            <div className="details">
                <img src={imageSrc} />
                <div>
                    {title}
                    <div className="symbol">
                        {symbol}
                        {/* {alpha} */}
                    </div>
                </div>
            </div>
            <div className="price-container">
                <div className="price">
                    {price}
                    <Ticker display="brief" change={alpha} />
                </div>
                <KeyboardArrowRightRoundedIcon />
            </div>
        </div>
    );
}

export default PriceCard;
