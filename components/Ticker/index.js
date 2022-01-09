import React from "react";
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";
import KeyboardArrowUpRoundedIcon from "@mui/icons-material/KeyboardArrowUpRounded";
function Ticker({ display, change, price = 0 }) {
    let classname = "ticker ";
    if (change > 0) {
        classname += "green";
    } else classname += "red";

    if (display === "brief") {
        return <div className={classname}> {change}% </div>;
    }

    const priceChange = ((price * change) / 100).toFixed(2);

    return (
        <div className={classname}>
            {change > 0 ? (
                <KeyboardArrowUpRoundedIcon className="arrow-expand" />
            ) : (
                <KeyboardArrowDownRoundedIcon className="arrow-expand" />
            )}
            ₹{priceChange} ({change}%)
        </div>
    );
}

export default Ticker;
