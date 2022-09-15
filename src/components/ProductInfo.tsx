import { Box, Button, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent, useMediaQuery } from "@mui/material";
import { useSnackbar } from "notistack";
import { useState } from "react";
import styled from "styled-components";
import { useCart } from "../contexts/CartContext";
import { useCurrency } from "../contexts/CurrencyContext";
import { useFavorites } from "../contexts/FavoriteContext";
import Product from "../models/Product";
import theme from "../utils/Theme";
import AddProductSnackbar from "./Modals/AddProductSnackbar";

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: center;
  gap: 0.1rem;
  padding: 1rem;
  width: 100%;

  @media (min-width: ${theme.breakpoints.values.lg}px) {
    justify-content: flex-start;
  }
`;

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 1rem 0 0;
  margin: 0;
`;

const TitleStyled = styled.h1`
  font-weight: 500;
  font-size: 1.1rem;
`;

const AddToCartStyled = styled(Button)`
  width: 100%;
  font-size: 12px !important;
  font-weight: 900 !important;
  padding: 0.75rem 0 !important;
`;

const AddToCartContainer = styled(Box)`
  margin: 2rem 0;
`;

const DesignerStyled = styled.h2`
  font-size: 1rem;
  font-weight: 500;
  color: grey;
`;

const PriceStyled = styled.p`
  font-size: 1.1rem;
  font-weight: 500;
`;

const DescriptionStyled = styled.p`
  @media (min-width: ${theme.breakpoints.values.tablet}px) {
    font-size: 1rem;
    font-weight: 400;
  }
`;

interface Props {
  product: Product;
}

const ProductInfo = ({ product }: Props) => {
  const { enqueueSnackbar } = useSnackbar();
  const [size, setSize] = useState<string>("");
  const { convertToCurrencyValue } = useCurrency();
  const { isFavorite, toggleFavorite } = useFavorites();
  const { addToCart } = useCart();

  const smScreen = useMediaQuery(theme.breakpoints.down("tablet"));

  const handleChange = (event: SelectChangeEvent) => {
    setSize(event.target.value as string);
  };

  function handleAdd() {
    addToCart(product, size, 1);
    enqueueSnackbar(<AddProductSnackbar product={product} />);
  }
  return (
    <InfoContainer>
      <HeaderContainer>
        <TitleStyled>{product.title}</TitleStyled>
        <DesignerStyled>{product.designer}</DesignerStyled>
      </HeaderContainer>
      <PriceStyled>{convertToCurrencyValue(product.price)}</PriceStyled>
      <Box pb={2} pt={2} width={smScreen ? "100%" : "50%"}>
        <FormControl fullWidth size="small">
          <InputLabel>Size</InputLabel>
          <Select id="demo-simple-select" value={size} label="Size" onChange={handleChange}>
            {product.size.map((size, index) => (
              <MenuItem key={index} value={size}>
                {size}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>
      <AddToCartContainer>
        {size === "" ? (
          <AddToCartStyled size="medium" disabled variant="outlined">
            Add to cart
          </AddToCartStyled>
        ) : (
          <AddToCartStyled onClick={handleAdd} size="medium" variant="contained">
            Add to cart
          </AddToCartStyled>
        )}
      </AddToCartContainer>
      <DescriptionStyled>{product.description}</DescriptionStyled>
    </InfoContainer>
  );
};

export default ProductInfo;
