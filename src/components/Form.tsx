import { Button } from "@mui/material";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { FormEvent, useState } from "react";
import { Product } from "../ProductData";

interface Props {
  product?: Product;
  onSubmit: (product: Product, event: FormEvent<HTMLFormElement>) => void;
}

export default function Form({ product, onSubmit }: Props) {
  const [updatedProduct, setUpdatedProduct] = useState(
    product || { id: 0, designer: "", title: "", description: "", price: 0, category: "", img: [""], size: "", color: "" }
  );

  const handleOnChange = (e: any) => {
    if (product) {
      const prodToUpdate = { ...updatedProduct, [e.target.name]: e.target.value };
      setUpdatedProduct(prodToUpdate);
    }
  };

  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 0.3, width: "15rem" },
      }}
      noValidate
      autoComplete="off"
      onSubmit={(event) => {
        onSubmit(updatedProduct, event);
      }}
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
          onChange={handleOnChange}
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
          onChange={handleOnChange}
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
          onChange={handleOnChange}
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
          onChange={handleOnChange}
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
          onChange={handleOnChange}
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
          onChange={handleOnChange}
        />
      </div>
      <Button type="submit">UPDATE</Button>
    </Box>
  );
}
