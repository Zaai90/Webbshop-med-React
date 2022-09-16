import * as Icon from "@mui/icons-material";
import { Box, Button, Container, Divider } from "@mui/material";
import { NavLink } from "react-router-dom";
import { useCurrency } from "../../contexts/CurrencyContext";
import Product from "../../models/Product";

interface Props {
  product: Product;
}

const AddProductSnackbar = ({ product }: Props) => {
  const { convertToCurrencyValue } = useCurrency();

  return (
    <Container sx={{ display: "flex", flexDirection: "column", width: "300px", userSelect: "none" }}>
      <div style={{ display: "flex", gap: "1rem", justifyContent: "center", alignItems: "center" }}>
        <Icon.AddShoppingCart />
        <Box>Added to cart!</Box>
      </div>
      <Divider sx={{ bgcolor: "primary", margin: "1rem 0" }} />
      <div style={{ display: "flex", gap: "1rem" }}>
        <img draggable="false" width={40} src={product.img[0]} />
        <div>
          <h4>{product.title}</h4>
          <h3>{convertToCurrencyValue(product.price)}</h3>
        </div>
      </div>
      <div style={{ display: "flex", justifyContent: "center", margin: "0.5rem 0", width: "100%" }}>
        <NavLink style={{ width: "100%", textDecoration: "none" }} to="/checkout">
          <Button variant="contained" color="success" fullWidth>
            CHECKOUT
          </Button>
        </NavLink>
      </div>
    </Container>
  );
};

export default AddProductSnackbar;
