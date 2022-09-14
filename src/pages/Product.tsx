import { Container } from "@mui/system";
import { useRef, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import DeliveryAndReturns from "../components/DeliveryAndReturns";
import ImagePresenter from "../components/ImagePresenter";
import MainContent from "../components/MainContent";
import ProductInfo from "../components/ProductInfo";
import ReviewRatingAvg from "../components/Review/ReviewRatingAvg";
import Reviews from "../components/Review/Reviews";
import { useProducts } from "../contexts/ProductContext";
import { useReviews } from "../contexts/ReviewContext";
import theme from "../utils/Theme";

const ContainerStyled = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-direction: column;
  min-width: 100%;

  @media (min-width: ${theme.breakpoints.values.lg}px) {
    flex-direction: row;
  }
`;

const ProductPage = () => {
  const { reviews, calcRating } = useReviews();
  const { products } = useProducts();
  const { id } = useParams();
  const product = products.find((p) => p.id === Number(id)) ?? products[0];
  const findReviews = reviews.find((x) => x.productId === product.id);
  const [avgRating, setAvgRating] = useState<number>(calcRating(product));
  const ref = useRef<null | HTMLDivElement>(null);

  function handleClick() {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  }

  function calcAvgRating() {
    let newRating = calcRating(product);
    setAvgRating(newRating);
  }

  return (
    <MainContent>
      <ContainerStyled>
        <ImagePresenter product={product} />
        <Container>
          <div onClick={handleClick} style={{ cursor: "pointer" }}>
            {findReviews && <ReviewRatingAvg avgRating={avgRating} />}
          </div>
          <ProductInfo product={product} />
          <DeliveryAndReturns />
        </Container>
      </ContainerStyled>
      <div ref={ref} style={{ height: "70px" }}></div>
      <Reviews product={product} calcAvgRating={calcAvgRating} />
    </MainContent>
  );
};

export default ProductPage;
