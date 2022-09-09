import { Container, Typography } from "@mui/material";
import styled from "styled-components";
import { useCurrency } from "../contexts/CurrencyContext";
import { Product } from "../ProductData";

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: center;
  gap: 0.1rem;
  padding: 1rem;
`;

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: "row";
  gap: 1rem;
  padding: 0 1rem 0 0;
  margin: 0;

  @media (min-width: 768px) {
    gap: 12rem;
  }
`;

const TitleStyled = styled.p`
  color: grey;

  @media (min-width: 768px) {
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

  @media (min-width: 768px) {
    font-size: 1rem;
    margin-top: -0.5rem;
  }
`;

const DescriptionStyled = styled.p`
  @media (min-width: 768px) {
    font-size: 1.5rem;
    font-weight: 400;
  }
`;

interface Props {
  product: Product;
}

const ProductInfo = ({ product }: Props) => {
  const { convertToCurrencyValue } = useCurrency();
  return (
    <Container maxWidth="lg" fixed>
      <HeaderContainer>
        <DesignerStyled>{product.designer}</DesignerStyled>

        <PriceStyled>
          <Typography variant="subtitle1">{convertToCurrencyValue(product.price)}</Typography>
        </PriceStyled>
      </HeaderContainer>
      <Typography variant="h5">
        <TitleStyled>{product.title}</TitleStyled>
      </Typography>
      <div style={{ width: "auto", height: "150px", backgroundColor: "lightBlue" }}>Placeholder for BuyCard-Component</div>
      <h4>Description:</h4>
      <DescriptionStyled>{product.description}</DescriptionStyled>
    </Container>
  );
};

export default ProductInfo;
