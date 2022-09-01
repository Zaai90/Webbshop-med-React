import { useState } from "react";
import styled from "styled-components";
import GridItem from "../components/GridItem";
import MainContent from "../components/MainContent";
import { Product, Products as procutsArr } from "../ProductData";

const Store = () => {
  const [products, setProduct] = useState<Product[]>(procutsArr);

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
          <GridItem product={product} />
        ))}
      </StoreGridStyled>
    </MainContent>
  );
};

export default Store;
