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

  // const handleOnChange = (e: any) => {
  //   if (isNewProduct) {
  //     console.log("inne i handleChange");
  //     const productToAdd = { ...newProduct, [e.target.name]: e.target.value };
  //     console.log(productToAdd);
  //     setNewProduct(productToAdd);
  //   } else if (product) {
  //     const prodToUpdate = { ...updatedProduct, [e.target.name]: e.target.value };
  //     setUpdatedProduct(prodToUpdate);
  //   }
  // };

  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 0.3, width: "15rem" },
      }}
      noValidate
      autoComplete="off"
      onSubmit={(event) => {
        formik.handleSubmit;
      }}
    >
      <div>
        <TextField
          id="title"
          name="title"
          label="Title"
          // defaultValue={product?.title}
          value={formik.values.title}
          variant="standard"
          InputLabelProps={{
            shrink: true,
          }}
          onChange={formik.handleChange}
          error={formik.touched.title && Boolean(formik.errors.title)}
          helperText={formik.touched.title && formik.errors.title}
        />
        <TextField
          id="designer"
          label="Designer"
          value={formik.values.designer}
          variant="standard"
          InputLabelProps={{
            shrink: true,
          }}
          onChange={formik.handleChange}
        />
        <TextField
          id="description"
          name="description"
          label="Description"
          // defaultValue={product?.description}
          value={formik.values.description}
          variant="standard"
          InputLabelProps={{
            shrink: true,
          }}
          onChange={formik.handleChange}
          error={formik.touched.description && Boolean(formik.errors.description)}
          helperText={formik.touched.description && formik.errors.description}
        />
        <TextField
          id="designer"
          name="designer"
          label="Designer"
          // defaultValue={product?.designer}
          value={formik.values.designer}
          variant="standard"
          InputLabelProps={{
            shrink: true,
          }}
          onChange={formik.handleChange}
          error={formik.touched.designer && Boolean(formik.errors.designer)}
          helperText={formik.touched.description && formik.errors.designer}
        />

        <TextField
          id="category"
          label="Category"
          name="category"
          // defaultValue={product?.category}
          variant="standard"
          InputLabelProps={{
            shrink: true,
          }}
          onChange={formik.handleChange}
        />
        <TextField
          required
          id="color"
          label="Color"
          // defaultValue={product?.color}
          variant="standard"
          InputLabelProps={{
            shrink: true,
          }}
          onChange={formik.handleChange}
          error={formik.touched.color && Boolean(formik.errors.color)}
          helperText={formik.touched.color && formik.errors.color}
        />
        <TextField
          id="size"
          label="Size"
          name="size"
          // defaultValue={product?.size}
          variant="standard"
          InputLabelProps={{
            shrink: true,
          }}
          onChange={formik.handleChange}
          error={formik.touched.size && Boolean(formik.errors.size)}
          helperText={formik.touched.size && formik.errors.size}
        />
        <TextField
          required
          id="img"
          label="Img url"
          name={`{[...img,}`}
          // defaultValue={product?.img[0]}
          variant="standard"
          InputLabelProps={{
            shrink: true,
          }}
          onChange={formik.handleChange}
          error={formik.touched.img && Boolean(formik.errors.img)}
          helperText={formik.touched.img && formik.errors.img}
        />
      </div>
      <Button type="submit">{isNewProduct ? "ADD" : "UPDATE"}</Button>
    </Box>
  );
}
