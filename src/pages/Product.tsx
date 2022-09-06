import { useParams } from "react-router-dom";
import styled from "styled-components";
import ImagePresenter from "../components/ImagePresenter";
import MainContent from "../components/MainContent";
import { useCurrency } from "../contexts/CurrencyContext";
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

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: center;
  gap: 0.1rem;
  padding: 1rem;
`;

const TitleStyled = styled.h1`
  font-size: 1rem;
  font-weight: 500;
  color: grey;

  @media (min-width: 768px) {
    font-size: 1.5rem;
    color: black;
  }
`;

const DesignerStyled = styled.h2`
  font-weight: 500;
  font-size: 1.1rem;

  @media (min-width: 768px) {
    font-size: 0.8rem;
    color: grey;
  }
`;

const PriceStyled = styled.p`
  font-size: 1.1rem;
  font-weight: 500;
  @media (min-width: 768px) {
    font-size: 1.5rem;
    margin-top: -1.05rem;
    font-weight: 500;
  }
`;

const DescriptionStyled = styled.p`
  @media (min-width: 768px) {
    font-size: 1.5rem;
    font-weight: 400;
  }
`;

const ProductPage = () => {
  const { id } = useParams();
  const { products } = useProducts();
  const product = products.find((p) => p.id === Number(id)) ?? products[0];

  const { convertToCurrencyValue } = useCurrency();

  return (
    <MainContent>
      <ContainerStyled>
        <ImagePresenter product={product} />
        <InfoContainer>
          <div style={{ display: "flex", flexDirection: "row", gap: "5rem", padding: 0, margin: 0 }}>
            <DesignerStyled>{product.designer}</DesignerStyled>
            <PriceStyled>{convertToCurrencyValue(product.price)}</PriceStyled>
          </div>
          <TitleStyled>{product.title}</TitleStyled>
          <div style={{ width: "auto", height: "150px", backgroundColor: "lightBlue" }}>Placeholder for BuyCard-Component</div>
          <h4>Description:</h4>
          <DescriptionStyled>{product.description}</DescriptionStyled>
        </InfoContainer>
      </ContainerStyled>
    </MainContent>
  );
};

export default ProductPage;
