import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";

import { GlobalStyle } from "./index.style";

import PlayGround from "./components/play-ground";

import { Provider } from "react-redux";
import { createStore } from "redux";
// import { loadLocalStore, saveLocalStore } from "./redux/local-store";
import rootReducer from "./redux/reducers/_root-reducer";

// const loadedLocalStore = loadLocalStore();
// const store = createStore(rootReducer, loadedLocalStore);
const store = createStore(rootReducer);

ReactDOM.render(
  <Provider store={store}>
    <GlobalStyle />
    <PlayGround />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
