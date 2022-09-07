import { Button } from "@mui/material";
import { Box } from "@mui/material/";
import TextField from "@mui/material/TextField";
import { useFormik } from "formik";
import { FormEvent, useState } from "react";
import * as yup from "yup";
import { Product } from "../ProductData";

interface Props {
  product?: Product;
  onSubmit: (product: Product, event: FormEvent<HTMLFormElement>) => void;
  isNewProduct?: boolean;
}

const validationSchema = yup.object({
  title: yup.string().min(1, "Product must have a title with atleast 1 character").required("title is required"),
  designer: yup.string().min(2, "Product must have a designer with atleast 2 characters").required("designer name is required"),
  description: yup.string().min(2, "Product must have a description with atleast 2 characters").required("description is required"),
  price: yup.string().min(2, "Product must have a price with atleast 2 digits").required("price is required"),
  category: yup.string().min(1, "Product must have a category with atleast 2 characters").required("category is required"),
  size: yup.string().min(1, "Product must have a size with atleast 1 character ").required("size is required"),
  color: yup.string().min(2, "Product must have a color with atleast 2 characters").required("color is required"),
  img: yup.string().min(5, "Product must have a valid url").required("img url is required"),
});

export default function Form({ product, onSubmit, isNewProduct }: Props) {
  const [updatedProduct, setUpdatedProduct] = useState(
    product || { id: 0, designer: "", title: "", description: "", price: 0, category: "", img: [""], size: "", color: "" }
  );

  const formik = useFormik({
    initialValues: { title: "", description: "", price: 0, designer: "", category: "", color: "", size: "", img: ["", "", ""] },
    validationSchema: validationSchema,
    onSubmit: (values, e) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  const [newProduct, setNewProduct] = useState<Product>({
    id: 0,
    designer: "",
    title: "",
    description: "asd",
    price: 0,
    category: "",
    img: [""],
    size: "",
    color: "",
  });

  const handleOnChange = (e: any) => {
    if (isNewProduct) {
      console.log("inne i handleChange");
      const productToAdd = { ...newProduct, [e.target.name]: e.target.value };
      console.log(productToAdd);
      setNewProduct(productToAdd);
    } else if (product) {
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
        if (isNewProduct) {
          onSubmit(newProduct, event);
        } else onSubmit(updatedProduct, event);
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
          placeholder="title"
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
          onChange={handleOnChange}
          name="description"
          placeholder="description"
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
          name="price"
          placeholder="price"
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
          name="designer"
          placeholder="designer"
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
          name="category"
          placeholder="category"
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
          name="color"
          placeholder="color"
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
          name="size"
          placeholder="size"
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
          name={`{[...img,}`}
          placeholder="image URL"
        />
      </div>
      <Button type="submit">{isNewProduct ? "ADD" : "UPDATE"}</Button>
    </Box>
  );
}
