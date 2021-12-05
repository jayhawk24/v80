import axios from "axios";
import { ActionTypes } from "./actionTypes";

export const fetchStocks = () => async (dispatch) => {
    const response = await axios.get("api/v80");
    dispatch({ type: ActionTypes.SET_STOCKS, payload: response.data });
};

export const fetchQuote = (symbol) => async (dispatch) => {
    const response = await axios.get(
        `/api/get-chart?symbol=${symbol}&interval=60m&range=5d`
    );
    dispatch({ type: ActionTypes.SET_STOCK_QUOTE, payload: response.data });
};

export const setStocks = (stocks) => {
    return {
        type: ActionTypes.SET_STOCKS,
        payload: stocks
    };
};

export const setSelectedStock = (stock) => {
    return {
        type: ActionTypes.SET_SELECTED_STOCK,
        payload: stock
    };
};

export const removeSelectedStock = (stock) => {
    return {
        type: ActionTypes.REMOVE_SELECTED_STOCK,
        payload: stock
    };
};
