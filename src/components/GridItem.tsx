import * as Icon from "@mui/icons-material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { Button, Card, Divider, Fade, IconButton, Modal, SelectChangeEvent, Tooltip } from "@mui/material";
import { useSnackbar } from "notistack";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { useCart } from "../contexts/CartContext";
import { useCurrency } from "../contexts/CurrencyContext";
import { useFavorites } from "../contexts/FavoriteContext";
import { Product } from "../ProductData";
import QuickViewModal from "./Modals/QuickViewModal";

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

const FavoriteButtonStyled = styled.div`
  position: absolute;
  left: 0%;
  top: 0%;
  z-index: 200;
  padding: 0.75rem;
  cursor: pointer;
  svg {
    transition: 2s ease all;
  }
`;
interface Props {
  product: Product;
}

const GridItem = ({ product }: Props) => {
  const { enqueueSnackbar } = useSnackbar();
  const { favorites, removeFromFavorites, addToFavorites } = useFavorites();
  const { addToCart } = useCart();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [size, setSize] = useState("");
  const [isFavorite, setIsFavorite] = useState(checkIfIsFavorite());

  const { convertToCurrencyValue } = useCurrency();

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

  function handleAdd() {
    addToCart(product, 1);

    // Styled toast
    enqueueSnackbar(
      <div style={{ display: "flex", flexDirection: "column", width: "300px" }}>
        <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
          <Icon.AddShoppingCart />
          <div>Added to cart!</div>
        </div>
        <Divider sx={{ bgcolor: "primary.dark", margin: "1rem 0" }} />
        <div style={{ display: "flex", gap: "1rem" }}>
          <img draggable="false" width={100} src={product.img[0]} />
          <div>
            <h4>{product.title}</h4>
            <h3>{convertToCurrencyValue(product.price)}</h3>
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "center", margin: "1rem 0", width: "100%" }}>
          <NavLink style={{ width: "100%" }} to="/checkout">
            <Button variant="contained" color="success" fullWidth>
              CHECKOUT
            </Button>
          </NavLink>
        </div>
      </div>
    );
  }

  return (
    <>
      <CardStyled>
        <FavoriteButtonStyled onClick={toggleFavorite}>
          <Tooltip
            TransitionComponent={Fade}
            TransitionProps={{ timeout: 500 }}
            title={isFavorite ? "Remove from wishlist" : "Add to wishlist"}
            placement="right"
            arrow
          >
            {isFavorite ? <FavoriteIcon color={"secondary"} /> : <FavoriteBorderIcon color={"disabled"} />}
          </Tooltip>
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
            <p>{convertToCurrencyValue(product.price)}</p>
          </div>

          <IconButtonStyled onClick={() => handleAdd()} color="primary" aria-label="add to shopping cart">
            <Icon.AddShoppingCart />
          </IconButtonStyled>
        </CardBottomStyled>
      </CardStyled>
      <Modal open={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <QuickViewModal product={product} size={size} handleChange={handleChange} toggleModal={setIsModalOpen} />
      </Modal>
    </>
  );
};

export default GridItem;
