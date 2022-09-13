import * as Icon from "@mui/icons-material/";
import { Button } from "@mui/material";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { useCart } from "../../contexts/CartContext";
import { useCurrency } from "../../contexts/CurrencyContext";
import CartDrawerItem from "./CartDrawerItem";

const Wrapper = styled.div`
  width: 100%;
  align-items: center;
  overflow: scroll;
  padding-bottom: 162px;
`;

const Title = styled.div`
  text-transform: uppercase;
  font-weight: 700;
  margin-bottom: 1rem;
  align-self: center;
`;

const Total = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0.5rem;
`;

const CartBottom = styled.div`
  bottom: 0;
  position: absolute;
  width: 100%;
  right: 0;
  padding: 1rem;
`;

interface Props {
  toggleDrawer: () => void;
}

const CartDrawerContent = ({ toggleDrawer }: Props) => {
  const { cart, totalAmount, clearCart } = useCart();
  const { convertToCurrencyValue } = useCurrency();

  function handleClearCart() {
    clearCart();
    toggleDrawer();
  }
  return (
    <>
      {cart.length == 0 ? (
        <div>Cart is empty</div>
      ) : (
        <>
          <Title>CART</Title>
          <Wrapper>
            {cart.map((cartItem) => (
              <CartDrawerItem key={cartItem.product.id} cartItem={cartItem} toggleDrawer={toggleDrawer} />
            ))}
          </Wrapper>
          <CartBottom>
            <Button variant="outlined" color="warning" style={{ maxWidth: "max-content", gap: ".5rem", margin: ".5rem 0" }} onClick={handleClearCart}>
              Empty cart <Icon.Delete />
            </Button>
            <Total>
              <span style={{ fontWeight: 500 }}>Total: </span>
              <span>{convertToCurrencyValue(totalAmount)} </span>
            </Total>
            <NavLink onClick={toggleDrawer} to="checkout">
              <Button variant="contained" fullWidth>
                CHECKOUT
              </Button>
            </NavLink>
          </CartBottom>
        </>
      )}
    </>
  );
};

export default CartDrawerContent;
