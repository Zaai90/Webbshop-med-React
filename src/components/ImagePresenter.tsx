import * as Icon from "@mui/icons-material/";
import { Box, Fade, IconButton, Tooltip } from "@mui/material";
import { useState } from "react";
import styled from "styled-components";
import { useFavorites } from "../contexts/FavoriteContext";
import Product from "../models/Product";
import theme from "../utils/Theme";

const ImagePresenterStyled = styled.div`
  display: flex;
  flex-direction: column-reverse;
  align-items: flex-start;
  justify-content: center;
  padding: 1rem;

  @media (min-width: ${theme.breakpoints.values.tablet}px) {
    width: 100%;
    flex-direction: row;
  }
  @media (min-width: ${theme.breakpoints.values.lg}px) {
    flex-direction: column-reverse;
  }
`;

const ImageContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  height: 100%;
  width: 100%;

  @media (min-width: ${theme.breakpoints.values.tablet}px) {
    width: 30%;
    flex-direction: column;
  }
  @media (min-width: ${theme.breakpoints.values.lg}px) {
    flex-direction: row;
    width: 100%;
    margin-top: 1rem;
    gap: 0;
  }
`;

const SelectedImageContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  position: relative;
`;

const FavoriteContainer = styled(Box)`
  position: absolute;
  top: 2%;
`;

const ThumbNailImg = styled(Box)<{ src: string }>`
  background: url(${(props) => props.src});
  background-size: contain;
  background-position: center 50%;
  background-repeat: no-repeat;
  width: 100%;
  min-height: 55vw;

  cursor: pointer;

  @media (min-width: ${theme.breakpoints.values.tablet}px) {
    background-size: contain;
    background-color: #f8f6f8;
    gap: 0.5rem;
    min-height: 20vw;
    margin-right: 1rem;
  }

  @media (min-width: ${theme.breakpoints.values.lg}px) {
    min-height: 250px;
  }
  @media (min-width: ${theme.breakpoints.values.lg}px) {
    min-height: 15vw;
  }
`;

const ImagePreview = styled(Box)<{ src: string }>`
  background: url(${(props) => props.src});
  position: relative;
  /* margin-bottom: 0.5rem; */
  background-size: contain;
  background-position: center center;
  background-repeat: no-repeat;
  background-color: #f8f6f8;
  width: 100%;
  min-height: 80vw;

  @media (min-width: ${theme.breakpoints.values.md}px) {
    min-height: 70vw;
  }
  @media (min-width: ${theme.breakpoints.values.lg}px) and (max-width: ${theme.breakpoints.values.xl}px) {
    min-height: 50vw;
  }
  @media (min-width: ${theme.breakpoints.values.xl}px) {
    min-height: 40rem;
  }
`;

interface ImagePresenterProps {
  product: Product;
}

const ImagePresenter = ({ product }: ImagePresenterProps) => {
  const [selectedImg, setSelectedImg] = useState<string>(product.img[0]);
  const { isFavorite, toggleFavorite } = useFavorites();

  const images = product.img.map((img: string, index: number) => {
    return (
      <ThumbNailImg
        src={img}
        key={index}
        onMouseEnter={() => {
          setSelectedImg(img);
        }}
      />
    );
  });

  return (
    <ImagePresenterStyled>
      <ImageContainer>{images}</ImageContainer>
      <SelectedImageContainer>
        <ImagePreview src={selectedImg}>
          <FavoriteContainer>
            <IconButton onClick={() => toggleFavorite(product)}>
              <Tooltip
                TransitionComponent={Fade}
                TransitionProps={{ timeout: 500 }}
                title={isFavorite(product) ? "Remove from wishlist" : "Add to wishlist"}
                placement="left"
                arrow
              >
                {isFavorite(product) ? <Icon.Favorite color={"secondary"} /> : <Icon.FavoriteBorder color={"disabled"} />}
              </Tooltip>
            </IconButton>
          </FavoriteContainer>
        </ImagePreview>
      </SelectedImageContainer>
    </ImagePresenterStyled>
  );
};

export default ImagePresenter;
