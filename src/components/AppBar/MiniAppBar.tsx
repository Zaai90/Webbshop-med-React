import * as Icon from "@mui/icons-material/";
import { Badge, Box, Container, IconButton, useMediaQuery } from "@mui/material";
import { NavLink } from "react-router-dom";
import { useCart } from "../../contexts/CartContext";
import { useFavorites } from "../../contexts/FavoriteContext";
import theme from "../../utils/Theme";

interface Props {
  isLinkDrawerOpen: boolean;
  setIsLinkDrawerOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setIsCartDrawerOpen: React.Dispatch<React.SetStateAction<boolean>>;
  searchIsActive: React.Dispatch<React.SetStateAction<boolean>>;
}

const MiniAppBar = ({ isLinkDrawerOpen, setIsLinkDrawerOpen, setIsCartDrawerOpen, searchIsActive }: Props) => {
  const { cart } = useCart();
  const { favorites } = useFavorites();

  const tabletScreen = useMediaQuery(theme.breakpoints.down("md"));

  const scrollToTop = () => {
    searchIsActive(true);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <Container maxWidth="lg" fixed>
      <Box sx={{ width: "100%", display: "flex", padding: ".3rem", justifyContent: tabletScreen ? "space-between" : "flex-end" }}>
        <IconButton size="small" sx={{ color: "white" }} onClick={() => setIsLinkDrawerOpen((prev) => !prev)}>
          {isLinkDrawerOpen ? <Icon.KeyboardArrowUp /> : <Icon.KeyboardArrowDown />}
        </IconButton>
        <IconButton size="small" sx={{ color: "white" }} onClick={scrollToTop}>
          <Icon.Search />
        </IconButton>
        <NavLink to={"wishlist"}>
          <IconButton size="small" sx={{ color: "white" }}>
            <Badge color="secondary" variant={favorites.length !== 0 ? "dot" : undefined}>
              <Icon.FavoriteBorder />
            </Badge>
          </IconButton>
        </NavLink>
        <IconButton size="small" sx={{ color: "white" }} onClick={() => setIsCartDrawerOpen((prev) => !prev)}>
          <Badge color="success" variant={cart.length !== 0 ? "dot" : undefined}>
            <Icon.LocalMallOutlined />
          </Badge>
        </IconButton>
      </Box>
    </Container>
  );
};

export default MiniAppBar;
