import { Container } from "@mui/material";
import styled from "styled-components";
import MainContent from "../components/MainContent";
import { useProducts } from "../contexts/ProductContext";

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

const MiddleContent = styled.div`
  height: 400px;
  border: 1px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
`;

const Home = () => {
  const { products } = useProducts();
  return (
    <>
      <MiddleContent></MiddleContent>
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
          <MiddleContent>
            <div>Slider goes here</div>
          </MiddleContent>
        </Container>
      </MainContent>
    </>
  );
};

export default Home;
