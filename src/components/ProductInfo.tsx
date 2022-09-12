import * as Icon from "@mui/icons-material/";
import { Box, Fade, IconButton, Tooltip } from "@mui/material";
import styled from "styled-components";
import { useCart } from "../contexts/CartContext";
import { useCurrency } from "../contexts/CurrencyContext";
import { useFavorites } from "../contexts/FavoriteContext";
import { Product } from "../ProductData";

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: center;
  gap: 0.1rem;
  padding: 1rem;
  width: 100%;

  @media (min-width: 768px) {
    width: 50%;
  }
`;

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: "row";
  gap: 1rem;
  padding: 0 1rem 0 0;
  margin: 0;

  @media (min-width: 768px) {
    gap: 12rem;
  }
`;

const TitleStyled = styled.h1`
  font-size: 1rem;
  font-weight: 500;
  color: grey;

  @media (min-width: 768px) {
    font-size: 1.5rem;
    color: black;
  }
`;

const DesignerStyled = styled.h2`
  font-weight: 500;
  font-size: 1.1rem;

  @media (min-width: 768px) {
    font-size: 0.8rem;
    color: grey;
  }
`;

const PriceStyled = styled.p`
  font-size: 1.1rem;
  font-weight: 500;

  @media (min-width: 768px) {
    font-size: 1.5rem;
    margin-top: -1.05rem;
    font-weight: 500;
  }
`;

const DescriptionStyled = styled.p`
  @media (min-width: 768px) {
    font-size: 1.5rem;
    font-weight: 400;
  }
`;

interface Props {
  product: Product;
}

const ProductInfo = ({ product }: Props) => {
  const { convertToCurrencyValue } = useCurrency();
  const { isFavorite, toggleFavorite } = useFavorites();
  const { addToCart } = useCart();

  return (
    <InfoContainer>
      <HeaderContainer>
        <DesignerStyled>{product.designer}</DesignerStyled>
        <PriceStyled>{convertToCurrencyValue(product.price)}</PriceStyled>
      </HeaderContainer>
      <TitleStyled>{product.title}</TitleStyled>
      <Box>
        <IconButton onClick={() => toggleFavorite(product)}>
          <Tooltip
            TransitionComponent={Fade}
            TransitionProps={{ timeout: 500 }}
            title={isFavorite(product) ? "Remove from wishlist" : "Add to wishlist"}
            placement="left"
            arrow
          >
            {isFavorite(product) ? <Icon.Favorite color={"secondary"} /> : <Icon.FavoriteBorder color={"disabled"} />}
          </Tooltip>
        </IconButton>
        <IconButton onClick={() => addToCart(product, 1)}>
          <Tooltip TransitionComponent={Fade} TransitionProps={{ timeout: 500 }} title={"Add to cart"} placement="left" arrow>
            <Icon.AddShoppingCart />
          </Tooltip>
        </IconButton>
      </Box>
      <h4>Description:</h4>
      <DescriptionStyled>{product.description}</DescriptionStyled>
    </InfoContainer>
  );
};

export default ProductInfo;
