import { Box, Button, Container, ImageList, ImageListItem, ImageListItemBar, TextField, Typography } from "@mui/material";
import styled from "styled-components";
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

const Rating = () => {
  const toggleClass = (e: any) => {
    e.currentTarget.classList.toggle("isActive");
  };
  return (
    <Container sx={{ marginTop: "5rem", display: "flex", flexDirection: "column", justifyContent: "center", textAlign: "center" }}>
      <Typography variant={"h5"}>We're excited to hear your opinion!</Typography>
      <TextField
        id="outlined-textarea"
        label="Write a review!"
        placeholder="Veri nice producc, i liek"
        multiline
        rows={4}
        sx={{ width: "50%", margin: "2rem auto" }}
      />
      <Typography variant={"h5"}>How would you rate this product?</Typography>
      <ImageContainer>
        <ImageList cols={5}>
          {imgData.map((item) => (
            <ImageListItem key={item.img} onClick={toggleClass}>
              <img src={`${item.img}`} alt={item.title} loading="lazy" />
              <ImageListItemBar title={item.title} position="below" sx={{ textAlign: "center", opacity: 0 }} />
            </ImageListItem>
          ))}
        </ImageList>
      </ImageContainer>
      <Box>
        <Button variant="contained">Submit review</Button>
      </Box>
    </Container>
  );
};

export default Rating;
