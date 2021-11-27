import { ActionTypes } from '../actions/actionTypes';

const initState = {
    stocks: []
};

export const stockReducer = (state = initState, { type, payload }) => {
    switch (type) {
        case ActionTypes.SET_STOCKS:
            return { stocks: [...state.stocks, ...payload] };
        default:
            return state;
    }
};

export const selectedStockReducer = (state = {}, { type, payload }) => {
    switch (type) {
        case ActionTypes.SET_SELECTED_STOCK:
            return { selectedStock: payload };
        case ActionTypes.REMOVE_SELECTED_STOCK:
            return {};
        default:
            return state;
    }
};
