import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import CartContextProvider from "./contexts/CartContext";
import CurrencyContextProvider from "./contexts/CurrencyContext";
import FavoritesProvider from "./contexts/FavoriteContext";
import ProductProvider from "./contexts/ProductContext";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <CurrencyContextProvider>
        <ProductProvider>
          <FavoritesProvider>
            <CartContextProvider>
              <App />
            </CartContextProvider>
          </FavoritesProvider>
        </ProductProvider>
      </CurrencyContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
