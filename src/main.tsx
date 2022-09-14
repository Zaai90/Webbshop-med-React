import { CssBaseline, ThemeProvider } from "@mui/material";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import CartContextProvider from "./contexts/CartContext";
import CurrencyContextProvider from "./contexts/CurrencyContext";
import FavoritesProvider from "./contexts/FavoriteContext";
import ProductProvider from "./contexts/ProductContext";
import ReviewProvider from "./contexts/ReviewContext";
import theme from "./utils/Theme";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <ReviewProvider>
          <CurrencyContextProvider>
            <ProductProvider>
              <FavoritesProvider>
                <CartContextProvider>
                  <App />
                </CartContextProvider>
              </FavoritesProvider>
            </ProductProvider>
          </CurrencyContextProvider>
        </ReviewProvider>
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);
