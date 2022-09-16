import { Button, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Autoplay, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

const images: string[] = [
  "https://images.pexels.com/photos/6347538/pexels-photo-6347538.jpeg?cs=srgb&dl=pexels-liza-summer-6347538.jpg&fm=jpg",
  "https://images.unsplash.com/photo-1445205170230-053b83016050?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2671&q=80",
  "https://images.pexels.com/photos/1212179/pexels-photo-1212179.jpeg?cs=srgb&dl=pexels-wendy-van-zyl-1212179.jpg&fm=jpg",
];

const TopSwiper = styled.div`
  height: 90vw;
  position: relative;

  @media (min-width: 768px) {
    height: 50vw;
  }

  .topSwiper {
    height: 100%;
  }
`;

const SliderText = styled.div`
  font-size: calc(40px + (180 - 40) * ((100vw - 360px) / (2600 - 300)));
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  text-align: center;
  user-select: none;
  color: white;
  text-shadow: 1px 3px 1px black;
  z-index: 20;
  margin: 0 1rem;
`;

const BtnContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const EnterBtn = styled(Button)`
  position: absolute;
  background-color: rgba(164, 122, 122, 0) !important;
  color: white !important;
  border: 2px solid white !important;
  font-size: 20px !important;
  z-index: 20 !important;
  margin: 0 auto !important;

  text-shadow: 1px 1px 1px black;

  &:hover {
    box-shadow: 1px -1px 1px 0px rgba(0, 0, 0, 0.75) inset, -1px 1px 1px 0px rgba(0, 0, 0, 0.75) inset;
  }

  @media (min-width: 769px) {
    font-size: 40px !important;
  }
  @media (min-width: 900px) {
    font-size: 50px !important;
  }
`;

const TopContentSwiper = () => {
  return (
    <TopSwiper>
      <Swiper
        loop={true}
        spaceBetween={0}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination]}
        className="topSwiper"
      >
        {images.map((img) => (
          <SwiperSlide
            style={{
              position: "relative",
              backgroundImage: `url(${img})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
            key={img}
          >
            <SliderText>
              <Typography sx={{ fontSize: "inherit" }}>TEXTILE FASHION CENTER</Typography>
              <BtnContainer>
                <NavLink to={"store"} style={{ textDecoration: "none" }}>
                  <EnterBtn>SHOP NOW</EnterBtn>
                </NavLink>
              </BtnContainer>
            </SliderText>
          </SwiperSlide>
        ))}
      </Swiper>
    </TopSwiper>
  );
};

export default TopContentSwiper;
