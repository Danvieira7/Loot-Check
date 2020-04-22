import React from "react";
import { render } from "react-dom";
import { createStore } from "redux";
import rootReducer from "./reducers/balance";
import { Provider } from"react-redux";
import App from "./pages/App/App";

// create store
const store = createStore(rootReducer);

// distribute the store to the app in it's higher component
render(
    <Provider store={store}>
        <App />
    </Provider>, 
    document.getElementById("root")
);