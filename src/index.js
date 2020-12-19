import React from "react";
import ReactDom from "react-dom";
import { Provider } from "react-redux";
import { createStore, compose } from "redux";

import App from "./container/App";
import reducer from "./redux/reducers"

const initialState = []

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, initialState, composeEnhancers())

ReactDom.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById("app")
)