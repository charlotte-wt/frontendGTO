import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { createStore } from "redux";
import { Provider } from "react-redux";
import rootReducer from "./reducers/rootReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter } from "react-router-dom";
import * as serviceWorker from "./serviceWorker";
import store from './store/store'

// const store1Context = React.createContext();
// const store2Context = React.createContext();
// const store = createStore(rootReducer, composeWithDevTools());
// const store2 = createStore(eventReducer, composeWithDevTools());
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
