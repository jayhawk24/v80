import { Notifications, Search } from "@mui/icons-material";
import { Button } from "@mui/material";
import React from "react";
import PriceCardsContainer from "../PriceCards/PriceCardsContainer";

function Sidebar() {
    return (
        <div className="sidebar">
            <h1>v40</h1>
            <Button variant="contained">Request</Button>
            <div className="actions">
                <div className="item">
                    <Search />
                    <p>Search</p>
                </div>
                <div className="item">
                    <Notifications />
                    <p>Notifications</p>
                </div>
            </div>
            <PriceCardsContainer />
        </div>
    );
}

export default Sidebar;
