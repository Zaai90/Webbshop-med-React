import * as Icon from "@mui/icons-material/";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import MenuIcon from "@mui/icons-material/Menu";
import { AppBar as MUIAppBar, Badge, Box, IconButton, Toolbar, useMediaQuery } from "@mui/material";
import { Container } from "@mui/system";
import { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { useCart } from "../../contexts/CartContext";
import { useCurrency } from "../../contexts/CurrencyContext";
import { useFavorites } from "../../contexts/FavoriteContext";
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
  const [scrollY, setScrollY] = useState(0);

  const smScreen = useMediaQuery(theme.breakpoints.down("tablet"));
  const tabletScreen = useMediaQuery(theme.breakpoints.down("md"));
  const desktopScreen = useMediaQuery(theme.breakpoints.up("md"));

  const { changeCurrency, convertToCurrencyValue, currency } = useCurrency();

  const handleScroll = () => {
    const position = window.scrollY;
    setScrollY(position);

    if (scrollY > 100 && searchIsActive) setSearchIsActive(false);
  };

  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollY]);

  //TODO add a currencySelector
  useEffect(() => {
    changeCurrency(currency);
  }, []);

  const { cartQty, totalAmount } = useCart();
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
      <MUIAppBar position="relative" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1, top: 0, width: "100vw" }}>
        <Container maxWidth="lg" fixed>
          <div ref={containerRef}>
            <Toolbar sx={{ color: theme.palette.common.white, minHeight: smScreen ? "80" : "64" }} disableGutters>
              {/* Left side AppBar */}

              <NavLink to={""}>
                <LogoSvg backgroundColor="#42454A" forgroundColor={theme.palette.common.white} small={88} large={120} />
              </NavLink>
              {desktopScreen ? (
                <AppBarLinks pages={["store", "admin"]} />
              ) : (
                <IconButton
                  onClick={toggleLinkDrawer}
                  edge="start"
                  aria-label="menu"
                  sx={{ color: "inherit", marginRight: "auto", marginLeft: ".2rem" }}
                >
                  <MenuIcon sx={{ fontSize: "2rem" }} />
                </IconButton>
              )}
              {/* Right side AppBar */}

              <Box>
                <IconButton
                  sx={{ color: "inherit" }}
                  onClick={() => {
                    setSearchIsActive((prev) => !prev);
                    if (isCartDrawerOpen) setIsCartDrawerOpen(false);
                  }}
                >
                  <Icon.Search sx={{ fontSize: "2rem" }} />
                </IconButton>
                <NavLink
                  style={{ color: "inherit" }}
                  to={"wishlist"}
                  onClick={() => {
                    if (isCartDrawerOpen) setIsCartDrawerOpen(false);
                  }}
                >
                  <IconButton sx={{ color: "inherit" }}>
                    <Badge badgeContent={favorites.length} color="secondary">
                      <FavoriteBorderIcon sx={{ fontSize: "2rem" }} />
                    </Badge>
                  </IconButton>
                </NavLink>
                <IconButton
                  onClick={toggleCartDrawer}
                  size="large"
                  edge="start"
                  aria-label="cart"
                  sx={{ color: "inherit", borderRadius: tabletScreen ? "50%" : "10px" }}
                >
                  {isCartDrawerOpen && smScreen ? (
                    <Icon.Close sx={{ fontSize: "2rem" }} />
                  ) : (
                    <CartWrapper>
                      <Badge badgeContent={cartQty} showZero color="success">
                        <Icon.LocalMallOutlined sx={{ marginRight: "0 !important", fontSize: "2rem" }} />
                      </Badge>
                      {!tabletScreen && <Price>{convertToCurrencyValue(totalAmount)}</Price>}
                    </CartWrapper>
                  )}
                </IconButton>
              </Box>
            </Toolbar>
          </div>
        </Container>
        {searchIsActive && (
          <Searchbar
            onClickOutside={() => setSearchIsActive(false)}
            searchIsActive={searchIsActive}
            containerRef={containerRef}
            toggleSearch={setSearchIsActive}
          />
        )}
      </MUIAppBar>
      <ShowOnScroll>
        <Box width="100%" position="fixed" top={0} zIndex={1201} sx={{ backgroundColor: "#383838", width: "100vw" }}>
          <MiniAppBar
            searchIsActive={setSearchIsActive}
            setIsCartDrawerOpen={setIsCartDrawerOpen}
            setIsLinkDrawerOpen={setIsLinkDrawerOpen}
            isLinkDrawerOpen={isLinkDrawerOpen}
          />
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
