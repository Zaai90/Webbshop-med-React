import { useEffect, useState } from "react";
import AdminProductCard from "../components/AdminProductCard";
import MainContent from "../components/MainContent";
import { useProducts } from "../contexts/ProductContext";
import { Product } from "../ProductData";

const Admin = () => {
  const [productsState, setProductsState] = useState<Product[]>();
  const { products } = useProducts();

  return (
    <MainContent>
      <div>Admin</div>
      {products.map((product) => (
        <AdminProductCard key={product.id} product={product} />
      ))}
    </MainContent>
  );
};

export default Admin;
