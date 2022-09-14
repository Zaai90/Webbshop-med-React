import { useParams } from "react-router-dom";
import styled from "styled-components";
import { useProducts } from "../contexts/ProductContext";
import GridItem from "./GridItem";

const StoreGridStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.5rem;
  padding: 1rem 0;

  @media (max-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
`;

const StoreGrid = () => {
  const { category } = useParams();
  const { products } = useProducts();
  let value = category || "all";
  const categories = products.filter((x, i) => products.findIndex((y) => x.category === y.category) === i).map((x) => x.category.toLowerCase());
  categories.push("all");

  return (
    <StoreGridStyled>
      {categories.includes(value) && value !== "all"
        ? products.filter((product) => product.category.toLowerCase() === value).map((product) => <GridItem key={product.id} product={product} />)
        : products.map((product) => <GridItem key={product.id} product={product} />)}
    </StoreGridStyled>
  );
};

export default StoreGrid;
