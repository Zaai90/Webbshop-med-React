import { Button } from "@mui/material";
import { NavLink } from "react-router-dom";
import { useCart } from "../../contexts/CartContext";

interface Props {
  handleSubmit: () => void;
}

const Confirmation = ({ handleSubmit }: Props) => {
  const { clearCart } = useCart();

  return (
    <div>
      <div>Confirmation</div>
      <NavLink to={"/orderConfirmation"}>
        <Button color="primary" variant="contained" fullWidth type="submit" onClick={clearCart}>
          Finish order
        </Button>
      </NavLink>
    </div>
  );
};

export default Confirmation;
