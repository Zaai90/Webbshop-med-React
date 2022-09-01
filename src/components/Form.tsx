import { Button } from "@mui/material";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { FormEvent } from "react";
import { useProducts } from "../contexts/ProductContext";
import { Product } from "../ProductData";

interface Props {
  product?: Product;
}

export default function Form({ product }: Props) {
  const { products } = useProducts();

  const handleOnChange = (e: FormEvent) => {
    if (product) {
      //   const prodToUpdate = { ...product, [e.target.name]: e.target.value };
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log(e.target);
  };

  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 0.3, width: "15rem" },
      }}
      noValidate
      autoComplete="off"
      onSubmit={handleSubmit}
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
          name="title"
          onChange={handleOnChange}
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
      <Button type="submit">UPDATE 1</Button>
    </Box>
  );
}
