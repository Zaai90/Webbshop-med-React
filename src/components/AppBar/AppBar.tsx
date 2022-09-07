import * as Icon from "@mui/icons-material/";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import MenuIcon from "@mui/icons-material/Menu";
import { AppBar as MUIAppBar, Badge, Box, IconButton, Toolbar, useMediaQuery } from "@mui/material";
import { Container } from "@mui/system";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { useCart } from "../../contexts/CartContext";
import { Currency, useCurrency } from "../../contexts/CurrencyContext";
import { useFavorites } from "../../contexts/FavoriteContext";
import { useProducts } from "../../contexts/ProductContext";
import theme from "../../utils/Theme";
import CartDrawerContent from "../Drawers/CartDrawerContent";
import LinksDrawerContent from "../Drawers/LinksDrawerContent";
import LogoSvg from "../LogoSvg";
import AppBarDrawer from "./AppBarDrawer";
import AppBarLinks from "./AppBarLinks";

const CartWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.7rem;
`;

const HeaderLinks = styled(Box)`
  display: flex;
  font-size: 18px;
  line-height: normal;
  margin-right: auto;
  margin-left: 2rem;

  a {
    padding: 15px;
    text-decoration: none;
    text-transform: uppercase;
    color: #ffffff;
    transition: 0.5s ease all;
  }

  a:hover {
    color: #8d8d8d;
  }
`;

const CartAndFavoritesDiv = styled.div`
  /* gap: 0.5rem; */
`;

const Price = styled.div`
  font-size: 1rem;
`;

const AppBar = () => {
  const [isLinkDrawerOpen, setIsLinkDrawerOpen] = useState(false);
  const [isCartDrawerOpen, setIsCartDrawerOpen] = useState(false);

  const smScreen = useMediaQuery(theme.breakpoints.down("tablet"));
  const tabletScreen = useMediaQuery(theme.breakpoints.down("md"));
  const desktopScreen = useMediaQuery(theme.breakpoints.up("md"));

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
      <MUIAppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
        <Container maxWidth="lg" fixed>
          <Toolbar sx={{ color: "white", minHeight: smScreen ? "80" : "64" }} disableGutters>
            {/* break out components */}
            <NavLink to={""}>
              <LogoSvg backgroundColor="#42454A" forgroundColor="#FFF" small={88} large={120} />
            </NavLink>
            {desktopScreen ? (
              <AppBarLinks pages={["store", "checkout", "admin"]} />
            ) : (
              // <HeaderLinks>
              //   <NavLink to="store">
              //     <Button size="large">
              //       <Typography variant="h6" color={(theme) => theme.palette.common.white}>
              //         Store
              //       </Typography>
              //     </Button>
              //   </NavLink>

              //   <NavLink to="checkout">
              //     <Button size="large">
              //       <Typography variant="h6" color={(theme) => theme.palette.common.white}>
              //         Checkout
              //       </Typography>
              //     </Button>
              //   </NavLink>

              //   <NavLink to="admin">
              //     <Button size="large">
              //       <Typography variant="h6" color={(theme) => theme.palette.common.white}>
              //         Admin
              //       </Typography>
              //     </Button>
              //   </NavLink>
              // </HeaderLinks>
              <IconButton onClick={toggleLinkDrawer} edge="start" aria-label="menu" sx={{ color: "white", marginRight: "auto", marginLeft: ".2rem" }}>
                <MenuIcon sx={{ fontSize: "2rem" }} />
              </IconButton>
            )}

            <Box>
              <NavLink to={"favorites"}>
                <IconButton sx={{ color: "white", marginRight: ".5rem" }}>
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
                    {!tabletScreen && <Price>{totalAmount} SEK</Price>}
                  </CartWrapper>
                )}
              </IconButton>
            </Box>
            {/* Link drawer */}
            <AppBarDrawer anchor="left" isOpen={isLinkDrawerOpen} toggleDrawer={toggleLinkDrawer}>
              <LinksDrawerContent toggleDrawer={toggleLinkDrawer} />
            </AppBarDrawer>
            {/* Cart drawer */}
            <AppBarDrawer anchor="right" isOpen={isCartDrawerOpen} toggleDrawer={toggleCartDrawer}>
              <CartDrawerContent toggleDrawer={toggleCartDrawer} />
            </AppBarDrawer>
          </Toolbar>
        </Container>
      </MUIAppBar>
    </>
  );
};

export default AppBar;
