import { Button, Container } from "@mui/material";
import { NavLink } from "react-router-dom";
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

interface Props {
  toggleDrawer: () => void;
}

const CartDrawerContent = ({ toggleDrawer }: Props) => {
  const { cart, totalAmount } = useCart();
  return (
    <>
      {cart.length == 0 ? (
        <div>Cart is empty</div>
      ) : (
        <>
          <Wrapper>
            <Title>CART</Title>
            {cart.map((cartItem) => (
              <CartDrawerItem key={cartItem.product.id} cartItem={cartItem} />
            ))}
          </Wrapper>
          <Total>
            <span style={{ fontWeight: 500 }}>Total: </span>
            <span>{totalAmount} SEK</span>
          </Total>
          <NavLink onClick={toggleDrawer} to="checkout">
            Checkout
          </NavLink>
        </>
      )}
    </>
  );
};

export default CartDrawerContent;
