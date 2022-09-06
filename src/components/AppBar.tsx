import * as Icon from "@mui/icons-material/";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import MenuIcon from "@mui/icons-material/Menu";
import { AppBar as MUIAppBar, Badge, IconButton, Toolbar, useMediaQuery } from "@mui/material";
import { Container } from "@mui/system";
import { useEffect, useState } from "react";
// import { useMediaQuery } from "react-responsive";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { useCart } from "../contexts/CartContext";
import { Currency, useCurrency } from "../contexts/CurrencyContext";
import { useFavorites } from "../contexts/FavoriteContext";
import { useProducts } from "../contexts/ProductContext";
import { theme } from "../utils/Theme";
import AppBarDrawer from "./AppBarDrawer";
import CartDrawerContent from "./CartDrawerContent";
import LinksDrawerContent from "./LinksDrawerContent";

const CartWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.7rem;
`;

const CartAndFavoritesDiv = styled.div``;

const Price = styled.div`
  font-size: 1rem;
`;

const IconButtonStyled = styled(IconButton)`
  border-radius: 10px !important;

  @media (max-width: 900px) {
    border-radius: 50% !important;
  }
`;
// const IconButtonStyled = styled(IconButton)``;

const AppBar = () => {
  const [isLinkDrawerOpen, setIsLinkDrawerOpen] = useState(false);
  const [isCartDrawerOpen, setIsCartDrawerOpen] = useState(false);
  // TODO: Fix global media query consts
  const smallScreen = useMediaQuery(theme.breakpoints.down("md"));
  const isPhoneScreen = useMediaQuery(theme.breakpoints.down("tablet"));
  // const smallScreen = useMediaQuery({ query: "(max-width:900px)" });
  // const isPhoneScreen = useMediaQuery({ query: "(max-width:768px)" });

  const { changeCurrency } = useCurrency();

  //TODO add a currencySelector
  useEffect(() => {
    changeCurrency(Currency.SEK);
  }, []);

  const { products } = useProducts();

  const { cart, cartQty, totalAmount } = useCart();
  const { favorites } = useFavorites();

  function toggleLinkDrawer() {
    if (isCartDrawerOpen) setIsCartDrawerOpen(false);
    setIsLinkDrawerOpen((prev) => !prev);
  }

  function toggleCartDrawer() {
    if (isLinkDrawerOpen) setIsLinkDrawerOpen(false);
    setIsCartDrawerOpen((prev) => !prev);
  }

  return (
    <>
      <MUIAppBar color="default" position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
        <Container maxWidth="lg" fixed>
          <Toolbar sx={{ justifyContent: "space-between" }}>
            {/* Link drawer */}
            <AppBarDrawer anchor="left" isOpen={isLinkDrawerOpen} toggleDrawer={toggleLinkDrawer}>
              <LinksDrawerContent toggleDrawer={toggleLinkDrawer} />
            </AppBarDrawer>
            {/* Cart drawer */}
            <AppBarDrawer anchor="right" isOpen={isCartDrawerOpen} toggleDrawer={toggleCartDrawer}>
              <CartDrawerContent toggleDrawer={toggleCartDrawer} />
            </AppBarDrawer>
            <IconButton onClick={toggleLinkDrawer} size="large" edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
              <MenuIcon />
            </IconButton>

            <CartAndFavoritesDiv>
              <NavLink to={"favorites"}>
                <IconButtonStyled color="secondary">
                  <Badge badgeContent={favorites.length} color="primary">
                    <FavoriteBorderIcon />
                  </Badge>
                </IconButtonStyled>
              </NavLink>

              <IconButtonStyled sx={{ marginLeft: "1rem" }} onClick={toggleCartDrawer} size="large" edge="start" color="inherit" aria-label="cart">
                {isCartDrawerOpen && isPhoneScreen ? (
                  <Icon.Close />
                ) : (
                  <CartWrapper>
                    <Badge badgeContent={cartQty} showZero color="primary">
                      <Icon.LocalMallOutlined sx={{ marginRight: "0 !important" }} />
                    </Badge>
                    {!smallScreen && <Price>{totalAmount} SEK</Price>}
                  </CartWrapper>
                )}
              </IconButtonStyled>
            </CartAndFavoritesDiv>
          </Toolbar>
        </Container>
      </MUIAppBar>
    </>
  );
};

export default AppBar;
