import { Box, Typography } from "@mui/material";
import styled from "styled-components";
import { useCurrency } from "../../contexts/CurrencyContext";
import { Product } from "../../ProductData";

const Thumbnail = styled.img`
  height: 50px;
`;

interface Props {
  product: Product;
}

const SearchResultCard = ({ product }: Props) => {
  const { convertToCurrencyValue } = useCurrency();
  return (
    <Box width={"100%"} display={"flex"} gap={".5rem"} margin={".5rem 0"}>
      <Box display={"flex"}>
        <Thumbnail src={product.img[0]} alt={product.title} />
      </Box>
      <Box display={"flex"} flexDirection={"column"} justifyContent={"space-between"}>
        <Typography variant={"caption"} textTransform={"uppercase"} fontWeight={"700s"}>
          {product.title}
        </Typography>
        <Typography variant={"caption"}>{product.designer}</Typography>
        <Typography variant={"caption"}>{convertToCurrencyValue(product.price)}</Typography>
      </Box>
    </Box>
  );
};

export default SearchResultCard;
