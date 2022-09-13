import * as Icon from "@mui/icons-material";
import { Box, Container, Fade, IconButton, Tooltip, Typography } from "@mui/material";
import SimpleImageSlider from "react-simple-image-slider";
import styled from "styled-components";
import { useCurrency } from "../../contexts/CurrencyContext";
import { useFavorites } from "../../contexts/FavoriteContext";
import Product from "../../models/Product";

const SimpleImageSliderContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 0.5rem;
  min-width: 150px !important;
  min-height: 150px !important;
  position: relative !important;
  .rsis-container div {
    background-position: center center !important;
    background-size: contain !important;
  }
  & button {
    filter: invert(100%);
    box-shadow: none !important;
  }
`;

const DescriptionBox = styled(Typography)`
  display: -webkit-box;
  overflow: hidden;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
`;

interface Props {
  product: Product;
  toggleDrawer: React.Dispatch<React.SetStateAction<boolean>>;
  handleAdd: () => void;
}

const QuickViewDrawer = ({ product, toggleDrawer, handleAdd }: Props) => {
  const { convertToCurrencyValue } = useCurrency();

  const { isFavorite, toggleFavorite } = useFavorites();

  return (
    <Container maxWidth="lg" fixed sx={{ display: "flex", position: "relative" }}>
      <IconButton sx={{ position: "absolute", top: 0, right: "1rem" }} onClick={() => toggleDrawer((prev) => !prev)}>
        <Icon.Close />
      </IconButton>
      <SimpleImageSliderContainer>
        <SimpleImageSlider width={"80%"} height={"80%"} navSize={30} images={product.img} showBullets={true} showNavs={true} navMargin={-10} />
      </SimpleImageSliderContainer>
      <Box sx={{ display: "flex", flexDirection: "column", padding: ".5rem", flexGrow: "1" }}>
        <Typography color={"rgb(159, 159, 159)"}>{product.designer}</Typography>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: ".5rem" }}>
          <Typography fontSize={".8rem"}>{product.title}</Typography>
          <Typography fontSize={".8rem"} fontWeight="700">
            {convertToCurrencyValue(product.price)}
          </Typography>
        </div>
        <DescriptionBox fontSize={".8rem"}>{product.description}</DescriptionBox>
        <Box sx={{ marginTop: ".5rem", display: "flex", flexDirection: "row-reverse" }}>
          <IconButton onClick={() => handleAdd()}>
            <Tooltip TransitionComponent={Fade} TransitionProps={{ timeout: 500 }} title={"Add to cart"} placement="left" arrow>
              <Icon.AddShoppingCart />
            </Tooltip>
          </IconButton>
          <IconButton onClick={() => toggleFavorite(product)}>
            <Tooltip
              TransitionComponent={Fade}
              TransitionProps={{ timeout: 500 }}
              title={isFavorite(product) ? "Remove from wishlist" : "Add to wishlist"}
              placement="left"
              arrow
            >
              {isFavorite(product) ? <Icon.Favorite color={"secondary"} /> : <Icon.FavoriteBorder color={"disabled"} />}
            </Tooltip>
          </IconButton>
        </Box>
      </Box>
    </Container>
  );
};

export default QuickViewDrawer;
