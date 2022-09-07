import PaymentIcon from "@mui/icons-material/Payment";
import { Box, Button, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from "@mui/material";
import { useState } from "react";
import styled from "styled-components";
import SwishSVG from "../Logos/SwishSVG";
import TrustlySVG from "../Logos/TrustlySVG";
import Bank from "./PaymentOptions/Bank";
import CreditCard from "./PaymentOptions/CreditCard";
import Swish from "./PaymentOptions/Swish";

interface Props {
  handleSubmit: () => void;
}

const PaymentOption = styled.div`
  display: flex;
`;

const PaymentComponent = styled.div``;

const PaymentOptions = ({ handleSubmit }: Props) => {
  const [value, setValue] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue((event.target as HTMLInputElement).value);
  };

  return (
    <div>
      <FormControl>
        <FormLabel id="demo-controlled-radio-buttons-group">Payment Options</FormLabel>
        <RadioGroup aria-labelledby="demo-controlled-radio-buttons-group" name="controlled-radio-buttons-group" value={value} onChange={handleChange}>
          <PaymentOption>
            <FormControlLabel name="swish" value="swish" control={<Radio />} label="Swish" />
            <Box sx={{ width: "200px" }}>
              <SwishSVG />
            </Box>
          </PaymentOption>
          <PaymentComponent>{value === "swish" && <Swish />}</PaymentComponent>

          <PaymentOption>
            <FormControlLabel value="credit-card" control={<Radio />} label="Credit Card" />
            <Box>
              <PaymentIcon />
            </Box>
          </PaymentOption>
          <PaymentComponent>{value === "credit-card" && <CreditCard />}</PaymentComponent>

          <PaymentOption>
            <FormControlLabel value="bank" control={<Radio />} label="Directly from your bank" />
            <Box sx={{ width: "200px" }}>
              <TrustlySVG />
            </Box>
          </PaymentOption>
          <PaymentComponent>{value === "bank" && <Bank />}</PaymentComponent>
        </RadioGroup>
      </FormControl>
      <Button color="primary" variant="contained" fullWidth type="submit" onClick={handleSubmit}>
        Next step
      </Button>
    </div>
  );
};

export default PaymentOptions;
