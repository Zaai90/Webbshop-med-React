import * as Icon from "@mui/icons-material/";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import MenuIcon from "@mui/icons-material/Menu";
import { AppBar as MUIAppBar, Badge, Box, Button, IconButton, Slide, Toolbar, Typography, useMediaQuery, useScrollTrigger } from "@mui/material";
import { Container } from "@mui/system";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { useCart } from "../../contexts/CartContext";
import { Currency, useCurrency } from "../../contexts/CurrencyContext";
import { useFavorites } from "../../contexts/FavoriteContext";
import { useProducts } from "../../contexts/ProductContext";
import useDetectScroll from "../../hooks/useDetectScroll";
import theme from "../../utils/Theme";
import CartDrawerContent from "../Drawers/CartDrawerContent";
import LinksDrawerContent from "../Drawers/LinksDrawerContent";
import AppBarDrawer from "./AppBarDrawer";

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

interface Props {
  children: React.ReactElement;
}

function HideOnScroll(props: Props) {
  const { children } = props;
  const trigger = useScrollTrigger({ threshold: 200 });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

const AppBar = () => {
  const [isLinkDrawerOpen, setIsLinkDrawerOpen] = useState(false);
  const [isCartDrawerOpen, setIsCartDrawerOpen] = useState(false);

  const smScreen = useMediaQuery(theme.breakpoints.down("tablet"));
  const tabletScreen = useMediaQuery(theme.breakpoints.down("md"));
  const desktopScreen = useMediaQuery(theme.breakpoints.up("md"));

  const [scrolling, scrollTop] = useDetectScroll();

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
      <HideOnScroll>
        <MUIAppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
          <Container maxWidth="lg" fixed>
            <Toolbar sx={{ color: "white", minHeight: smScreen ? "80" : "64" }} disableGutters>
              {/* break out components */}
              <NavLink to={""}>
                <Box sx={{ width: smScreen ? "88px" : "120px" }}>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120">
                    <g fill="none" fillRule="evenodd">
                      <path fill="#42454A" d="M0 0h120v120H0z"></path>
                      <path
                        fill="#FFF"
                        fillRule="nonzero"
                        d="M95.571 102.685a.6.6 0 0 1-.689.645h-.835v-1.276h.806c.508 0 .718.239.718.632m.485 1.949a.126.126 0 0 0-.037-.07c-.253-.349-.639-.863-.744-1.024a.892.892 0 0 0 .592-.847.922.922 0 0 0-1-.929H93.83c-.022 0-.072-.013-.072.088v2.777c0 .1 0 .086.072.086h.142c.073 0 .08-.015.08-.086v-1.017h.907s.447.615.746 1.021c.05.066.037.081.136.081h.147c.044 0 .072-.015.072-.081m1.275-1.4a2.55 2.55 0 1 1-5.1-.002 2.55 2.55 0 0 1 5.1.002m.292 0a2.841 2.841 0 1 0-2.848 2.842 2.846 2.846 0 0 0 2.843-2.84m-12.418-9.423h-2.192v3.222h2.192a1.616 1.616 0 1 0 0-3.222m2.418 6.308 3.355 4.968v.715h-4.072l-3.267-5.3h-.626v5.3h-3.8v-15.66h6.086c6.22 0 7.137 7.673 2.327 9.977m-15.708-.29h6.328v-3.714h-6.33v-2.282h6.464v-3.691H68.063v15.66H78.4v-3.69h-6.487l.003-2.283Zm-16.988-6.107h4.23v12.08h3.825v-12.08h4.207v-3.58H54.928v3.58Zm-4.61 4.252-5.415-7.83h-2.952v15.66h3.8v-7.63l5.348 7.629h3V90.144h-3.782v7.832Zm-15.664 1.856h6.333v-3.715h-6.333v-2.282h6.467v-3.691H30.805v15.66h10.338v-3.69h-6.489v-2.282Zm-16.85-1.834a4.289 4.289 0 0 1 8.412-1.342h3.871a7.814 7.814 0 0 0-7.987-6.758 8.013 8.013 0 0 0-8.1 8.1 7.957 7.957 0 0 0 8.1 8.032 7.849 7.849 0 0 0 8.01-6.8h-3.87a4.289 4.289 0 0 1-8.436-1.231m88.467-27.245h-.872c-.195 0-.39.048-.39.391v11.821c-1.645-2.007-8.822-10.755-10.127-12.179a.613.613 0 0 0-.469-.212.371.371 0 0 0-.39.369v14.945c0 .192.041.415.368.415h.916c.3 0 .346-.188.346-.393v-11.76c1.671 2.012 9.08 10.925 10.065 12.125a.58.58 0 0 0 .482.251.388.388 0 0 0 .438-.391V71.213c0-.171 0-.459-.37-.459m-16.21 7.822a6.479 6.479 0 0 0-6.456-6.636 6.479 6.479 0 0 0-6.457 6.636 6.545 6.545 0 0 0 6.457 6.61 6.544 6.544 0 0 0 6.456-6.61m1.676 0a8.033 8.033 0 0 1-8.132 8.106 8.033 8.033 0 0 1-8.13-8.106 8.046 8.046 0 0 1 8.131-8.132 8.046 8.046 0 0 1 8.131 8.132m-20.43-7.363v14.7c0 .344.2.393.413.393h.806c.253 0 .413-.066.413-.393v-14.7c0-.136 0-.459-.368-.459h-.828c-.32 0-.435.12-.435.459m-3.768-.459h-.782c-.347 0-.413.185-.413.5v5.852h-9.355v-5.874c0-.3-.064-.481-.39-.481h-.806c-.32 0-.435.126-.435.481v14.635c0 .338.092.437.413.437h.8c.292 0 .413-.117.413-.393v-7.26h9.355v7.26c0 .344.2.393.413.393h.76c.316 0 .457-.038.457-.393V71.256c0-.346-.063-.5-.435-.5m-25.994 4.016c0 2.845 2.47 3.795 4.891 4.346l.4.086c.151.032.341.069.447.092 2.541.548 4.013 1.235 4.013 3.128 0 2.3-2.258 2.785-4.152 2.785-2.218 0-3.9-1.007-4.507-2.719a.293.293 0 0 0-.277-.252.477.477 0 0 0-.2.053l-.853.3a.36.36 0 0 0-.245.185c-.057.126-.009.268.067.456.863 2.195 3.09 3.452 6.1 3.452 3.642 0 5.648-1.607 5.648-4.53s-2.746-3.889-5.14-4.39a41.12 41.12 0 0 1-.849-.179c-2.639-.558-3.766-1.446-3.766-2.971 0-1.738 1.388-2.7 3.906-2.7a4.016 4.016 0 0 1 4.164 2.744.318.318 0 0 0 .29.234.422.422 0 0 0 .207-.063l.674-.292c.35-.154.311-.368.236-.595-.8-2.226-2.812-3.5-5.527-3.5-3.414 0-5.536 1.659-5.536 4.328m-5.024 6.434c-.485-1.03-2.253-4.778-3.452-7.269l-.044-.1c-.076-.158-.189-.4-.28-.583a20.97 20.97 0 0 0-.319.652c-1.178 2.529-2.974 6.265-3.47 7.3h7.565Zm-11.523 4.952a.46.46 0 0 1 .053-.441c.87-1.811 5.975-12.328 7.361-15.08a.373.373 0 0 1 .35-.261c.152 0 .288.097.337.242 1.461 2.947 6.527 13.305 7.395 15.149a.41.41 0 0 1 .025.391.368.368 0 0 1-.33.148h-.963c-.23 0-.3-.089-.41-.275l-1.61-3.373h-8.913l-1.56 3.27c-.132.239-.226.378-.55.378h-.783a.433.433 0 0 1-.4-.148m.438-6.911v-.669c0-.381-.259-.413-.523-.413h-7.352v-5.908h8.224c.391 0 .391-.311.391-.459v-.626c0-.287-.127-.415-.413-.415h-9.487c-.149 0-.346.246-.346.391v14.656c-.006.107 0 .214.018.319a.25.25 0 0 0 .264.183l-.006-.192h.006l.042.19h.963a.348.348 0 0 0 .262-.086.43.43 0 0 0 .084-.34v-6.22h7.352c.17 0 .523 0 .523-.413M86.01 59.976h7.093v-2.283H86.01v-4.407h7.25v-2.261h-9.53v15.641h9.552v-2.261H86.01v-4.429Zm-3.338 4.429h-7.358v-13.4h-2.259v15.661h9.617v-2.261Zm-11.5.088h-2.236V53.176h2.242v-2.147h-6.743v2.147h2.237v11.322h-2.237v2.173h6.743l-.006-2.178Zm-15 2.173h2.261V53.15h4.721v-2.147H51.436v2.147h4.744l-.009 13.516Zm-16.289 0 4.25-6.154 4.273 6.154h2.766L45.51 58.7l5.662-7.7h-2.753l-4.274 5.749L39.895 51H37.12l5.66 7.7-5.66 7.966h2.762Zm-3.136-2.261h-7.272v-4.429h7.093v-2.283h-7.093v-4.407h7.25v-2.261h-9.53v15.641h9.552v-2.261Zm-17.5-11.256h-4.743v-2.147h11.725v2.147h-4.72v13.517h-2.262V53.149Z"
                      ></path>
                    </g>
                  </svg>
                </Box>
              </NavLink>
              {desktopScreen ? (
                <HeaderLinks>
                  <NavLink to="store">
                    <Button size="large">
                      <Typography variant="h6" color={(theme) => theme.palette.common.white}>
                        Store
                      </Typography>
                    </Button>
                  </NavLink>

                  <NavLink to="checkout">
                    <Button size="large">
                      <Typography variant="h6" color={(theme) => theme.palette.common.white}>
                        Checkout
                      </Typography>
                    </Button>
                  </NavLink>

                  <NavLink to="admin">
                    <Button size="large">
                      <Typography variant="h6" color={(theme) => theme.palette.common.white}>
                        Admin
                      </Typography>
                    </Button>
                  </NavLink>
                </HeaderLinks>
              ) : (
                <IconButton
                  onClick={toggleLinkDrawer}
                  edge="start"
                  aria-label="menu"
                  sx={{ color: "white", marginRight: "auto", marginLeft: ".2rem" }}
                >
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
      </HideOnScroll>
    </>
  );
};

export default AppBar;
