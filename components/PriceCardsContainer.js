import React from "react";
import PriceCard from "./PriceCard";

function PriceCardsContainer() {
    return (
        <div>
            <p>Your watchlist</p>
            <PriceCard
                imageSrc="https://en.bitcoin.it/w/images/en/2/29/BC_Logo_.png"
                title="Bitcoin"
                code="BTC"
                alpha="3.4"
                price="$234"
            />
            <PriceCard
                imageSrc="https://en.bitcoin.it/w/images/en/2/29/BC_Logo_.png"
                title="Bitcoin"
                code="BTC"
                alpha="3.4"
                price="$234"
            />
        </div>
    );
}

export default PriceCardsContainer;
