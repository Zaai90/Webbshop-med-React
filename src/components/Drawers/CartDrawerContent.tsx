import * as Icon from "@mui/icons-material/";
import { Button } from "@mui/material";
import { Container } from "@mui/system";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { useCart } from "../../contexts/CartContext";
import { useCurrency } from "../../contexts/CurrencyContext";
import CartDrawerItem from "./CartDrawerItem";

const Wrapper = styled.div`
::-webkit-scrollbar {
  display: none;
}
  width: 100%;
  height: 100%;
  align-items: center;
  overflow-y: scroll;
  scrollbar-width: none;
`;

const Title = styled.div`
  text-transform: uppercase;
  font-weight: 700;
  width: 100%;
  text-align: center;
  border-bottom: 1px solid rgba(0,0,0,0.15);
  padding: 1rem 0;
`;

const Total = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0.5rem;
`;

const CartBottom = styled.div`
  width: 100%;
  padding: 1rem;
  border-top: 1px solid rgba(0,0,0,0.15);
`;

const CartItemContainer = styled(Container)`
div:last-child {
  border-bottom: none;
}
margin-bottom: 1rem;
margin-top: 1rem;
`

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
              <CartItemContainer>
            {cart.map((cartItem) => (
              <CartDrawerItem key={cartItem.product.id} cartItem={cartItem} toggleDrawer={toggleDrawer} />
              ))}
              </CartItemContainer>
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
