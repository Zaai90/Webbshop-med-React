import * as Icon from "@mui/icons-material";
import { Typography, useMediaQuery } from "@mui/material";
import Fab from "@mui/material/Fab";
import { useState } from "react";
import AddProduct from "../components/Admin/AdminAddProduct";
import AdminTable from "../components/Admin/AdminTable";
import AdminTableMobile from "../components/Admin/AdminTableMobile";
import Form from "../components/Form";
import { useProducts } from "../contexts/ProductContext";
import { Product } from "../ProductData";
import theme from "../utils/Theme";

const Admin = () => {
  // const [productsState, setProductsState] = useState<Product[]>();
  const [formIsOpen, setFormIsOpen] = useState<boolean>(false);
  // const [editFormIsOpen, setEditFormIsOpen] = useState<boolean>(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | undefined>();

  const { deleteProductById } = useProducts();

  const mdScreen = useMediaQuery(theme.breakpoints.down("md"));

  const handleEdit = (product: Product) => {
    if (selectedProduct === product) {
      setSelectedProduct(undefined);
      console.log(product);
    } else {
      setSelectedProduct(product);
    }
  };

  const handleDelete = (id: number) => {
    if (id) {
      console.log(id);
      deleteProductById(id);
    }
  };

  return (
    <div style={{ margin: "5rem 1rem 0 1rem" }}>
      <Typography variant="h5">Admin</Typography>
      <Fab onClick={() => setFormIsOpen(!formIsOpen)} color="primary" aria-label="add">
        <Icon.Add />
      </Fab>
      <AddProduct isOpen={formIsOpen} />
      {selectedProduct && <Form isNewProduct={false} product={selectedProduct} />}

      {mdScreen ? <AdminTableMobile handleDelete={handleDelete} handleEdit={handleEdit} /> : <AdminTable handleEditClicked={handleEdit} />}
    </div>
  );
};

export default Admin;
