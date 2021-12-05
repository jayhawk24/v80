import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import reducers from "./reducers/index";

const bindMiddleware = (middleware) => {
    if (process.env.NODE_ENV !== "production") {
        // I require this only in dev environment
        const { composeWithDevTools } = require("redux-devtools-extension");
        return composeWithDevTools(applyMiddleware(...middleware));
    }
    return applyMiddleware(...middleware);
};

const store = createStore(reducers, {}, bindMiddleware([thunk]));

export default store;
