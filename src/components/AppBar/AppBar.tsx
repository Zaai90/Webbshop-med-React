import * as Icon from "@mui/icons-material/";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import MenuIcon from "@mui/icons-material/Menu";
import { AppBar as MUIAppBar, Badge, Box, IconButton, Toolbar, useMediaQuery } from "@mui/material";
import { Container } from "@mui/system";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { useCart } from "../../contexts/CartContext";
import { useCurrency } from "../../contexts/CurrencyContext";
import { useFavorites } from "../../contexts/FavoriteContext";
import { useProducts } from "../../contexts/ProductContext";
import theme from "../../utils/Theme";
import CartDrawerContent from "../Drawers/CartDrawerContent";
import LinksDrawerContent from "../Drawers/LinksDrawerContent";
import LogoSvg from "../LogoSvg";
import AppBarDrawer from "./AppBarDrawer";
import AppBarLinks from "./AppBarLinks";
import MiniAppBar from "./MiniAppBar";
import Searchbar from "./Searchbar";
import ShowOnScroll from "./ShowOnScroll";

const CartWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.7rem;
`;

const Price = styled.div`
  font-size: 1rem;
`;

const AppBar = () => {
  const [isLinkDrawerOpen, setIsLinkDrawerOpen] = useState(false);
  const [isCartDrawerOpen, setIsCartDrawerOpen] = useState(false);
  const [searchIsActive, setSearchIsActive] = useState(false);

  const smScreen = useMediaQuery(theme.breakpoints.down("tablet"));
  const tabletScreen = useMediaQuery(theme.breakpoints.down("md"));
  const desktopScreen = useMediaQuery(theme.breakpoints.up("md"));

  const { changeCurrency, convertToCurrencyValue, currency } = useCurrency();

  //TODO add a currencySelector
  useEffect(() => {
    changeCurrency(currency);
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
      <MUIAppBar position="relative" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
        <Container maxWidth="lg" fixed>
          <Toolbar sx={{ color: "white", minHeight: smScreen ? "80" : "64" }} disableGutters>
            {/* Left side AppBar */}

            <NavLink to={""}>
              <LogoSvg backgroundColor="#42454A" forgroundColor="#FFF" small={88} large={120} />
            </NavLink>
            {desktopScreen ? (
              <AppBarLinks pages={["store", "checkout", "admin"]} />
            ) : (
              <IconButton onClick={toggleLinkDrawer} edge="start" aria-label="menu" sx={{ color: "white", marginRight: "auto", marginLeft: ".2rem" }}>
                <MenuIcon sx={{ fontSize: "2rem" }} />
              </IconButton>
            )}
            {/* Right side AppBar */}

            <Box>
              <IconButton sx={{ color: "white" }} onClick={() => setSearchIsActive((prev) => !prev)}>
                <Icon.Search sx={{ fontSize: "2rem" }} />
              </IconButton>
              <NavLink to={"wishlist"}>
                <IconButton sx={{ color: "white" }}>
                  <Badge badgeContent={favorites.length} color="secondary">
                    <FavoriteBorderIcon sx={{ fontSize: "2rem" }} />
                  </Badge>
                </IconButton>
              </NavLink>
              <IconButton onClick={toggleCartDrawer} size="large" edge="start" aria-label="cart" sx={{ color: "white" }}>
                {isCartDrawerOpen && smScreen ? (
                  <Icon.Close sx={{ fontSize: "2rem" }} />
                ) : (
                  <CartWrapper>
                    <Badge badgeContent={cartQty} showZero color="primary">
                      <Icon.LocalMallOutlined sx={{ marginRight: "0 !important", fontSize: "2rem" }} />
                    </Badge>
                    {!tabletScreen && <Price>{convertToCurrencyValue(totalAmount)}</Price>}
                  </CartWrapper>
                )}
              </IconButton>
            </Box>
          </Toolbar>
        </Container>
      </MUIAppBar>
      {searchIsActive && <Searchbar />}
      <ShowOnScroll>
        <Box width="100%" position="fixed" top={0} zIndex={1201} sx={{ backgroundColor: "#383838" }}>
          <MiniAppBar setIsCartDrawerOpen={setIsCartDrawerOpen} setIsLinkDrawerOpen={setIsLinkDrawerOpen} isLinkDrawerOpen={isLinkDrawerOpen} />
        </Box>
      </ShowOnScroll>
      {/* DRAWERS */}
      <AppBarDrawer anchor="left" isOpen={isLinkDrawerOpen} toggleDrawer={toggleLinkDrawer}>
        <LinksDrawerContent toggleDrawer={toggleLinkDrawer} />
      </AppBarDrawer>

      <AppBarDrawer anchor="right" isOpen={isCartDrawerOpen} toggleDrawer={toggleCartDrawer}>
        <CartDrawerContent toggleDrawer={toggleCartDrawer} />
      </AppBarDrawer>
    </>
  );
};

export default AppBar;
