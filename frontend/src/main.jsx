import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import { FavoritesContextProvider } from "./store/favorites-context";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <FavoritesContextProvider>
      <App />
    </FavoritesContextProvider>
  </BrowserRouter>
);
