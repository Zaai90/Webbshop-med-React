import { Button } from "@mui/material";

interface Props {
  handleSubmit: () => void;
}

const PaymentOptions = ({ handleSubmit }: Props) => {
  return (
    <div>
      <div>PaymentOptions</div>
      <Button color="primary" variant="contained" fullWidth type="submit" onClick={handleSubmit}>
        Next step
      </Button>
    </div>
  );
};

export default PaymentOptions;
