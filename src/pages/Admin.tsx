import * as Icon from "@mui/icons-material";
import Fab from "@mui/material/Fab";
import { useState } from "react";
import AddProduct from "../components/AdminAddProduct";
import AdminProductCard from "../components/AdminProductCard";
import AdminTable from "../components/AdminTable";
import MainContent from "../components/MainContent";
import { useProducts } from "../contexts/ProductContext";
import { Product } from "../ProductData";

const Admin = () => {
  const [productsState, setProductsState] = useState<Product[]>();
  const [formIsOpen, setFormIsOpen] = useState<boolean>(false);
  const { products } = useProducts();
  console.log("admin rendered");

  return (
    <MainContent>
      <div>Admin</div>
      {products.map((product) => (
        <AdminProductCard key={product.id} product={product} />
      ))}
      <Fab onClick={() => setFormIsOpen(!formIsOpen)} color="primary" aria-label="add">
        <Icon.Add />
      </Fab>
      <AddProduct isOpen={formIsOpen} />
      <AdminTable />
    </MainContent>
  );
};

export default Admin;
