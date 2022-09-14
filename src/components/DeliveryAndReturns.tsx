import { Box, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";
import { useCurrency } from "../contexts/CurrencyContext";

const DeliveryAndReturns = () => {
  const { convertToCurrencyValue } = useCurrency();
  return (
    <Box sx={{ padding: "1rem" }}>
      <Typography variant="h6">Delivery and returns</Typography>
      <Box sx={{ paddingBottom: "0.5rem" }}>
        <Typography variant="body2">Free Shipping on purchases over {convertToCurrencyValue(499)}, 4-7 working days.</Typography>
      </Box>
      <Box sx={{ paddingBottom: "0.5rem" }}>
        <Typography variant="body2">
          14 day right of return. <NavLink to="/#">Click here</NavLink> for more information on exchanges and returns.
        </Typography>
      </Box>
      <Typography variant="body2">Secure payments: Choose between card payment, Swish or Trustly Bank.</Typography>
    </Box>
  );
};

export default DeliveryAndReturns;
