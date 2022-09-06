import { createTheme, ThemeProvider } from "@mui/material";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import CartContextProvider from "./contexts/CartContext";
import CurrencyContextProvider from "./contexts/CurrencyContext";
import FavoritesProvider from "./contexts/FavoriteContext";
import ProductProvider from "./contexts/ProductContext";
import theme from "./utils/Theme";

// declare module "@mui/material/styles" {
//   interface BreakpointOverrides {
//     tablet: true;
//   }
// }

// const theme = createTheme({
//   breakpoints: {
//     keys: ["xs", "sm", "tablet", "md", "lg", "xl"],
//     values: {
//       xs: 0,
//       sm: 600,
//       tablet: 768,
//       md: 900,
//       lg: 1200,
//       xl: 1536,
//     },
//   },
//   typography: {
//     fontFamily: "'Poppins','Roboto', 'Helvetica', sans-serif",
//   },
// });

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
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
    </ThemeProvider>
  </React.StrictMode>
);
