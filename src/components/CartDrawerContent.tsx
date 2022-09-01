import { Container } from "@mui/material";
import { useCart } from "../contexts/CartContext";
import CartDrawerItem from "./CartDrawerItem";

const CartDrawerContent = () => {
  const { cart } = useCart();
  return (
    <Container maxWidth="lg">
      <div style={{ width: "100%" }}>
        {cart.map((cartItem, index) => (
          <CartDrawerItem key={index} cartItem={cartItem} />
        ))}
      </div>
    </Container>
  );
};

export default CartDrawerContent;
