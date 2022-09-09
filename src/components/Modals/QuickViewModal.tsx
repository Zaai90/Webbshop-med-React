import * as Icon from "@mui/icons-material";
import { Box, Button, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from "@mui/material";
import React from "react";
import SimpleImageSlider from "react-simple-image-slider";
import styled from "styled-components";
import { useCart } from "../../contexts/CartContext";
import { useCurrency } from "../../contexts/CurrencyContext";
import { Product } from "../../ProductData";

const ModalContent = styled(Box)`
  position: absolute;
  width: 820px;
  background-color: #fff;
  box-shadow: 0px 11px 15px -7px rgba(0, 0, 0, 0.2), 0px 24px 38px 3px rgba(0, 0, 0, 0.14), 0px 9px 46px 8px rgba(0, 0, 0, 0.12);
  padding: 16px;
  transform: translate(-50%, -50%);
  top: 50%;
  left: 50%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  :focus-visible {
    outline: none;
  }
  /* 
  @media (max-width: 992px) {
    display: none;
  } */
`;

const SimpleImageSliderContainer = styled.div`
  height: 500px !important;
  width: 400px !important;
  position: relative !important;
  .rsis-container div {
    background-position: center center !important;
  }
  button {
    filter: invert(100%);
    box-shadow: none !important;
  }
`;

const ButtonStyled = styled(Button)`
  margin-top: 20px !important;
  padding: 15px !important;
  width: 50%;
`;

interface Props {
  product: Product;
  size: string;
  handleChange: (e: SelectChangeEvent) => void;
  toggleModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const QuickViewModal = React.forwardRef(({ product, size, handleChange, toggleModal }: Props, ref) => {
  const { convertToCurrencyValue } = useCurrency();
  const { addToCart } = useCart();

  return (
    <ModalContent ref={ref} tabIndex={-1}>
      <SimpleImageSliderContainer>
        <SimpleImageSlider width={"100%"} height={"100%"} images={product.img} showBullets={true} showNavs={true} navMargin={-10} />
      </SimpleImageSliderContainer>
      <div>
        <p style={{ color: "rgb(159, 159, 159)" }}>{product.designer}</p>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "3rem" }}>
          <h3>{product.title}</h3>
          <h2>{convertToCurrencyValue(product.price)}</h2>
        </div>
        <FormControl fullWidth>
          <InputLabel>Size</InputLabel>
          <Select id="demo-simple-select" value={size} label="Size" onChange={handleChange}>
            <MenuItem value={1}>XS</MenuItem>
            <MenuItem value={2}>S</MenuItem>
            <MenuItem value={3}>M</MenuItem>
            <MenuItem value={4}>L</MenuItem>
            <MenuItem value={5}>XL</MenuItem>
          </Select>
        </FormControl>
        <ButtonStyled
          variant="contained"
          endIcon={<Icon.AddShoppingCart />}
          onClick={() => {
            addToCart(product, 1);
            toggleModal(false);
          }}
        >
          Add to Cart
        </ButtonStyled>
      </div>
    </ModalContent>
  );
});

export default QuickViewModal;
