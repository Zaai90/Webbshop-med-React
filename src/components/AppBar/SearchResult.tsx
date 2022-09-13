import { Box, Typography } from "@mui/material";
import { useProducts } from "../../contexts/ProductContext";

interface Props {
  searchString: string;
}

const SearchResult = ({ searchString }: Props) => {
  const { products } = useProducts();

  if (searchString === "") return null;

  const productBoxes = (
    <Box>
      <Box>
        Products:
        {products
          .filter((product) => product.title.toLowerCase().includes(searchString.toLowerCase()))
          .map((product) => (
            <Typography key={product.id}>{product.title}</Typography>
          ))}
      </Box>
      <Box>
        By designer:
        {products
          .filter((product) => product.designer.toLowerCase().includes(searchString.toLowerCase()))
          .map((product) => (
            <Typography key={product.id}>{product.designer}</Typography>
          ))}
      </Box>
    </Box>
  );

  return <>{productBoxes}</>;
};

export default SearchResult;
