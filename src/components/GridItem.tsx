import * as Icon from "@mui/icons-material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { Card, Drawer, Fade, IconButton, Modal, SelectChangeEvent, Tooltip, Typography, useMediaQuery } from "@mui/material";
import { Box, Container } from "@mui/system";
import { useSnackbar } from "notistack";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import SimpleImageSlider from "react-simple-image-slider";
import styled from "styled-components";
import { useCart } from "../contexts/CartContext";
import { useCurrency } from "../contexts/CurrencyContext";
import { useFavorites } from "../contexts/FavoriteContext";
import { Product } from "../ProductData";
import theme from "../utils/Theme";
import AddProductSnackbar from "./Modals/AddProductSnackbar";
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

const QuickViewButtonStyled = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  z-index: 200;
  padding: 0.75rem;
  cursor: pointer;
  svg {
    transition: 2s ease all;
  }
`;

const SimpleImageSliderContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 0.5rem;
  min-width: 150px !important;
  min-height: 150px !important;
  position: relative !important;
  .rsis-container div {
    background-position: center center !important;
    background-size: contain !important;
  }
  & button {
    filter: invert(100%);
    box-shadow: none !important;
  }
`;

const DescriptionBox = styled(Typography)`
  display: -webkit-box;
  overflow: hidden;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
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
  const [isQuickViewDrawerOpen, setIsQuickViewDrawerOpen] = useState(false);

  const touchScreen = useMediaQuery(theme.breakpoints.down("md"));

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
    enqueueSnackbar(<AddProductSnackbar product={product} />);
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
        {touchScreen && (
          <QuickViewButtonStyled onClick={() => setIsQuickViewDrawerOpen(true)}>
            <Icon.VisibilityOutlined color={"disabled"} />
          </QuickViewButtonStyled>
        )}
        <NavLink to={`../product/${product.id}`}>
          <CardImageStyled imgUrl={product.img[0]} />
        </NavLink>
        {!touchScreen && (
          <QuickView
            onClick={() => {
              handleQuickViewClick();
            }}
          >
            Quick View
          </QuickView>
        )}
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
      <Drawer anchor="bottom" open={isQuickViewDrawerOpen} onClose={() => setIsQuickViewDrawerOpen(false)}>
        <Container maxWidth="lg" fixed sx={{ display: "flex", position: "relative" }}>
          <IconButton sx={{ position: "absolute", top: 0, right: "1rem" }} onClick={() => setIsQuickViewDrawerOpen((prev) => !prev)}>
            <Icon.Close />
          </IconButton>
          <SimpleImageSliderContainer>
            <SimpleImageSlider width={"80%"} height={"80%"} navSize={30} images={product.img} showBullets={true} showNavs={true} navMargin={-10} />
          </SimpleImageSliderContainer>
          <Box sx={{ display: "flex", flexDirection: "column", padding: ".5rem", flexGrow: "1" }}>
            <Typography color={"rgb(159, 159, 159)"}>{product.designer}</Typography>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: ".5rem" }}>
              <Typography fontSize={".8rem"}>{product.title}</Typography>
              <Typography fontSize={".8rem"} fontWeight="700">
                {convertToCurrencyValue(product.price)}
              </Typography>
            </div>
            <DescriptionBox fontSize={".8rem"}>{product.description}</DescriptionBox>
            <Box sx={{ marginTop: ".5rem", display: "flex", flexDirection: "row-reverse" }}>
              <IconButton onClick={() => handleAdd()}>
                <Tooltip TransitionComponent={Fade} TransitionProps={{ timeout: 500 }} title={"Add to cart"} placement="left" arrow>
                  <Icon.AddShoppingCart />
                </Tooltip>
              </IconButton>
              <IconButton onClick={toggleFavorite}>
                <Tooltip
                  TransitionComponent={Fade}
                  TransitionProps={{ timeout: 500 }}
                  title={isFavorite ? "Remove from wishlist" : "Add to wishlist"}
                  placement="left"
                  arrow
                >
                  {isFavorite ? <FavoriteIcon color={"secondary"} /> : <FavoriteBorderIcon color={"disabled"} />}
                </Tooltip>
              </IconButton>
            </Box>
          </Box>
        </Container>
      </Drawer>
    </>
  );
};

export default GridItem;
