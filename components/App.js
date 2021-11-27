import React, { useEffect, useState } from 'react';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MainPriceCard from './MainPriceCard';
import PriceCardsContainer from './PriceCardsContainer';
import CircularProgress from '@mui/material/CircularProgress';
import { useSelector } from 'react-redux';

function App() {
    const [highlightStock, setHighlightStock] = useState({});
    const stocks = useSelector((state) => state.stocks.stocks);

    useEffect(() => {
        setHighlightStock([...stocks].sort((a, b) => a.change - b.change)[0]);
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
                    <MainPriceCard highlightStock={highlightStock} />
                    <PriceCardsContainer
                        stocks={stocks}
                        setHighlightStock={setHighlightStock}
                    />
                </>
            )}
        </div>
    );
}

export default App;
