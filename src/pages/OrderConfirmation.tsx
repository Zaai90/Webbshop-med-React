import { Box, Button, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import MainContent from "../components/MainContent";
import { OrderModel } from "../models/OrderModel";

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
  orders: OrderModel[];
}

const OrderConfirmation = ({ orders }: Props) => {
  function orderNumberGenerator() {
    return Math.floor(Math.random() * 99999999999);
  }

  function findLatestOrder() {
    const latestOrder = orders.find((x) => x.orderId === orders.length);

    if (latestOrder) {
      return latestOrder;
    }
  }

  const latestOrder = findLatestOrder();

  return (
    <MainContent>
      <OrderSummaryHeader>
        <Typography variant="h2">Thank you for your purchase {latestOrder?.paymentFormInfo.firstName}!</Typography>
        <Typography sx={{ my: "1rem" }} variant="h4">
          Order number: OE{orderNumberGenerator()}
        </Typography>
        <Typography sx={{ my: "2rem" }} variant="h6">
          An email will be sent to {latestOrder?.paymentFormInfo.email} with your order details
        </Typography>
        {latestOrder?.swishInfo?.phoneNumber && <Typography>You paid with swish: {latestOrder.swishInfo.phoneNumber}</Typography>}
        {latestOrder?.creditInfo?.cardNumber && <Typography>You paid with credit card: {latestOrder.creditInfo.cardNumber}</Typography>}
      </OrderSummaryHeader>
      <OrderSummary>
        {latestOrder?.cartItems.map((cartItem) => (
          <OrderSummaryItem key={cartItem.product.id}>
            <Typography variant="h6">
              {cartItem.quantity} x {cartItem.product.title}
            </Typography>
            <Typography variant="h6">{cartItem.product.price * cartItem.quantity}</Typography>
          </OrderSummaryItem>
        ))}
      </OrderSummary>
      <CalculatingTotal>
        <Typography variant="h5">Total</Typography>
        <Typography variant="h5"> + {latestOrder?.cartItems.reduce((acc, curr) => acc + curr.product.price * curr.quantity, 0)}</Typography>
      </CalculatingTotal>
      <ButtonBox>
        <NavLink style={{ textDecoration: "none" }} to={"/store"}>
          <Button variant="contained">Continue shopping</Button>
        </NavLink>
      </ButtonBox>
    </MainContent>
  );
};

export default OrderConfirmation;
