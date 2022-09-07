import * as Icon from "@mui/icons-material";
import Fab from "@mui/material/Fab";
import { useState } from "react";
import AddProduct from "../components/Admin/AdminAddProduct";
import AdminTable from "../components/AdminTable";
import Form from "../components/Form";
import MainContent from "../components/MainContent";
import { Product } from "../ProductData";

const Admin = () => {
  // const [productsState, setProductsState] = useState<Product[]>();
  const [formIsOpen, setFormIsOpen] = useState<boolean>(false);
  // const [editFormIsOpen, setEditFormIsOpen] = useState<boolean>(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | undefined>();

  const handleEdit = (product: Product) => {
    if (selectedProduct === product) {
      setSelectedProduct(undefined);
    } else {
      setSelectedProduct(product);
    }
    console.log(selectedProduct);
  };

  return (
    <MainContent>
      <div>Admin</div>
      <Fab onClick={() => setFormIsOpen(!formIsOpen)} color="primary" aria-label="add">
        <Icon.Add />
      </Fab>
      <AddProduct isOpen={formIsOpen} />
      {selectedProduct && <Form isNewProduct={false} product={selectedProduct} />}
      <AdminTable handleEditClicked={handleEdit} />
    </MainContent>
  );
};

export default Admin;
