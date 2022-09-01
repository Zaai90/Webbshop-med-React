import MenuIcon from "@mui/icons-material/Menu";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { AppBar as MUIAppBar, IconButton, Toolbar, Badge } from "@mui/material";
import { Container } from "@mui/system";
import { useState } from "react";
import { useCart } from "../contexts/CartContext";
import AppBarDrawer from "./AppBarDrawer";
import CartDrawerContent from "./CartDrawerContent";
import LinksDrawerContent from "./LinksDrawerContent";

const AppBar = () => {
  const [isLinkDrawerOpen, setIsLinkDrawerOpen] = useState(false);
  const [isCartDrawerOpen, setIsCartDrawerOpen] = useState(false);

  const { cart } = useCart();

  function toggleLinkDrawer() {
    setIsLinkDrawerOpen((prev) => !prev);
  }

  function toggleCartDrawer() {
    setIsCartDrawerOpen((prev) => !prev);
  }

  return (
    <MUIAppBar color="default" position="fixed">
      <Container maxWidth="lg">
        <Toolbar sx={{ justifyContent: "space-between" }}>
          {/* Link drawer */}
          <AppBarDrawer anchor="left" isOpen={isLinkDrawerOpen} toggleDrawer={toggleLinkDrawer}>
            <LinksDrawerContent toggleDrawer={toggleLinkDrawer} />
          </AppBarDrawer>

          {/* Cart drawer */}
          <AppBarDrawer anchor="top" isOpen={isCartDrawerOpen} toggleDrawer={toggleCartDrawer}>
            <CartDrawerContent />
          </AppBarDrawer>

          <IconButton onClick={toggleLinkDrawer} size="large" edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
            <MenuIcon />
          </IconButton>

          <IconButton onClick={toggleCartDrawer} size="large" edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
            <Badge badgeContent={cart.length} showZero color="primary">
              <ShoppingCartOutlinedIcon />
            </Badge>
          </IconButton>
        </Toolbar>
      </Container>
    </MUIAppBar>
  );
};

export default AppBar;
