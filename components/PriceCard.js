import React from "react";
import Ticker from "./Ticker";
import KeyboardArrowRightRoundedIcon from "@mui/icons-material/KeyboardArrowRightRounded";

function PriceCard({ imageSrc, title, code, alpha, price }) {
    return (
        <div className="price-card">
            <div className="details">
                <img src={imageSrc} />
                <div>
                    {title}
                    <div className="symbol">
                        {code} {alpha}
                    </div>
                </div>
            </div>
            <div className="price-container">
                <div className="price">
                    {price}
                    <Ticker display="brief" />
                </div>
                <KeyboardArrowRightRoundedIcon />
            </div>
        </div>
    );
}

export default PriceCard;
