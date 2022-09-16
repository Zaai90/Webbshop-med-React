import { Route, Routes } from "react-router-dom";
import StoreGrid from "./components/StoreGrid";
import GlobalStyle from "./globalStyles";
import Layout from "./Layout";
import LayoutAdmin from "./LayoutAdmin";
import Admin from "./pages/Admin";
import Checkout from "./pages/Checkout";
import Favorites from "./pages/Favorites";
import Home from "./pages/Home";
import ProductPage from "./pages/Product";
import Store from "./pages/Store";

function App() {
  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="store/" element={<Store />}>
            <Route path="category/:category" element={<StoreGrid />} />
          </Route>
          <Route path="product/:id" element={<ProductPage />} />
          <Route path="checkout" element={<Checkout />} />
          <Route path="wishlist" element={<Favorites />} />
          <Route path="*" element={<h1>404</h1>} />
        </Route>
        <Route path="/" element={<LayoutAdmin />}>
          <Route path="admin" element={<Admin />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
