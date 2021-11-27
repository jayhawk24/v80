import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import App from "../App";
import { fetchStocks } from "../redux/actions/stockActions";

function AppContainer() {
    const stocks = useSelector((state) => state.stocks);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchStocks());
    }, []);

    return <App />;
}

export default AppContainer;
