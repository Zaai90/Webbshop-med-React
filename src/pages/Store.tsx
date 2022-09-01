import styled from "styled-components";
import GridItem from "../components/GridItem";
import MainContent from "../components/MainContent";
import { useProducts } from "../contexts/ProductContext";

const Store = () => {
  const { products } = useProducts();

  const StoreGridStyled = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 0.5rem;

    @media (max-width: 768px) {
      grid-template-columns: 1fr 1fr;
    }
  `;

  return (
    <MainContent>
      <StoreGridStyled>
        {products.map((product) => (
          <GridItem key={product.id} product={product} />
        ))}
      </StoreGridStyled>
    </MainContent>
  );
};

export default Store;
