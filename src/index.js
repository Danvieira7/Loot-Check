import React from "react";
import { render } from "react-dom";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers";
import { Provider } from"react-redux";
import App from "./pages/App/App";

// distribute the store to the app in it's higher component
render(
    <Provider store={ createStore(rootReducer, applyMiddleware(thunk))}>
        <App />
    </Provider>, 
    document.getElementById("root")
);