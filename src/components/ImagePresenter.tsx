import { useState } from "react";
import styled from "styled-components";
import { Product } from "../ProductData";

const ImagePresenterStyled = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  padding: 1rem;
  width: 100%;
  height: 100%;
`;

const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  height: 100%;
`;

const SelectedImageContainer = styled.div`
  display: flex;
`;

const SelectImageShow = styled.img`
  max-width: 250px;
  max-height: 250px;
  object-fit: contain;
  border: 1px solid black;

  /* @media (min-width: 768px) {
    max-width: 480px;
    max-height: 480px;
  } */
`;

const ImageStyled = styled.img`
  max-width: 100px;
  max-height: 100px;
  object-fit: contain;
  cursor: pointer;
  border: 1px solid black;

  /* @media (min-width: 768px) {
    max-width: 150px;
    max-height: 150px;
  } */
`;

interface ImagePresenterProps {
  product: Product;
}

const ImagePresenter = ({ product }: ImagePresenterProps) => {
  const [selectedImg, setSelectedImg] = useState<string>(product.img[0]);
  const images: JSX.Element[] = product.img.map((img: string, index: number) => {
    return <ImageStyled draggable="false" key={index} src={img} alt={product.title} onMouseEnter={() => setSelectedImg(img)} />;
  });
  return (
    <ImagePresenterStyled>
      <ImageContainer>{images}</ImageContainer>
      <SelectedImageContainer>
        <SelectImageShow draggable="false" src={selectedImg} />
      </SelectedImageContainer>
    </ImagePresenterStyled>
  );
};

export default ImagePresenter;
