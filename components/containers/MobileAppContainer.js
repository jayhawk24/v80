import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Mobile from "../Mobile";
import { fetchStocks } from "../redux/actions/stockActions";

function MobileAppContainer() {
    const stocks = useSelector((state) => state.stocks);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchStocks());
    }, []);

    return <Mobile />;
}

export default MobileAppContainer;
