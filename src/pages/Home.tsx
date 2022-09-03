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

// TODO: Move quickView to it's own component?
const QuickView = styled.span`
  position: absolute;
  bottom: 0px;
  left: 0;
  right: 0;
  padding: 15px 20px 20px 20px;
  background: rgba(0, 0, 0, 0.5);
  z-index: 4;
  transition: 0.5s ease all;
  text-align: center;
  cursor: pointer;
  font-size: 12px;
  color: white;
  text-shadow: 2px 2px 4px black;
`;

const SwiperContent = styled.div`
  align-items: center;
  margin: 0 auto;
  text-align: center;

  .swiper-slide {
    overflow: hidden;
    &:hover {
      ${QuickView} {
        transform: translateY(-150%);
      }
    }
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
  transition: 0.5s ease all;

  &:hover {
    scale: 1.05;
  }
`;

const FavContainer = styled.div`
  .hearted {
    color: #ff5cbb;
    transition: 1s ease all;
  }
  &:hover {
    cursor: pointer;
  }
`;

const ItemContentBottom = styled.div`
  position: relative;
  z-index: 999;
  padding: 20px;
  background: white;
  margin-top: -10px;
`;

const Home = () => {

  const [isHearted, setHearted] = useState(false);
  const { products } = useProducts();

  function handleQuickViewClick() {
    console.log("I'm here!");
  }

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
            <h1>Newly added</h1>
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
                  <QuickView
                    onClick={() => {
                      handleQuickViewClick();
                    }}
                  >
                    Quick View
                  </QuickView>
                  <ItemContentBottom>
                    <div style={{ display: "flex", background: "white" }}>
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
                  </ItemContentBottom>
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