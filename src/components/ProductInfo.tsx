
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

const TitleStyled = styled.p`
  color: grey;

  @media (min-width: 768px) {
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

  @media (min-width: 768px) {
    font-size: 1rem;
    margin-top: -0.5rem;
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
    <Container maxWidth="lg" fixed>
      <HeaderContainer>
        <DesignerStyled>{product.designer}</DesignerStyled>

        <PriceStyled>
          <Typography variant="subtitle1">{convertToCurrencyValue(product.price)}</Typography>
        </PriceStyled>
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
    </Container>
  );
};

export default ProductInfo;
