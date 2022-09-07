import { Button } from "@mui/material";
import styled from "styled-components";

interface Props {
  handleSubmit: () => void;
}

const PaymentOption = styled.div``;

const PaymentOptions = ({ handleSubmit }: Props) => {
  return (
    <div>
      <div>PaymentOptions</div>
      <PaymentOption>Trade</PaymentOption>
      <PaymentOption>Google Pay</PaymentOption>
      <PaymentOption>VISA</PaymentOption>
      <PaymentOption>PayPal</PaymentOption>
      <PaymentOption>MasterCard</PaymentOption>
      <PaymentOption>Swish</PaymentOption>
      <PaymentOption>Klarna</PaymentOption>
      <PaymentOption>Apple Pay</PaymentOption>
      <Button color="primary" variant="contained" fullWidth type="submit" onClick={handleSubmit}>
        Next step
      </Button>
    </div>
  );
};

export default PaymentOptions;
