import * as Icon from "@mui/icons-material";
import { Button, Divider } from "@mui/material";
import { NavLink } from "react-router-dom";
import { useCurrency } from "../../contexts/CurrencyContext";
import { Product } from "../../ProductData";

interface Props {
  product: Product;
}

const AddProductSnackbar = ({ product }: Props) => {
  const { convertToCurrencyValue } = useCurrency();

  return (
    <div style={{ display: "flex", flexDirection: "column", width: "300px" }}>
      <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
        <Icon.AddShoppingCart />
        <div>Added to cart!</div>
      </div>
      <Divider sx={{ bgcolor: "primary.dark", margin: "1rem 0" }} />
      <div style={{ display: "flex", gap: "1rem" }}>
        <img draggable="false" width={100} src={product.img[0]} />
        <div>
          <h4>{product.title}</h4>
          <h3>{convertToCurrencyValue(product.price)}</h3>
        </div>
      </div>
      <div style={{ display: "flex", justifyContent: "center", margin: "1rem 0", width: "100%" }}>
        <NavLink style={{ width: "100%" }} to="/checkout">
          <Button variant="contained" color="success" fullWidth>
            CHECKOUT
          </Button>
        </NavLink>
      </div>
    </div>
  );
};

export default AddProductSnackbar;
