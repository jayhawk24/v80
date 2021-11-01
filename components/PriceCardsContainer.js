import React, { useEffect, useState } from "react";
import PriceCard from "./PriceCard";

function PriceCardsContainer({ stocks }) {
    return (
        <div>
            <p>Your watchlist</p>
            <div className="price-cards-container">
                {stocks.map((stock, i) => (
                    <PriceCard
                        key={i}
                        imageSrc="https://en.bitcoin.it/w/images/en/2/29/BC_Logo_.png"
                        // imageSrc={`https://s3-symbol-logo.tradingview.com/${stock.name.toLowerCase()}.svg`}
                        title={stock.name}
                        symbol={stock.symbol}
                        alpha={stock.change}
                        price={stock.price}
                    />
                ))}
            </div>
        </div>
    );
}

export default PriceCardsContainer;
