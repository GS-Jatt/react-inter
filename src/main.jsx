import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { configureStore } from "@reduxjs/toolkit";
import { reducer } from "./features/search/searchSlice.js";
import { Provider } from "react-redux";
import { reducer2 } from "./features/login/loginSlice.js";

const store = configureStore({
  reducer: {
    search: reducer,
    user:reducer2,
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
