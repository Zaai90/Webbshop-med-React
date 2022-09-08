import * as Icon from "@mui/icons-material/";
import { Badge, Box, Container, IconButton, Input } from "@mui/material";
import { useCart } from "../../contexts/CartContext";
import ShowOnScroll from "./ShowOnScroll";

interface Props {
  isLinkDrawerOpen: boolean;
  setIsLinkDrawerOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setIsCartDrawerOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const MiniAppBar = ({ isLinkDrawerOpen, setIsLinkDrawerOpen, setIsCartDrawerOpen }: Props) => {
  const { cart } = useCart();

  return (
    <Container maxWidth="lg" fixed>
      <Box sx={{ width: "100%", display: "flex", padding: ".3rem", justifyContent: "space-between" }}>
        <IconButton size="small" sx={{ color: "white" }} onClick={() => setIsLinkDrawerOpen((prev) => !prev)}>
          {isLinkDrawerOpen ? <Icon.KeyboardArrowUp /> : <Icon.KeyboardArrowDown />}
        </IconButton>
        <ShowOnScroll searchBar>
          <Input type="text" placeholder="Search..." sx={{ color: "white" }} />
        </ShowOnScroll>
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
