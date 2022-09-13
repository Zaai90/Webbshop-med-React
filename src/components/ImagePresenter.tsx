import { Box } from "@mui/material";
import React, { useState } from "react";
import styled from "styled-components";
import Product from "../models/Product";

const ImagePresenterStyled = styled.div`
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  padding: 1rem;

  @media (min-width: 768px) {
    width: 50%;
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
  width: 100%;

  @media (min-width: 768px) {
    width: 30%;
    flex-direction: column;
  }
`;

const SelectedImageContainer = styled.div`
  display: flex;
  width: 70%;
  height: 100%;
`;

const ThumbNailImg = styled(Box)<{ src: string }>`
  background: url(${(props) => props.src});
  background-size: contain;
  background-position: center center;
  background-repeat: no-repeat;
  width: 100%;
  cursor: pointer;
  min-height: 100px;

  @media (min-width: 768px) {
    min-height: 50%;
  }
`;

const ImagePreview = styled(Box)<{ src: string }>`
  background: url(${(props) => props.src});
  background-size: contain;
  background-position: center center;
  background-repeat: no-repeat;
  width: 100%;
  min-height: 300px;

  @media (min-width: 768px) {
    min-height: 100%;
  }
`;

interface ImagePresenterProps {
  product: Product;
}

const ImagePresenter = ({ product }: ImagePresenterProps) => {
  const [selectedImg, setSelectedImg] = useState<string>(product.img[0]);
  const [hover, setHover] = useState(false);

  const images = product.img.map((img: string, index: number) => {
    return img !== selectedImg ? (
      <ThumbNailImg
        src={img}
        key={index}
        onMouseEnter={() => {
          if (!hover) {
            setHover(true);
            setSelectedImg(img);
          }
        }}
        onMouseLeave={() => {
          setHover(false);
        }}
      />
    ) : (
      <React.Fragment key={index}></React.Fragment>
    );
  });

  return (
    <ImagePresenterStyled>
      <ImageContainer>{images}</ImageContainer>
      <SelectedImageContainer>
        <ImagePreview src={selectedImg} />
      </SelectedImageContainer>
    </ImagePresenterStyled>
  );
};

export default ImagePresenter;
