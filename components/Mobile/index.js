import React, { useEffect, useState } from "react";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import MainPriceCard from "../PriceCards/MainPriceCard";
import PriceCardsContainer from "../PriceCards/PriceCardsContainer";
import CircularProgress from "@mui/material/CircularProgress";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedStock } from "../redux/actions/stockActions";

function Mobile() {
    const stocks = useSelector((state) => state.stocks.stocks);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(
            setSelectedStock([...stocks].sort((a, b) => a.change - b.change)[0])
        );
    }, [stocks]);

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
                    <CircularProgress color="inherit" />
                </div>
            ) : (
                <>
                    <MainPriceCard />
                    <PriceCardsContainer />
                </>
            )}
        </div>
    );
}

export default Mobile;
