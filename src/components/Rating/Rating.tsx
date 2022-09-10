import { Box, Button, Container, ImageList, ImageListItem, ImageListItemBar, TextField, Typography } from "@mui/material";
import { FormikValues, useFormik } from "formik";
import { useState } from "react";
import styled from "styled-components";
import * as yup from "yup";
import imgData from "./imgData";

const ImageContainer = styled(Container)`
  max-width: 500px !important;
  ul {
    padding: 20px !important;
  }

  ul > * {
    img {
      opacity: 0.5;
    }
  }

  li {
    align-items: center;
    cursor: pointer;
  }

  li img {
    max-width: 40px;
    margin-bottom: 5px;
  }

  li:hover img {
    transform: scale(1.05);
    opacity: 1;
  }

  li:hover {
    div {
      opacity: 1;
    }
  }

  ul:hover > *:hover {
    opacity: 1;
  }

  .MuiImageListItemBar-title {
    font-size: 14px;
    user-select: none;
  }

  .isActive img,
  .isActive div {
    opacity: 1 !important;
  }

  .isActive div {
    cursor: default !important;
  }
`;

const validationSchema = yup.object({
  name: yup.string().min(2, "Enter a valid name").required("Name is required"),
  review: yup.string().min(10, "Enter at least 10 characters").required("Review is required"),
});

export interface Values {
  name: string;
  review: string;
  rating: number;
}

const Rating = () => {
  const [isActive, setActive] = useState(5);
  function toggleClass(index: any) {
    setActive(index);
  }

  const formik = useFormik({
    initialValues: { name: "", review: "", rating: 2 },

    validationSchema: validationSchema,
    onSubmit: (values: FormikValues) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <Container sx={{ display: "flex", flexDirection: "column", justifyContent: "center", textAlign: "center" }}>
      <Typography variant={"h5"}>We're excited to hear your opinion!</Typography>
      <form onSubmit={formik.handleSubmit} style={{ display: "flex", flexDirection: "column" }}>
        <TextField
          id="name"
          name="name"
          type="text"
          value={formik.values.name}
          onChange={formik.handleChange}
          error={formik.touched.name && Boolean(formik.errors.name)}
          helperText={formik.touched.name && formik.errors.name}
          label="Your name"
          sx={{ width: "50%", margin: "1rem auto" }}
        />
        <TextField
          label="Write a review!"
          placeholder="Veri nice producc, i liek"
          multiline
          rows={4}
          id="review"
          name="review"
          type="text"
          value={formik.values.review}
          onChange={formik.handleChange}
          error={formik.touched.review && Boolean(formik.errors.review)}
          helperText={formik.touched.review && formik.errors.review}
          sx={{ width: "50%", margin: "1rem auto" }}
        />
        <Typography variant={"h5"}>How would you rate this product?</Typography>
        <ImageContainer>
          <ImageList cols={5}>
            {imgData.map((item, index) => (
              <ImageListItem
                key={item.img}
                id="rating"
                value={formik.values.rating}
                    onClick={() => {
                        toggleClass(index)
                        formik.values.rating = index}
                    } 
                onChange={formik.handleChange}
                className={isActive === index ? "isActive" : undefined}
              >
                <img src={`${item.img}`} alt={item.title} loading="lazy" />
                <ImageListItemBar title={item.title} position="below" sx={{ textAlign: "center", opacity: 0 }} />
              </ImageListItem>
            ))}
          </ImageList>
        </ImageContainer>
        <Box>
          <Button variant="contained" type="submit">
            Submit review
          </Button>
        </Box>
      </form>
    </Container>
  );
};

export default Rating;
