import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { createStore } from "redux";
import { Provider } from "react-redux";
import { contactReducer } from "./components/Friend/contactReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter } from "react-router-dom";
import * as serviceWorker from "./serviceWorker";

const store = createStore(contactReducer, composeWithDevTools());
const root = ReactDOM.createRoot(document.getElementById('root'));
const rootElement = document.getElementById("root");


root.render(
  <Provider store={store}>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </Provider>,
  rootElement
);

serviceWorker.unregister();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
