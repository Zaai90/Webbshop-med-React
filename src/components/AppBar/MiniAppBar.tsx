import * as Icon from "@mui/icons-material/";
import { Badge, Box, Container, IconButton } from "@mui/material";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useCart } from "../../contexts/CartContext";
import { useFavorites } from "../../contexts/FavoriteContext";
import Searchbar from "./Searchbar";
import ShowOnScroll from "./ShowOnScroll";

interface Props {
  isLinkDrawerOpen: boolean;
  setIsLinkDrawerOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setIsCartDrawerOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const MiniAppBar = ({ isLinkDrawerOpen, setIsLinkDrawerOpen, setIsCartDrawerOpen }: Props) => {
  const [searchIsActive, setSearchIsActive] = useState(false);
  const { cart } = useCart();
  const { favorites } = useFavorites();

  return (
    <Container maxWidth="lg" fixed>
      <Box sx={{ width: "100%", display: "flex", padding: ".3rem", justifyContent: "space-between" }}>
        <IconButton size="small" sx={{ color: "white" }} onClick={() => setIsLinkDrawerOpen((prev) => !prev)}>
          {isLinkDrawerOpen ? <Icon.KeyboardArrowUp /> : <Icon.KeyboardArrowDown />}
        </IconButton>
        <ShowOnScroll searchBar>
          <Searchbar position="miniAppBar" toggleSearch={setSearchIsActive} />
          {/* <Input type="text" placeholder="Search..." sx={{ color: "white" }} /> */}
        </ShowOnScroll>
        <NavLink to={"wishlist"}>
          <IconButton size="small" sx={{ color: "white" }}>
            <Badge color="secondary" variant={favorites.length !== 0 ? "dot" : undefined}>
              <Icon.FavoriteBorder />
            </Badge>
          </IconButton>
        </NavLink>
        <IconButton size="small" sx={{ color: "white" }} onClick={() => setIsCartDrawerOpen((prev) => !prev)}>
          <Badge color="primary" variant={cart.length !== 0 ? "dot" : undefined}>
            <Icon.LocalMallOutlined />
          </Badge>
        </IconButton>
      </Box>
    </Container>
  );
};

export default MiniAppBar;
