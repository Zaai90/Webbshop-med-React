import { Container } from "@mui/material";
import { useCart } from "../contexts/CartContext";
import CartDrawerItem from "./CartDrawerItem";

const CartDrawerContent = () => {
  const { cart } = useCart();
  return (
    <Container maxWidth="lg" fixed>
      <div style={{ width: "100%" }}>
        {cart.length == 0 && <div>Cart is empty</div>}
        {cart.map((cartItem, index) => (
          <CartDrawerItem key={index} cartItem={cartItem} />
        ))}
      </div>
    </Container>
  );
};

export default CartDrawerContent;
