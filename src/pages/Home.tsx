import FavoriteIcon from "@mui/icons-material/Favorite";
import { Button, Container } from "@mui/material";
import styled from "styled-components";
import MainContent from "../components/MainContent";
import { useProducts } from "../contexts/ProductContext";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const images: string[] = [
  "https://images.pexels.com/photos/6347538/pexels-photo-6347538.jpeg?cs=srgb&dl=pexels-liza-summer-6347538.jpg&fm=jpg",
  "https://images.unsplash.com/photo-1445205170230-053b83016050?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2671&q=80",
  "https://images.pexels.com/photos/1212179/pexels-photo-1212179.jpeg?cs=srgb&dl=pexels-wendy-van-zyl-1212179.jpg&fm=jpg",
];

const TopContent = styled.div`
  padding: 60px;
  display: flex;
  flex-wrap: wrap;
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
  margin-right: 0 auto;
  text-align: center;

  .swiper-slide {
    overflow: hidden;
    &:hover {
      ${QuickView} {
        transform: translateY(-160%);
      }
    }
  }
  .swiper-button-next {
    right: 0px;
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
  padding: 20px 5px;
  background: white;
  margin-top: -10px;
`;

const TopSwiper = styled.div`
  margin-top: 4rem;
  height: 90vw;
  position: relative;

  @media (min-width: 768px) {
    height: 50vw;
  }

  .topSwiper {
    height: 100%;
  }
  .swiper-slide {
    background: orange;
  }
`;

const StyledSwiperSlide = styled(SwiperSlide)<{ test: string }>`
  position: relative;
  background-image: url(${(props) => props.test});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

const SliderText = styled.div`
  font-size: calc(40px + (180 - 40) * ((100vw - 360px) / (2600 - 300)));
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  text-align: center;
  user-select: none;
  color: white;
  text-shadow: 1px 3px 1px black;
  z-index: 20;
  margin: 0 0.5rem;
`;

const BtnContainer = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  right: 0;
  left: 0;
  top: 55vh;
`;

const EnterBtn = styled(Button)`
  background-color: rgba(164, 122, 122, 0) !important;
  color: white !important;
  border: 2px solid white !important;
  font-size: 50px !important;
  z-index: 20 !important;
  margin: 0 auto !important;
  text-shadow: 1px 1px 1px black;

  &:hover {
    box-shadow: 1px -1px 1px 0px rgba(0, 0, 0, 0.75) inset, -1px 1px 1px 0px rgba(0, 0, 0, 0.75) inset;
  }
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
          modules={[Pagination]}
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
            >
              <SliderText>TEXTILE FASHION CENTER</SliderText>
            </SwiperSlide>
          ))}
        </Swiper>
      </TopSwiper>
      <BtnContainer>
        <NavLink to={"store"} style={{ textDecoration: "none" }}>
          <EnterBtn>SHOP NOW</EnterBtn>
        </NavLink>
      </BtnContainer>

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
            <h1 style={{ padding: "2rem" }}>Newly added</h1>
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
                      <div style={{ marginRight: "auto" }}>{product.title}</div>
                      <FavContainer>
                        <FavoriteIcon onClick={toggleHearted} className={isHearted ? "hearted" : undefined} />
                      </FavContainer>
                    </div>
                    <div style={{ textAlign: "left" }}>{product.price}</div>
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
