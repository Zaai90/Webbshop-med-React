import { Button } from "@mui/material";
import { Box } from "@mui/material/";
import TextField from "@mui/material/TextField";
import { useFormik } from "formik";
import * as yup from "yup";
import { useProducts } from "../contexts/ProductContext";
import { Product } from "../ProductData";

interface Props {
  product?: Product;
  isNewProduct: boolean;
}

interface Values {
  title: string;
  designer: string;
  description: string;
  price: number;
  category: string;
  size?: string;
  color: string;
  img: string;
  img2?: string;
  img3?: string;
}

const validationSchema = yup.object({
  title: yup.string().min(1, "Product must have a title with atleast 1 character").required("title is required"),
  designer: yup.string().min(2, "Product must have a designer with atleast 2 characters").required("designer name is required"),
  description: yup.string().min(2, "Product must have a description with atleast 2 characters").required("description is required"),
  price: yup.number().min(2, "Product must have a price with atleast 2 digits").required("price is required"),
  category: yup.string().min(1, "Product must have a category with atleast 2 characters").required("category is required"),
  size: yup.string().min(1, "Product must have a size with atleast 1 character ").notRequired(),
  color: yup.string().min(2, "Product must have a color with atleast 2 characters").required("color is required"),
  img: yup.string().min(5, "Product must have a valid url").required("img url is required"),
  img2: yup.string().min(5, "Product must have a valid url").notRequired(),
  img3: yup.string().min(5, "Product must have a valid url").notRequired(),
});

export default function Form({ product, isNewProduct }: Props) {
  const { createProduct, editProduct } = useProducts();

  function addProduct(values: Values, id?: number) {
    return {
      id: id ? id : 0,
      title: values.title,
      designer: values.designer,
      description: values.description,
      price: values.price,
      category: values.category,
      size: values.size,
      color: values.color,
      img: [values.img, values.img2, values.img3],
    } as Product;
  }

  const handleSubmit = (isNewProduct: boolean, values: Values, product?: Product) => {
    if (!isNewProduct && product) {
      editProduct(addProduct(values, product.id));
    }
    if (isNewProduct) {
      createProduct(addProduct(values));
    }
  };

  const formik = useFormik({
    initialValues: { title: "", description: "", price: 0, designer: "", category: "", color: "", img: "" },
    validationSchema: validationSchema,
    onSubmit: (values: Values, e) => {
      handleSubmit(isNewProduct, values);
      alert(JSON.stringify(values, null, 2));
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
          error={formik.touched.designer && Boolean(formik.errors.designer)}
          helperText={formik.touched.designer && formik.errors.designer}
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
          id="price"
          name="price"
          label="Price"
          // defaultValue={product?.price}
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
          label="Category"
          name="category"
          // defaultValue={product?.category}
          variant="standard"
          InputLabelProps={{
            shrink: true,
          }}
          onChange={formik.handleChange}
          error={formik.touched.category && Boolean(formik.errors.category)}
          helperText={formik.touched.category && formik.errors.category}
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
          name="img"
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
      <Button color="primary" variant="contained" type="submit">
        {isNewProduct ? "ADD" : "UPDATE"}
      </Button>
    </Box>
  );
}
