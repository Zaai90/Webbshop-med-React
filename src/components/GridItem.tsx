import * as Icon from "@mui/icons-material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { Button, Card, FormControl, IconButton, InputLabel, MenuItem, Modal, Select, SelectChangeEvent } from "@mui/material";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import SimpleImageSlider from "react-simple-image-slider";
import styled from "styled-components";
import { useCart } from "../contexts/CartContext";
import { useFavorites } from "../contexts/FavoriteContext";
import { Product } from "../ProductData";

const CardImageStyled = styled.div<{ imgUrl: string }>`
  background: url(${(props) => props.imgUrl});
  background-size: contain;
  background-color: #f7f7f7;
  background-repeat: no-repeat;
  background-position: center;
  height: 350px;
  width: 100%;
  border-radius: none;
  cursor: pointer;
  transition: 0.5s ease-in-out;

  @media (max-width: 768px) {
    height: 200px;
  }
`;

const CardBottomStyled = styled.div`
  position: relative;
  z-index: 100;
  background-color: white;
  display: flex;
  justify-content: center;
  flex-direction: row;
  text-align: center;
  font-size: small;
  position: relative;
  padding: 10px;
`;

const IconButtonStyled = styled(IconButton)`
  position: absolute !important;
  right: 2%;
  top: 10%;
  color: black !important;
`;

const QuickView = styled.span`
  position: absolute;
  bottom: 0px;
  left: 0;
  right: 0;
  padding: 15px 20px 20px 20px;
  background: rgba(0, 0, 0, 0.5);
  z-index: 4;
  transition: 0.5s ease all;
  text-align: center;
  cursor: pointer;
  font-size: 12px;
  color: white;
  text-shadow: 2px 2px 4px black;
`;

const CardStyled = styled(Card)`
  box-shadow: none !important;
  border-radius: none;
  position: relative;
  &:hover {
    ${QuickView} {
      transform: translateY(-125%);
    }
    ${CardImageStyled} {
      scale: 1.05;
    }
  }
`;

const ModalContent = styled.div`
  position: absolute;
  width: 920px;
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

  @media (max-width: 992px) {
    display: none;
  }
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

const FavoriteButtonStyled = styled(IconButton)`
  position: absolute;
  left: 5%;
  top: 10%;
  z-index: 200;
  color: black;
`;
interface Props {
  product: Product;
  openSnackBar: (productTitle: string) => void;
}

const GridItem = ({ product }: Props) => {
  const { favorites, removeFromFavorites, addToFavorites } = useFavorites();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [size, setSize] = useState("");
  const [isFavorite, setIsFavorite] = useState(checkIfIsFavorite());
  const { addToCart } = useCart();

  const handleChange = (event: SelectChangeEvent) => {
    setSize(event.target.value as string);
  };

  function handleQuickViewClick() {
    setIsModalOpen(true);
  }

  function checkIfIsFavorite(): boolean {
    if (favorites.length === 0) {
      return false;
    }
    return favorites.find((favorite) => favorite.id === product.id) ? true : false;

  }

  function toggleFavorite() {
    !isFavorite ? addToFavorites(product) : removeFromFavorites(product);
    setIsFavorite(!isFavorite);
  }

  return (
    <>
      <CardStyled>
        <FavoriteButtonStyled onClick={toggleFavorite} color="secondary">
          {isFavorite ? <FavoriteIcon /> : <FavoriteBorderIcon />}
        </FavoriteButtonStyled>
        <NavLink to={`../product/${product.id}`}>
          <CardImageStyled imgUrl={product.img[0]} />
        </NavLink>
        <QuickView
          onClick={() => {
            handleQuickViewClick();
          }}
        >
          Quick View
        </QuickView>
        <CardBottomStyled>
          <div>
            <h5>{product.title}</h5>
            <p>{product.designer}</p>
            <p>{product.price}:-</p>
          </div>

          <IconButtonStyled
            onClick={() => {
              addToCart(product, 1);
            }}
            color="primary"
            aria-label="add to shopping cart"
          >
            <Icon.AddShoppingCart />
          </IconButtonStyled>
        </CardBottomStyled>
      </CardStyled>
      <Modal open={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <ModalContent>
          <SimpleImageSliderContainer>
            <SimpleImageSlider width={"100%"} height={"100%"} images={product.img} showBullets={true} showNavs={true} navMargin={-10} />
          </SimpleImageSliderContainer>
          <div>
            <p style={{ color: "rgb(159, 159, 159)" }}>{product.designer}</p>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "3rem" }}>
              <h3>{product.title}</h3>
              <h2>{product.price}</h2>
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
              endIcon={<AddShoppingCartIcon />}
              onClick={() => {
                addToCart(product, 1);
                setIsModalOpen(false);
              }}
            >
              Add to Cart
            </ButtonStyled>
          </div>
        </ModalContent>
      </Modal>
    </>
  );
};

export default GridItem;
