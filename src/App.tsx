import { Route, Routes } from "react-router-dom";
import GlobalStyle from "./globalStyles";
import Layout from "./Layout";
import Admin from "./pages/Admin";
import Checkout from "./pages/Checkout";
import Home from "./pages/Home";
import Product from "./pages/Product";
import Store from "./pages/Store";

function App() {
  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="store" element={<Store />} />
          <Route path="product/:id" element={<Product />} />
          <Route path="checkout" element={<Checkout />} />
          <Route path="admin" element={<Admin />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;