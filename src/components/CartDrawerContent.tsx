import { Container } from "@mui/material";
import styled from "styled-components";
import { useCart } from "../contexts/CartContext";
import CartDrawerItem from "./CartDrawerItem";

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.div`
  text-transform: uppercase;
  font-weight: 700;
  margin-bottom: 1rem;
`;

const Total = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0.5rem;
`;

const CartDrawerContent = () => {
  const { cart, totalAmount } = useCart();
  return (
    <>
      <Wrapper>
        <Title>CART</Title>
        {cart.length == 0 && <div>Cart is empty</div>}
        {cart.map((cartItem) => (
          <CartDrawerItem key={cartItem.product.id} cartItem={cartItem} />
        ))}
      </Wrapper>
      <Total>
        <span>Total: </span>
        <span>{totalAmount}</span>
      </Total>
      <button>CHECKOUT BUTTON HERE</button>
    </>
  );
};

export default CartDrawerContent;
