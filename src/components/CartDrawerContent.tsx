import { useCart } from "../contexts/CartContext";
import CartDrawerItem from "./CartDrawerItem";

const CartDrawerContent = () => {
  const { cart } = useCart();
  return (
    <div style={{ width: "100%" }}>
      {cart.map((cartItem, index) => (
        <CartDrawerItem key={index} cartItem={cartItem} />
      ))}
    </div>
  );
};

export default CartDrawerContent;
