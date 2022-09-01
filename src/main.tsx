import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import CartContextProvider from "./contexts/CartContext";
import ProductProvider from "./contexts/ProductContext";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <ProductProvider>
        <CartContextProvider>
          <App />
        </CartContextProvider>
      </ProductProvider>
    </BrowserRouter>
  </React.StrictMode>
);
