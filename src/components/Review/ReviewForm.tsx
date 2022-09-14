import { Box, Button, Container, ImageList, ImageListItem, ImageListItemBar, TextField, Typography, useMediaQuery } from "@mui/material";
import { useFormik } from "formik";
import React, { useState } from "react";
import styled from "styled-components";
import * as yup from "yup";
import Product from "../../models/Product";
import { ReviewModel } from "../../models/ReviewModel";
import theme from "../../utils/Theme";
import ratingData from "./ratingData";

const ImageContainer = styled(Container)`
  max-width: 500px !important;

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

interface Props {
  product: Product;
  toggleModal: React.Dispatch<React.SetStateAction<boolean>>;
  handleSubmit: (review: ReviewModel) => void;
}

const ReviewForm = React.forwardRef(({ product, handleSubmit, toggleModal }: Props, ref) => {
  const [isActive, setActive] = useState(5);
  const today = new Date().toLocaleDateString();
  const smScreen = useMediaQuery(theme.breakpoints.down("tablet"));
  function toggleClass(index: any) {
    setActive(index);
  }

  const formik = useFormik({
    initialValues: { name: "", review: "", rating: 1, productId: "", createdAt: today, accepted: false },

    validationSchema: validationSchema,
    onSubmit: (values: ReviewModel) => {
      handleSubmit(values);
      toggleModal(false);
    },
  });

  return (
    <Box
      ref={ref}
      tabIndex={-1}
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        textAlign: "center",
        backgroundColor: "white",
        width: "fit-content",
        padding: smScreen ? "20px" : "40px 0",
        borderRadius: ".3rem",
        position: "relative",
      }}
    >
      <Box
        sx={{ width: "fit-content", position: "absolute", top: 0, right: 0, cursor: "pointer", padding: "14px", lineHeight: 1 }}
        onClick={() => toggleModal(false)}
      >
        X
      </Box>
      <Container>
        <Box>
          <Typography variant={smScreen ? "h6" : "h5"}>We're excited to hear your opinion!</Typography>
        </Box>
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
            sx={{ width: smScreen ? "100%" : "75%", margin: "1rem auto" }}
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
            sx={{ width: smScreen ? "100%" : "75%", margin: "1rem auto" }}
          />
          <Typography variant={smScreen ? "h6" : "h5"}>How would you rate this product?</Typography>
          <ImageContainer>
            <ImageList cols={5} sx={{ gap: "8px", padding: smScreen ? "30px 10px" : "20px" }}>
              {ratingData.map((item, index) => (
                <ImageListItem
                  key={item.img}
                  id="rating"
                  value={formik.values.rating}
                  onClick={() => {
                    toggleClass(index);
                    formik.values.rating = index;
                  }}
                  onChange={formik.handleChange}
                  className={isActive === index ? "isActive" : undefined}
                >
                  <img src={`${item.img}`} alt={item.title} loading="lazy" />
                  {!smScreen && <ImageListItemBar title={item.title} position="below" sx={{ textAlign: "center", opacity: 0 }} />}
                </ImageListItem>
              ))}
            </ImageList>
          </ImageContainer>
          <Box>
            <Button
              variant="contained"
              type="submit"
              onClick={() => {
                formik.values.productId = product.id;
                formik.values.accepted = false;
              }}
            >
              Submit review
            </Button>
          </Box>
        </form>
      </Container>
    </Box>
  );
});

export default ReviewForm;
