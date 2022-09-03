import { Container } from "@mui/material";
import styled from "styled-components";
import MainContent from "../components/MainContent";
import Store from "./Store";

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
  transition: .5s ease all;
  opacity: .5;

`;
const CategoryBubbleContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 1rem;
  cursor: pointer;

  &:hover {
    ${CategoryBubble} {
      opacity: 1;
    }
}
`;

const Home = () => {
  return (
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
      </Container>
      <Store />
    </MainContent>
  );
};

export default Home;
