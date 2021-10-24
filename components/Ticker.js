import React from "react";
import KeyboardArrowUpRoundedIcon from "@mui/icons-material/KeyboardArrowUpRounded";
function Ticker({ display }) {
    if (display === "brief") {
        return <div className="ticker">+2.9%</div>;
    }
    return (
        <div className="ticker">
            <KeyboardArrowUpRoundedIcon />
            $12.23 (2.9%)
        </div>
    );
}

export default Ticker;
