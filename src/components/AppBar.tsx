import MenuIcon from "@mui/icons-material/Menu";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { AppBar as MUIAppBar, IconButton, Toolbar, Badge } from "@mui/material";
import { Container } from "@mui/system";
import { useState } from "react";
import { useCart } from "../contexts/CartContext";
import AppBarDrawer from "./AppBarDrawer";

const AppBar = () => {
  const { cart } = useCart();

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  function toggleDrawer() {
    setIsDrawerOpen((prev) => !prev);
  }
  return (
    <MUIAppBar color="default" position="fixed">
      <Container maxWidth="lg">
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <AppBarDrawer isOpen={isDrawerOpen} toggleDrawer={toggleDrawer} />
          <IconButton onClick={toggleDrawer} size="large" edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
            <MenuIcon />
          </IconButton>
          <Badge badgeContent={cart.length} showZero color="primary">
            <ShoppingCartOutlinedIcon />
          </Badge>
        </Toolbar>
      </Container>
    </MUIAppBar>
  );
};

export default AppBar;
