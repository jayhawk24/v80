import React, { useEffect, useState } from "react";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import MainPriceCard from "./MainPriceCard";
import PriceCardsContainer from "./PriceCardsContainer";
import CircularProgress from "@mui/material/CircularProgress";
import axios from "axios";

function App() {
    const [stocks, setStocks] = useState([]);

    useEffect(() => {
        axios.get("api/v80").then((res) => {
            setStocks(res.data);
        });
    }, []);

    const highlightStock = stocks.sort((a, b) => a.change - b.change)[0];

    return (
        <div className="content">
            <div className="header">
                <div className="title">
                    Hello World
                    <div className="greet">Have a great day !</div>
                </div>

                <div className="icons">
                    <AccountCircleIcon />
                    <NotificationsNoneIcon />
                </div>
            </div>
            {stocks.length === 0 ? (
                <div className="loader">
                    <CircularProgress />
                </div>
            ) : (
                <>
                    <MainPriceCard highlightStock={highlightStock} />
                    <PriceCardsContainer stocks={stocks} />
                </>
            )}
        </div>
    );
}

export default App;
