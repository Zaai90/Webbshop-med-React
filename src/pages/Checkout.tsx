import EmptyCart from "../components/Checkout/EmptyCart";
import PaymentProcess from "../components/Checkout/PaymentProcess";
import MainContent from "../components/MainContent";
import { useCart } from "../contexts/CartContext";

const Checkout = () => {
  const { cart } = useCart();
  return (
    <MainContent>
      {cart.length == 0 ? <EmptyCart /> : <PaymentProcess />}
    </MainContent>
  );
};

export default Checkout;
