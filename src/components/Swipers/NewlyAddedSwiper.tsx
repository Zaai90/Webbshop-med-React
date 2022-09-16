import FavoriteIcon from "@mui/icons-material/Favorite";
import { Box, Typography } from "@mui/material";
import { useState } from "react";
import styled from "styled-components";
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { useCurrency } from "../../contexts/CurrencyContext";
import Product from "../../models/Product";
import { QuickView } from "../../pages/Home";

const FavContainer = styled.div`
  .hearted {
    color: #ff5cbb;
    transition: 1s ease all;
  }
  &:hover {
    cursor: pointer;
  }
`;

const SliderImage = styled.img`
  object-fit: cover;
  height: 100%;
  width: 100%;
  transition: 0.5s ease all;

  &:hover {
    scale: 1.05;
  }
`;

const ItemContentBottom = styled.div`
  position: relative;
  z-index: 999;
  padding: 20px 5px;
  background: white;
  margin-top: -10px;
`;

interface Props {
  items: Product[];
}

function NewlyAddedSwiper({ items }: Props) {
  const { convertToCurrencyValue } = useCurrency();
  const [isHearted, setHearted] = useState(false);

  function handleQuickViewClick() {
    console.log("I'm here!");
  }

  const toggleHearted = () => {
    setHearted(!isHearted);
  };

  return (
    <>
      <Swiper
        loop={true}
        spaceBetween={15}
        centeredSlides={true}
        slidesPerGroup={1}
        loopFillGroupWithBlank={false}
        grabCursor={true}
        slidesPerView={1}
        navigation={true}
        modules={[Navigation]}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
        }}
      >
        {items.map((product) => (
          <SwiperSlide key={product.id}>
            <a href={"product/" + product.id}>
              <SliderImage src={product.img[0]} />
            </a>
            <QuickView
              onClick={() => {
                handleQuickViewClick();
              }}
            >
              <Typography>Quick View</Typography>
            </QuickView>
            <ItemContentBottom>
              <Box sx={{ display: "flex", background: "white" }}>
                <Box sx={{ marginRight: "auto" }}>
                  <Typography variant="h6">{product.title}</Typography>
                </Box>
                <FavContainer>
                  <FavoriteIcon onClick={toggleHearted} className={isHearted ? "hearted" : undefined} />
                </FavContainer>
              </Box>
              <Box sx={{ textAlign: "left" }}>
                <Typography variant="h6">{convertToCurrencyValue(product.price)}</Typography>
              </Box>
            </ItemContentBottom>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}

export default NewlyAddedSwiper;
