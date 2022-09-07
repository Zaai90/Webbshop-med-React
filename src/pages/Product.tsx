import { useParams } from "react-router-dom";
import styled from "styled-components";
import ImagePresenter from "../components/ImagePresenter";
import MainContent from "../components/MainContent";
import ProductInfo from "../components/ProductInfo";
import { useProducts } from "../contexts/ProductContext";

const ContainerStyled = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-direction: column;
  min-width: 100%;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const ProductPage = () => {
  const { id } = useParams();
  const { products } = useProducts();
  const product = products.find((p) => p.id === Number(id)) ?? products[0];

  return (
    <MainContent>
      <ContainerStyled>
        <ImagePresenter product={product} />
        <ProductInfo product={product} />
      </ContainerStyled>
    </MainContent>
  );
};

export default ProductPage;
