import { Container, Typography } from "@mui/material";
import styled from "styled-components";
import MainContent from "../components/MainContent";
import NewlyAddedSwiper from "../components/Swipers/NewlyAddedSwiper";
import TopContentSwiper from "../components/Swipers/TopContentSwiper";
import { useProducts } from "../contexts/ProductContext";

// Import Swiper React components

// Import Swiper styles
import { NavLink } from "react-router-dom";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

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

// TODO: Move quickView to it's own component?!
export const QuickView = styled.span`
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

const NavLinkStyled = styled(NavLink)`
  text-decoration: none;
  color: black;
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

const Home = () => {
  const { products } = useProducts();

  return (
    <>
      <TopContentSwiper />
      <MainContent>
        <Container>
          <TopContent>
            <NavLinkStyled to="/store/category/jacket">
              <CategoryBubbleContainer>
                <CategoryBubble></CategoryBubble>
                <Typography>Jackets</Typography>
              </CategoryBubbleContainer>
            </NavLinkStyled>
            <NavLinkStyled to="/store/category/rug">
              <CategoryBubbleContainer>
                <CategoryBubble></CategoryBubble>
                <Typography>Rugs</Typography>
              </CategoryBubbleContainer>
            </NavLinkStyled>
            <NavLinkStyled to="/store/category/t-shirt">
              <CategoryBubbleContainer>
                <CategoryBubble></CategoryBubble>
                <Typography>T-Shirts</Typography>
              </CategoryBubbleContainer>
            </NavLinkStyled>
            <NavLinkStyled to="/store/category/shoe">
              <CategoryBubbleContainer>
                <CategoryBubble></CategoryBubble>
                <Typography>Shoes</Typography>
              </CategoryBubbleContainer>
            </NavLinkStyled>
          </TopContent>
          <SwiperContent>
            <h1 style={{ padding: "2rem" }}>Newly added</h1>
            <NewlyAddedSwiper items={products} />
          </SwiperContent>
        </Container>
      </MainContent>
    </>
  );
};

export default Home;
