import { Box, Typography, useMediaQuery } from "@mui/material";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { useProducts } from "../../contexts/ProductContext";
import theme from "../../utils/Theme";
import SearchResultCard from "./SearchResultCard";

const NavLinkStyled = styled(NavLink)`
  text-decoration: none;
  color: black;

  &:hover {
    & div {
      background-color: #dbdbdb;
    }
  }
`;

interface Props {
  searchString: string;
  toggleSearch: React.Dispatch<React.SetStateAction<boolean>>;
  headerWidth: number;
}

const SearchResult = ({ searchString, toggleSearch, headerWidth }: Props) => {
  const { products } = useProducts();
  const smScreen = useMediaQuery(theme.breakpoints.down("tablet"));

  if (searchString === "") return null;

  function getByTitle() {
    return products.filter((product) => product.title.toLowerCase().includes(searchString.toLowerCase()));
  }

  function getByDesigner() {
    return products.filter((product) => product.designer.toLowerCase().startsWith(searchString.toLowerCase()));
  }

  const productBoxes = (
    <Box sx={{ width: `${headerWidth}px` }}>
      <Box>
        {getByTitle().length > 0 && <Typography variant={smScreen ? "body1" : "h6"}>By product name:</Typography>}
        {getByTitle().map((product) => (
          <NavLinkStyled key={product.id} to={`../product/${product.id}`} onClick={() => toggleSearch((prev) => !prev)}>
            <SearchResultCard product={product} />
          </NavLinkStyled>
        ))}
      </Box>
      <Box>
        {getByDesigner().length > 0 && <Typography variant={smScreen ? "body1" : "h6"}>By designer:</Typography>}
        {getByDesigner().map((product) => (
          <NavLinkStyled key={product.id} to={`../product/${product.id}`} onClick={() => toggleSearch((prev) => !prev)}>
            <SearchResultCard product={product} />
          </NavLinkStyled>
        ))}
      </Box>
    </Box>
  );

  return <>{productBoxes}</>;
};

export default SearchResult;
