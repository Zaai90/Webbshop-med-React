import * as Icon from "@mui/icons-material/";
import { Box, Fade, IconButton, Tooltip, useMediaQuery } from "@mui/material";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { useFavorites } from "../contexts/FavoriteContext";
import Product from "../models/Product";
import theme from "../utils/Theme";

const ImagePresenterStyled = styled.div`
  display: flex;
  flex-direction: column-reverse;
  align-items: flex-start;
  justify-content: center;
  gap: .5rem;
  @media (min-width: ${theme.breakpoints.values.xs}px) {
    overflow: clip;
  }
  @media (min-width: ${theme.breakpoints.values.tablet}px) {
    height: 300px;
  }
  @media (min-width: ${theme.breakpoints.values.lg}px) {
    height: 500px;
  }
  @media (min-width: ${theme.breakpoints.values.tablet}px) {
    flex-direction: row;
  }
  `;

const ImageContainer = styled.div`
  display: grid;
  overflow-x: scroll;
  width: 100%;
  gap: 0.5rem;
  margin-top: -6px;
  @media (min-width: ${theme.breakpoints.values.tablet}px) {
    display: flex;
    flex-direction: column;
    max-width: fit-content;
    scrollbar-width: none;
  }
  height: calc(100% + 12px);
  overflow-y: scroll;
`;

const SelectedImageContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  position: relative;

  @media (min-width: ${theme.breakpoints.values.sm}px) {
    height: 100% !important;
    min-width: 500px;
  }
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
  height: 100%;
  cursor: pointer;
`;

const ImagePreview = styled(Box)<{ src: string }>`
  background: url(${(props) => props.src});
  position: relative;
  background-size: contain;
  background-position: center center;
  background-repeat: no-repeat;
  background-color: #f8f6f8;
  width: 100%;
`;

interface ImagePresenterProps {
  product: Product;
}

const ImagePresenter = ({ product }: ImagePresenterProps) => {
  const [selectedImg, setSelectedImg] = useState<string>(product.img[0]);
  const { isFavorite, toggleFavorite } = useFavorites();
  const smScreen = useMediaQuery(theme.breakpoints.down("tablet"));
  const tabletScreen = useMediaQuery(theme.breakpoints.down("md"));
  const desktopScreen = useMediaQuery(theme.breakpoints.up("md"));

  useEffect(() => {
    setSelectedImg(product.img[0]);
  }, [product]);

  const images = product.img.map((img: string, index: number) => {
    return (
      <div style={{ height: "200px", width: "150px" }}>
        <ThumbNailImg
          src={img}
          key={index}
          onMouseEnter={() => {
            setSelectedImg(img);
          }}
          onClick={() => {
            setSelectedImg(img);
          }}
        />
      </div>
    );
  });

  return (
    <ImagePresenterStyled style={{ flexWrap: smScreen ? "wrap" : undefined }}>
      {smScreen ? <ImageContainer style={{ gridTemplateColumns: `repeat(${images.length}, 1fr)` }}>{images}</ImageContainer> : <ImageContainer style={{ gridTemplateColumns: `repeat(${images.length}, 1fr)`}}><div style={{height: theme.breakpoints.values.tablet ? 'max-height: 300px' : undefined}}>{images}</div></ImageContainer>}
      <SelectedImageContainer style={{minHeight: '300px', alignSelf: 'stretch', height: 'auto !important'}}>
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
