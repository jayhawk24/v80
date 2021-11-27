import { combineReducers } from "redux";
import { stockReducer, selectedStockReducer } from "./stockReducers";

const reducers = combineReducers({
    stocks: stockReducer,
    selectedStock: selectedStockReducer
});

export default reducers;
