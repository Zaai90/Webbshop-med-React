import * as Icon from "@mui/icons-material";
import { Box, Typography, useMediaQuery } from "@mui/material";
import Fab from "@mui/material/Fab";
import { useState } from "react";
import AdminTable from "../components/Admin/AdminTable";
import AdminTableMobile from "../components/Admin/AdminTableMobile";
import Form from "../components/Form";
import { useProducts } from "../contexts/ProductContext";
import Product from "../models/Product";
import theme from "../utils/Theme";

const Admin = () => {
  const [formIsOpen, setFormIsOpen] = useState<boolean>(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | undefined>(undefined);

  const { deleteProductById } = useProducts();

  const mdScreen = useMediaQuery(theme.breakpoints.down("md"));

  const handleEdit = (product: Product) => {
    if (selectedProduct === product) {
      setSelectedProduct(undefined);
      setFormIsOpen(false);
    } else {
      setSelectedProduct(product);
      setFormIsOpen(true);
    }
  };

  const handleDelete = (id: string) => {
    if (id) {
      deleteProductById(id);
    }
  };

  return (
    <div style={{ margin: "5rem 1rem 0 1rem" }}>
      <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "2rem" }}>
        <Typography variant="h5">Admin</Typography>
        {!formIsOpen ? (
          <Fab
            onClick={() => {
              setFormIsOpen(true);
              setSelectedProduct(undefined);
            }}
            color="primary"
            aria-label="add"
          >
            <Icon.Add />
          </Fab>
        ) : (
          <Fab
            onClick={() => {
              setFormIsOpen(false);
              setSelectedProduct(undefined);
            }}
            color="primary"
            aria-label="add"
          >
            <Icon.HighlightOff />
          </Fab>
        )}
      </Box>

      {(formIsOpen || selectedProduct) && (
        <Box sx={{ maxWidth: "360px" }}>
          <Form product={selectedProduct} />
        </Box>
      )}

      {mdScreen ? <AdminTableMobile handleDelete={handleDelete} handleEdit={handleEdit} /> : <AdminTable handleEditClicked={handleEdit} />}
    </div>
  );
};

export default Admin;
