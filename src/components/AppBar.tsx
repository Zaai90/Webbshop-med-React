import MenuIcon from "@mui/icons-material/Menu";
import { AppBar as MUIAppBar, IconButton, Toolbar } from "@mui/material";
import { Container } from "@mui/system";
import { useState } from "react";
import AppBarDrawer from "./AppBarDrawer";

const AppBar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  function toggleDrawer() {
    setIsDrawerOpen((prev) => !prev);
  }
  return (
    <MUIAppBar color="default" position="fixed">
      <Container maxWidth="lg">
        <Toolbar>
          <AppBarDrawer isOpen={isDrawerOpen} toggleDrawer={toggleDrawer} />
          <IconButton onClick={toggleDrawer} size="large" edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </Container>
    </MUIAppBar>
  );
};

export default AppBar;
