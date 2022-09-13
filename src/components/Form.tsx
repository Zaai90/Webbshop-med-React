import { Button } from "@mui/material";
import { Box } from "@mui/material/";
import TextField from "@mui/material/TextField";
import { useFormik } from "formik";
import * as yup from "yup";
import { useProducts } from "../contexts/ProductContext";
import { Product } from "../ProductData";

interface Props {
  product?: Product;
}

export type ProductCreate = Omit<Product, "id">;

type YupObject = Record<keyof ProductCreate, yup.AnySchema>;

const validationSchema = yup.object<YupObject>({
  title: yup.string().min(1, "Product must have a title with atleast 1 character").required("title is required"),
  designer: yup.string().min(2, "Product must have a designer with atleast 2 characters").required("designer name is required"),
  description: yup.string().min(2, "Product must have a description with atleast 2 characters").required("description is required"),
  price: yup.number().min(2, "Product must have a price with atleast 2 digits").required("price is required"),
  category: yup.string().min(1, "Product must have a category with atleast 2 characters").required("category is required"),
  size: yup.string().min(1, "Product must have a size with atleast 1 character ").notRequired(),
  color: yup.string().min(2, "Product must have a color with atleast 2 characters").required("color is required"),
  img: yup.array().min(1, "Product must have a valid url").required("img url is required"),
});

export default function Form({ product }: Props) {
  const { createProduct, editProduct } = useProducts();

  const formik = useFormik<ProductCreate>({
    initialValues: product || { title: "", description: "", price: 0, designer: "", category: "", color: "", size: "", img: [] },
    validationSchema: validationSchema,
    enableReinitialize: true,
    onSubmit: (values, e) => {
      if (product) {
        editProduct({ ...values, id: product.id });
      } else {
        createProduct(values);
      }
    },
  });

  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 0.3, width: "15rem" },
      }}
      autoComplete="off"
      onSubmit={formik.handleSubmit}
    >
      <div>
        <TextField
          id="title"
          name="title"
          label="Title"
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
          name="designer"
          value={formik.values.designer}
          variant="standard"
          InputLabelProps={{
            shrink: true,
          }}
          onChange={formik.handleChange}
          error={formik.touched.designer && Boolean(formik.errors.designer)}
          helperText={formik.touched.designer && formik.errors.designer}
        />
        <TextField
          id="description"
          name="description"
          label="Description"
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
          id="price"
          name="price"
          label="Price"
          value={formik.values.price}
          variant="standard"
          InputLabelProps={{
            shrink: true,
          }}
          onChange={formik.handleChange}
          error={formik.touched.price && Boolean(formik.errors.price)}
          helperText={formik.touched.price && formik.errors.price}
        />
        <TextField
          id="category"
          name="category"
          label="Category"
          variant="standard"
          value={formik.values.category}
          InputLabelProps={{
            shrink: true,
          }}
          onChange={formik.handleChange}
          error={formik.touched.category && Boolean(formik.errors.category)}
          helperText={formik.touched.category && formik.errors.category}
        />
        <TextField
          id="color"
          label="Color"
          name="color"
          variant="standard"
          value={formik.values.color}
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
          variant="standard"
          value={formik.values.size}
          InputLabelProps={{
            shrink: true,
          }}
          onChange={formik.handleChange}
          error={formik.touched.size && Boolean(formik.errors.size)}
          helperText={formik.touched.size && formik.errors.size}
        />
        <TextField
          id="img"
          label="Img url"
          name="img"
          variant="standard"
          value={formik.values.img}
          InputLabelProps={{
            shrink: true,
          }}
          onChange={(e) => formik.setFieldValue("img", [e.target.value])}
          error={formik.touched.img && Boolean(formik.errors.img)}
          helperText={formik.touched.img && formik.errors.img}
        />
      </div>
      <Button sx={{ margin: "1rem" }} color="primary" variant="contained" type="submit">
        {!product ? "ADD" : "UPDATE"}
      </Button>
    </Box>
  );
}
