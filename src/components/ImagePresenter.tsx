import { useState } from "react";
import styled from "styled-components";
import { Product } from "../ProductData";

const ImagePresenterStyled = styled.div`
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  padding: 1rem;
  width: 100%;
  height: 100%;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const ImageContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  height: 100%;
  padding: 0 2rem;

  @media (min-width: 768px) {
    flex-direction: column;
  }
`;

const SelectedImageContainer = styled.div`
  display: flex;
`;

const SelectImageShow = styled.img`
  max-width: 400px;
  max-height: 400px;
  object-fit: contain;
  padding: 1rem;
  /* 
  @media (min-width: 600px) {
    max-width: 500px;
    max-height: 500px;
  } */

  @media (min-width: 768px) {
    max-width: 600px;
    max-height: 600px;
  }
`;

const ImageStyled = styled.img`
  max-width: 180px;
  max-height: 180px;
  object-fit: contain;
  cursor: pointer;

  @media (min-width: 768px) {
    max-width: 200px;
    max-height: 200px;
  }
`;

interface ImagePresenterProps {
  product: Product;
}

const ImagePresenter = ({ product }: ImagePresenterProps) => {
  const [selectedImg, setSelectedImg] = useState<string>(product.img[0]);
  const [hover, setHover] = useState(false);

  let images: JSX.Element[] = [];
  images = product.img.map((img: string, index: number) => {
    return img !== selectedImg ? (
      <ImageStyled
        draggable="false"
        key={index}
        src={img}
        alt={product.title}
        onMouseEnter={() => {
          if (!hover) {
            setHover(true);
            setSelectedImg(img);
            console.log("spam");
          }
        }}
        onMouseLeave={() => {
          setHover(false);
        }}
      />
    ) : (
      <></>
    );
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
