import { Box, Typography, useMediaQuery } from "@mui/material";
import styled from "styled-components";
import { useCurrency } from "../../contexts/CurrencyContext";
import Product from "../../models/Product";
import theme from "../../utils/Theme";

const Thumbnail = styled.img`
  height: 50px;

  @media (min-width: ${theme.breakpoints.values.tablet}px) {
    height: 100px;
  }
`;

interface Props {
  product: Product;
}

const SearchResultCard = ({ product }: Props) => {
  const { convertToCurrencyValue } = useCurrency();
  const smScreen = useMediaQuery(theme.breakpoints.down("tablet"));

  return (
    <Box width={"100%"} display={"flex"} gap={".5rem"} margin={".5rem 0"}>
      <Box display={"flex"} flex={"0 !important"}>
        <Thumbnail src={product.img[0]} alt={product.title} />
      </Box>
      <Box display={"flex"} flexDirection={"column"} justifyContent={smScreen ? "space-between" : "center"}>
        <Typography variant={smScreen ? "caption" : "body1"} textTransform={"uppercase"} fontWeight={"700s"}>
          {product.title}
        </Typography>
        <Typography variant={smScreen ? "caption" : "body1"}>{product.designer}</Typography>
        <Typography variant={smScreen ? "caption" : "body1"}>{convertToCurrencyValue(product.price)}</Typography>
      </Box>
    </Box>
  );
};

export default SearchResultCard;
