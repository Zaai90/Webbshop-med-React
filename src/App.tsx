import { Route, Routes } from "react-router-dom";
import MainContent from "./components/MainContent";
import GlobalStyle from "./globalStyles";
import Layout from "./Layout";
import Admin from "./pages/Admin";
import Checkout from "./pages/Checkout";
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
          <Route path="store" element={<Store />} />
          <Route path="product/:id" element={<ProductPage />} />
          <Route path="checkout" element={<Checkout />} />
          <Route path="admin" element={<Admin />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
