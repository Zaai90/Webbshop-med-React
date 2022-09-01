import { useCart } from "../contexts/CartContext";
import CartDrawerItem from "./CartDrawerItem";

const CartDrawerContent = () => {
  const { cart } = useCart();
  return (
    <div style={{ width: "100%" }}>
      {cart.map((cartItem) => (
        <CartDrawerItem cartItem={cartItem} />
      ))}
    </div>
  );
};

export default CartDrawerContent;
