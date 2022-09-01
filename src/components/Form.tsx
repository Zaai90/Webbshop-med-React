import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Product } from "../ProductData";

interface Props {
  product?: Product;
}

export default function Form({ product }: Props) {
  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 0.3, width: "15rem" },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          required
          id="standard-required"
          label="Required"
          defaultValue={product?.title}
          variant="standard"
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField
          required
          id="standard-required"
          label="Required"
          defaultValue={product?.description}
          variant="standard"
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField
          required
          id="standard-required"
          label="Required"
          defaultValue={product?.price}
          variant="standard"
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField
          required
          id="standard-required"
          label="Required"
          defaultValue={product?.designer}
          variant="standard"
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField
          required
          id="standard-required"
          label="Required"
          defaultValue={product?.category}
          variant="standard"
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField
          required
          id="standard-required"
          label="Required"
          defaultValue={product?.color}
          variant="standard"
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField
          required
          id="standard-required"
          label="Required"
          defaultValue={product?.size}
          variant="standard"
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField
          required
          id="standard-required"
          label="Required"
          defaultValue={product?.img[0]}
          variant="standard"
          InputLabelProps={{
            shrink: true,
          }}
        />
      </div>
    </Box>
  );
}
