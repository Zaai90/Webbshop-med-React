import MenuIcon from "@mui/icons-material/Menu";
import { AppBar as MUIAppBar, Button, IconButton, Toolbar } from "@mui/material";
import { Container } from "@mui/system";
import { NavLink } from "react-router-dom";

const AppBar = () => {
  return (
    <>
      <MUIAppBar color="default" position="fixed">
        <Container maxWidth="lg">
          <Toolbar>
            <IconButton size="large" edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
              <MenuIcon />
            </IconButton>
            <NavLink to="">
              <Button color="inherit">Home</Button>
            </NavLink>
            <NavLink to="store">
              <Button color="inherit">Store</Button>
            </NavLink>
            <NavLink to="checkout">
              <Button color="inherit">Checkout</Button>
            </NavLink>
            <NavLink to="admin">
              <Button color="inherit">Admin</Button>
            </NavLink>
          </Toolbar>
        </Container>
      </MUIAppBar>
    </>
  );
};

export default AppBar;
