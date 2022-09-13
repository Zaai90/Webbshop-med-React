import { Box, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { useProducts } from "../../contexts/ProductContext";
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
}

const SearchResult = ({ searchString, toggleSearch }: Props) => {
  const { products } = useProducts();

  if (searchString === "") return null;

  function getByTitle() {
    return products.filter((product) => product.title.toLowerCase().includes(searchString.toLowerCase()));
  }

  function getByDesigner() {
    return products.filter((product) => product.designer.toLowerCase().startsWith(searchString.toLowerCase()));
  }

  const productBoxes = (
    <Box>
      <Box>
        {getByTitle().length > 0 && <Typography variant="body1">By product name:</Typography>}
        {getByTitle().map((product) => (
          <NavLinkStyled key={product.id} to={`../product/${product.id}`} onClick={() => toggleSearch((prev) => !prev)}>
            <SearchResultCard product={product} />
          </NavLinkStyled>
        ))}
      </Box>
      <Box>
        {getByDesigner().length > 0 && <Typography variant="body1">By designer:</Typography>}
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
