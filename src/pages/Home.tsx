import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { Container } from "@mui/material";
import styled from "styled-components";
import MainContent from "../components/MainContent";
import { useProducts } from "../contexts/ProductContext";

// Import Swiper React components
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import { useState } from "react";
import "swiper/css";
import "swiper/css/navigation";

const TopContent = styled.div`
  padding: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5rem;
`;

const CategoryBubble = styled.div`
  border: 1px solid black;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  width: 120px;
  height: 120px;
  align-items: center;
  background-image: url("https://media.nelly.com/i/nlyscandinavia/NELLY_SECTION_12_2022_v35_jeans_byxor?w=768&fmt=webp&unsharp=(0,1,1,7)");
  background-size: contain;
  background-position: center;
  background-color: black;
  transition: 0.5s ease all;
  opacity: 0.5;
`;

const CategoryBubbleContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 1rem;
  cursor: pointer;
  transition: 0.5s ease all;

  &:hover {
    ${CategoryBubble} {
      opacity: 1;
    }
    transform: translateY(-5%);
  }
`;

const SwiperContent = styled.div`
  align-items: center;
  margin: 0 auto;
  text-align: center;

  .swiper {
    /* position: relative !important; */
  }
  .swiper-button-next {
    right: 5px;
  }
  .swiper-button-prev {
    left: 0px;
  }
  .swiper-button-next,
  .swiper-button-prev {
    color: white;
    background-color: rgba(0, 0, 0, 0.15);
    padding: 30px;
    top: 45%;
  }

  @media screen and (max-width: 360px) {
    .swiper-container {
      width: 300px;
    }
  }

  @media screen and (min-width: 768px) {
    .swiper-container {
      width: 768px;
    }
  }
  @media only screen and (max-width: 1200px) {
    .swiper-button-next,
    .swiper-button-prev {
      display: none;
    }
  }
`;

const SliderImage = styled.img`
  object-fit: cover;
  height: 100%;
  width: 100%;
`;

const FavContainer = styled.div`
  .hearted {
    color: #ff5cbb;
    transition: 1s ease all;
  }
`;

const Home = () => {
  const [isHearted, setHearted] = useState(false);
  const { products } = useProducts();

  const toggleHearted = () => {
    setHearted(!isHearted);
  };
  return (
    <>
      <SwiperContent></SwiperContent>
      <MainContent>
        <Container>
          <TopContent>
            <CategoryBubbleContainer>
              <CategoryBubble></CategoryBubble>
              <div>News</div>
            </CategoryBubbleContainer>
            <CategoryBubbleContainer>
              <CategoryBubble></CategoryBubble>
              <div>Shirts</div>
            </CategoryBubbleContainer>
            <CategoryBubbleContainer>
              <CategoryBubble></CategoryBubble>
              <div>Dresses</div>
            </CategoryBubbleContainer>
            <CategoryBubbleContainer>
              <CategoryBubble></CategoryBubble>
              <div>Textiles</div>
            </CategoryBubbleContainer>
          </TopContent>
          <SwiperContent>
            <h1>Slider goes here</h1>
            <Swiper
              loop={true}
              spaceBetween={15}
              centeredSlides={true}
              grabCursor={true}
              slidesPerView={3}
              navigation={true}
              modules={[Navigation]}
              breakpoints={{
                // when window width is >= 360px
                360: {
                  width: 300,
                  slidesPerView: 1,
                },
                // when window width is >= 768px
                768: {
                  width: 1100,
                  slidesPerView: 3,
                },
              }}
            >
              {products.map((product) => (
                <SwiperSlide>
                  <a href={"product/" + product.id}>
                    <SliderImage src={product.img[0]} />
                  </a>
                  {/* TODO: Clean up */}
                  <div style={{ display: "flex" }}>
                    <div style={{ margin: "0 auto" }}>{product.title}</div>
                    <FavContainer>
                      {/* TODO: Send product to wishlist */}
                      <div className={isHearted ? "hearted" : undefined} onClick={toggleHearted}>
                        {/* TODO: Check state on each instead of all */}
                        {isHearted && <FavoriteIcon />}
                        {!isHearted && <FavoriteBorderIcon />}
                      </div>
                    </FavContainer>
                  </div>
                  <div>{product.price} SEK</div>
                </SwiperSlide>
              ))}
            </Swiper>
          </SwiperContent>
        </Container>
      </MainContent>
    </>
  );
};

export default Home;
