import * as Icon from "@mui/icons-material/";
import DeleteIcon from "@mui/icons-material/Delete";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import { Stack } from "@mui/system";
import styled from "styled-components";
import MainContent from "../components/MainContent";
import { useCart } from "../contexts/CartContext";
import { useCurrency } from "../contexts/CurrencyContext";
import { useFavorites } from "../contexts/FavoriteContext";
import { Product } from "../ProductData";

const FavoriteCard = styled.div`
  display: flex;
  flex-direction: column;
`;

const CardInfoWrapper = styled.div`
  display: flex;
  margin-bottom: 1rem;
  background-color: #f7f7f7;

  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: right;
  align-items: center;
  margin-right: 1rem;

  @media (max-width: 600px) {
    margin: auto;
    padding-bottom: 1.5rem;
  }
`;

const CardInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 2rem;
  margin-right: auto;

  @media (max-width: 600px) {
    margin: auto;
    text-align: center;
  }
`;

const FavoritesFooter = styled.div`
  display: flex;
  justify-content: right;
`;

const FavoritesContainer = styled.div`
  margin: auto;
  max-width: 600px;
`;

const ButtonStyled = styled(Button)`
  margin-left: 1rem;
`;

const StackStyled = styled(Stack)`
  margin: 1rem 0;

  @media (max-width: 600px) {
    margin: 1rem auto;
  }
`;

const Image = styled.img`
  height: 200px;

  @media (max-width: 600px) {
    width: 60%;
    height: 60%;
    margin: auto;
  }
`;

const Favorites = () => {
  const { removeAllFavorites, removeFromFavorites, favorites } = useFavorites();
  const { addToCart, addAllFavorites } = useCart();
  const { convertToCurrencyValue, changeCurrency } = useCurrency();

  return (
    <MainContent>
      <FavoritesContainer>
        <FavoriteCard>
          {favorites.map((favorite: Product) => (
            <CardInfoWrapper>
              <Image src={favorite.img[0]} alt="" />
              <CardInfo>
                <h5>{favorite.title}</h5>
                <p>{favorite.designer}</p>
                <p>{convertToCurrencyValue(favorite.price)}</p>
              </CardInfo>

              <ButtonContainer>
                <Stack direction="row" spacing={3}>
                  <IconButton onClick={() => removeFromFavorites(favorite)} aria-label="delete">
                    <FavoriteIcon sx={{ fontSize: "2rem", color: "#9c27b0" }} />
                  </IconButton>
                  <IconButton
                    onClick={() => {
                      addToCart(favorite, 1);
                      removeFromFavorites(favorite);
                    }}
                  >
                    <Icon.LocalMallOutlined sx={{ fontSize: "2rem" }} />
                  </IconButton>
                </Stack>
              </ButtonContainer>
            </CardInfoWrapper>
          ))}
        </FavoriteCard>

        <FavoritesFooter>
          <StackStyled direction="row" spacing={2}>
            <ButtonStyled onClick={() => removeAllFavorites()} variant="outlined" startIcon={<DeleteIcon />}>
              Remove all
            </ButtonStyled>
            <ButtonStyled
              onClick={() => {
                addAllFavorites();
                removeAllFavorites();
              }}
              variant="contained"
              startIcon={<Icon.LocalMallOutlined />}
            >
              Add all to cart
            </ButtonStyled>
          </StackStyled>
        </FavoritesFooter>
      </FavoritesContainer>
    </MainContent>
  );
};

export default Favorites;