import React from "react";
import { useSelector } from "react-redux";
import PriceCard from "./PriceCard";

function PriceCardsContainer() {
    const stocks = useSelector((state) => state.stocks.stocks);
    if (stocks)
        return (
            <div>
                <p>Your watchlist</p>
                <div className="price-cards-container">
                    {stocks.map((stock, i) => (
                        <PriceCard key={i} stock={stock} />
                    ))}
                </div>
            </div>
        );
    return "";
}

export default PriceCardsContainer;
