import PaymentIcon from "@mui/icons-material/Payment";
import { Box, Button, Container, FormControl, FormControlLabel, Radio, RadioGroup, Typography } from "@mui/material";
import { useState } from "react";
import styled from "styled-components";
import { CreditCardModel } from "../../models/CreditCardModel";
import SwishSVG from "../Logos/SwishSVG";
import TrustlySVG from "../Logos/TrustlySVG";
import Bank from "./PaymentOptions/Bank";
import CreditCard from "./PaymentOptions/CreditCard";
import Swish from "./PaymentOptions/Swish";

interface Props {
  handleSubmit: () => void;
  // handleFormValues: (values: CreditCardModel) => void;
}

const PaymentOptionWrapper = styled.div`
  border: 1px solid rgba(0,0,0,0.25);
  border-radius: .3rem;
  padding: 2rem;
  width: 100%;
  cursor: pointer;
`;

const PaymentComponent = styled.div``;

const PaymentOption = styled.div`
display: flex;
align-items: center;
`;


const PaymentOptions = ({ handleSubmit }: Props) => {
  const [value, setValue] = useState("");
  function handleFormValues(values: CreditCardModel) {
    console.log(values);
  }

  const handleClick = (name: string) => {
    setValue(name);
  };


  return (
    <Container>
      <FormControl sx={{ width: "100%" }}>
        <Typography sx={{ marginBottom: "2rem" }}>Payment Options</Typography>
        <RadioGroup sx={{ margin: "0 auto", gap: "1rem", width: "100%" }} value={value}>
          <PaymentOptionWrapper onClick={() => handleClick("swish")}>
            <PaymentOption>
              <FormControlLabel name="swish" value="swish" control={<Radio />} label="Swish" sx={{ marginRight: "auto" }} />
              <Box sx={{ width: "100px" }}>
                <SwishSVG />
              </Box>
            </PaymentOption>
            <PaymentComponent>{value === "swish" && <Swish />}</PaymentComponent>
          </PaymentOptionWrapper>

          <PaymentOptionWrapper onClick={() => handleClick("credit-card")}>
            <PaymentOption>
              <FormControlLabel value="credit-card" control={<Radio />} label="Credit Card" sx={{ marginRight: "auto" }} />
              <Box>
                <PaymentIcon />
              </Box>
            </PaymentOption>
            <PaymentComponent>{value === "credit-card" && <CreditCard handleSubmit={handleSubmit} handleFormValues={handleFormValues} />}</PaymentComponent>
          </PaymentOptionWrapper>

          <PaymentOptionWrapper onClick={() => handleClick("bank")}>
            <PaymentOption>
              <FormControlLabel value="bank" control={<Radio />} label="Directly from your bank" sx={{ marginRight: "auto" }} />
              <Box sx={{ width: "75px" }}>
                <TrustlySVG />
              </Box>
            </PaymentOption>
            <PaymentComponent>{value === "bank" && <Bank />}</PaymentComponent>
          </PaymentOptionWrapper>
        </RadioGroup>
      </FormControl>
      <Button color="primary" variant="contained" fullWidth type="submit" form='credit-card-form' sx={{ marginTop: "3rem" }}>
        Next step
      </Button>
    </Container>
  );
};

export default PaymentOptions;
