import React, { useEffect, useState } from "react";
import PriceCard from "./PriceCard";

function PriceCardsContainer({ stocks, setHighlightStock }) {
    return (
        <div>
            <p>Your watchlist</p>
            <div className="price-cards-container">
                {stocks.map((stock, i) => (
                    <PriceCard
                        key={i}
                        stock={stock}
                        setHighlightStock={setHighlightStock}
                    />
                ))}
            </div>
        </div>
    );
}

export default PriceCardsContainer;
