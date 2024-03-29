import React from "react";
import ReactDOM from "react-dom";
import App from "./app/App";
import reducer from "./app/redux/reducer";
import { Provider } from "react-redux";
import { createStore } from "redux";
import "./app/styles/main.scss";
import * as serviceWorker from "./serviceWorker";

const store = createStore(reducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
