import { useCart } from "../contexts/CartContext";

const CartDrawerContent = () => {
  const { cart } = useCart();
  return <div>{cart.length > 0 ? "You have things in your cart!" : "Cart is empty!"}</div>;
};

export default CartDrawerContent;
