import { Box, Button, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import MainContent from "../components/MainContent";
import { useCart } from "../contexts/CartContext";

const OrderSummary = styled(Box)`
  display: flex;
  margin: auto;
  flex-direction: column;
  width: 60%;
  border-bottom: 1px solid black;
`;

const OrderSummaryItem = styled(Box)`
  display: flex;
  justify-content: space-between;
  margin: 0.5v rem 0;
`;

const CalculatingTotal = styled(Box)`
  display: flex;
  justify-content: space-between;
  width: 60%;
  margin: 1rem auto;
`;

const OrderSummaryHeader = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
`;

const ButtonBox = styled(Box)`
  display: flex;
  justify-content: center;
  margin-top: 5rem;
`;

interface Props {
  email: string;
  name: string;
}

const OrderConfirmation = ({ email, name }: Props) => {
  const { totalAmount, getItemQty, cart, clearCart } = useCart();

  function orderNumberGenerator() {
    return Math.floor(Math.random() * 99999999999);
  }
  return (
    <MainContent>
      <OrderSummaryHeader>
        <Typography variant="h2">Thank you for your purchase {name}!</Typography>
        <Typography sx={{ my: "1rem" }} variant="h4">
          Order number: OE{orderNumberGenerator()}
        </Typography>
        <Typography sx={{ my: "2rem" }} variant="h6">
          An email will be sent to {email} with your order details
        </Typography>
      </OrderSummaryHeader>
      <OrderSummary>
        {cart.map((cartItem) => (
          <OrderSummaryItem key={cartItem.product.id}>
            <Typography variant="h6">
              {getItemQty(cartItem.product.id)} x {cartItem.product.title}
            </Typography>
            <Typography variant="h6">{cartItem.product.price * getItemQty(cartItem.product.id)}</Typography>
          </OrderSummaryItem>
        ))}
      </OrderSummary>
      <CalculatingTotal>
        <Typography variant="h5">Total</Typography>
        <Typography variant="h5"> + {totalAmount}</Typography>
      </CalculatingTotal>
      <ButtonBox>
        <NavLink to={"/store"}>
          <Button onClick={clearCart} variant="contained">
            Continue shopping
          </Button>
        </NavLink>
      </ButtonBox>
    </MainContent>
  );
};

export default OrderConfirmation;
