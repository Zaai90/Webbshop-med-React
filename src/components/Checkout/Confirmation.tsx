import { Button } from "@mui/material";

interface Props {
  handleSubmit: () => void;
}

const Confirmation = ({ handleSubmit }: Props) => {
  return (
    <div>
      <div>Confirmation</div>
      <Button color="primary" variant="contained" fullWidth type="submit" onClick={handleSubmit}>
        Finish order
      </Button>
    </div>
  );
};

export default Confirmation;
