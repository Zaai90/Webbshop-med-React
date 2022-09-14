import * as Icon from "@mui/icons-material";
import { Box, Button, Container, FormControl, IconButton, InputLabel, MenuItem, Select, SelectChangeEvent, Typography } from "@mui/material";
import styled from "styled-components";
import { Autoplay, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { useCurrency } from "../../contexts/CurrencyContext";
import { useFavorites } from "../../contexts/FavoriteContext";
import Product from "../../models/Product";

interface Props {
  product: Product;
  toggleDrawer: React.Dispatch<React.SetStateAction<boolean>>;
  handleAdd: () => void;
  size: string;
  handleChange: (e: SelectChangeEvent) => void;
}

const QuickViewDrawer = ({ product, toggleDrawer, handleAdd, size, handleChange }: Props) => {
  return (
    <Container maxWidth="lg" fixed sx={{ height: "150px", display: "flex", position: "relative", alignItems: "center" }}>
      <IconButton sx={{ position: "absolute", top: 0, right: "1rem" }} onClick={() => toggleDrawer((prev) => !prev)}>
        <Icon.Close />
      </IconButton>

      <Swiper
        loop={true}
        spaceBetween={0}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination]}
        style={{ height: "80%", width: "40%" }}
      >
        {product.img.map((img) => (
          <SwiperSlide
            style={{
              position: "relative",
              backgroundImage: `url(${img})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
            key={img}
          ></SwiperSlide>
        ))}
      </Swiper>
      <Box sx={{ display: "flex", flexDirection: "column", flex: 1, margin: "0 3rem 0 1rem", gap: ".5rem", padding: ".5rem" }}>
        <FormControl size="small">
          <InputLabel>Size</InputLabel>
          <Select id="demo-simple-select" value={size} label="Size" onChange={handleChange}>
            <MenuItem value={1}>XS</MenuItem>
            <MenuItem value={2}>S</MenuItem>
            <MenuItem value={3}>M</MenuItem>
            <MenuItem value={4}>L</MenuItem>
            <MenuItem value={5}>XL</MenuItem>
          </Select>
        </FormControl>
        {size === "" ? (
          <Button variant="contained" color="primary" disabled size="small">
            <Typography variant="body2">Pick a size</Typography>
          </Button>
        ) : (
          <Button variant="contained" color="primary" onClick={() => handleAdd()} size="small">
            <Typography variant="body2">Add to cart</Typography>
          </Button>
        )}
      </Box>
    </Container>
  );
};

export default QuickViewDrawer;
