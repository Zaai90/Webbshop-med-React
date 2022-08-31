
import { useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { Product, products } from "../ProductData";

const ContainerStyled = styled.main`
  margin: 5rem 0;
  display: flex;
  gap: 1rem;
  justify-content: center;
  min-width: 100%;
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: center;
  gap: 0.1rem;
  padding: 1rem;
`;

const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  height: 100%;
`;

const TitleStyled = styled.h1`
  font-size: 1.5rem;
`;

const DesignerStyled = styled.h2`
  font-size: 0.8rem;
  color: grey;
`;

const PriceStyled = styled.p`
  font-size: 1.5rem;
  margin-top: -1rem;
  font-weight: 500;
`;

const DescriptionStyled = styled.p`
  font-size: 1.5rem;
  font-weight: 400;
`;

const ImageStyled = styled.img`
  max-width: 150px;
  max-height: 150px;
  object-fit: contain;
  cursor: pointer;
  border: 1px solid black;
`;

const SelectImageShow = styled.img`
  max-width: 600px;
  max-height: 600px;
  flex-shrink: 5;
  object-fit: contain;
  border: 1px solid black;
`;

const ProductPage = () => {
  const { id } = useParams();
  const product: Product = products.find((p) => p.id === Number(id)) ?? products[0];
  const [selectedImg, setSelectedImg] = useState<string>(product.img[0]);

  const images: JSX.Element[] = product.img.map((img: string, index: number) => {
    return <ImageStyled draggable="false" key={index} src={img} alt={product.title} onMouseEnter={() => setSelectedImg(img)} />;
  });

  return (
    <ContainerStyled>
      <ImageContainer>{images}</ImageContainer>
      <SelectImageShow draggable="false" src={selectedImg} />
      <InfoContainer>
        <div style={{ display: "flex", flexDirection: "row", gap: "8rem", padding: 0, margin: 0 }}>
          <DesignerStyled>{product.designer}</DesignerStyled>
          <PriceStyled>{product.price} Kr</PriceStyled>
        </div>
        <TitleStyled>{product.title}</TitleStyled>
        <div style={{ width: "auto", height: "150px", backgroundColor: "lightBlue" }}>Placeholder for BuyCard-Component</div>
        <h3>Description:</h3>
        <p>{product.description}</p>
      </InfoContainer>
    </ContainerStyled>
  );
};


export default ProductPage;