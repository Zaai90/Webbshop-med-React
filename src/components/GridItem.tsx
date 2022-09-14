import * as Icon from "@mui/icons-material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { Box, Card, Drawer, Fade, Modal, SelectChangeEvent, Tooltip, useMediaQuery } from "@mui/material";
import { useSnackbar } from "notistack";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { useCart } from "../contexts/CartContext";
import { useCurrency } from "../contexts/CurrencyContext";
import { useFavorites } from "../contexts/FavoriteContext";
import Product from "../models/Product";
import theme from "../utils/Theme";
import QuickViewDrawer from "./Drawers/QuickViewDrawer";
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
  bottom: 75px;
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
  const { isFavorite, toggleFavorite } = useFavorites();
  const { addToCart } = useCart();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [size, setSize] = useState("");
  const [isQuickViewDrawerOpen, setIsQuickViewDrawerOpen] = useState(false);

  const touchScreen = useMediaQuery(theme.breakpoints.down("md"));

  const { convertToCurrencyValue } = useCurrency();

  const handleChange = (event: SelectChangeEvent) => {
    setSize(event.target.value as string);
  };

  function handleQuickViewClick() {
    setIsModalOpen(true);
  }

  function handleAdd() {
    addToCart(product, size, 1);
    console.log(size);

    // Styled toast
    enqueueSnackbar(<AddProductSnackbar product={product} />);
  }

  return (
    <>
      <CardStyled>
        <FavoriteButtonStyled onClick={() => toggleFavorite(product)}>
          <Tooltip
            TransitionComponent={Fade}
            TransitionProps={{ timeout: 500 }}
            title={isFavorite(product) ? "Remove from wishlist" : "Add to wishlist"}
            placement="right"
            arrow
          >
            {isFavorite(product) ? <FavoriteIcon color={"secondary"} /> : <FavoriteBorderIcon color={"disabled"} />}
          </Tooltip>
        </FavoriteButtonStyled>
        {touchScreen && (
          <Tooltip TransitionComponent={Fade} TransitionProps={{ timeout: 500 }} title={"Quick buy"} placement="left" arrow>
            <QuickViewButtonStyled onClick={() => setIsQuickViewDrawerOpen(true)}>
              <Box
                sx={{
                  background: "#E2DDD8",
                  width: "35px",
                  height: "35px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: "50%",
                }}
              >
                <Icon.LocalMallOutlined />
              </Box>
            </QuickViewButtonStyled>
          </Tooltip>
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
            Quick buy
          </QuickView>
        )}
        <CardBottomStyled>
          <div>
            <h5>{product.title}</h5>
            <p>{product.designer}</p>
            <p>{convertToCurrencyValue(product.price)}</p>
          </div>
        </CardBottomStyled>
      </CardStyled>
      <Modal open={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <QuickViewModal sizeState={size} product={product} handleChange={handleChange} toggleModal={setIsModalOpen} />
      </Modal>
      <Drawer anchor="bottom" open={isQuickViewDrawerOpen} onClose={() => setIsQuickViewDrawerOpen(false)}>
        <QuickViewDrawer
          sizeState={size}
          handleChange={handleChange}
          product={product}
          toggleDrawer={setIsQuickViewDrawerOpen}
          handleAdd={handleAdd}
        />
      </Drawer>
    </>
  );
};

export default GridItem;
