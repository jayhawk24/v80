import { combineReducers } from "redux";
import {
    stockReducer,
    selectedStockReducer,
    stockQuoteReducer
} from "./stockReducers";

const reducers = combineReducers({
    stocks: stockReducer,
    selectedStock: selectedStockReducer,
    stockQuote: stockQuoteReducer
});

export default reducers;
