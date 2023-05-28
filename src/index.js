import React from "react";
import ReactDOM from "react-dom/client";

import { legacy_createStore as createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";

import Places from "./Components/Places";
import reducer from "./redux/places/placesReducer";

const store = createStore(reducer, applyMiddleware(thunk));

const ROOT = ReactDOM.createRoot(document.getElementById("root"));
ROOT.render(
  <React.StrictMode>
    <Provider store={store}>
      <Places />
    </Provider>
  </React.StrictMode>
);
