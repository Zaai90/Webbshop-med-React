import { useRef } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import ImagePresenter from "../components/ImagePresenter";
import MainContent from "../components/MainContent";
import ProductInfo from "../components/ProductInfo";
import ReviewForm from "../components/Review/ReviewForm";
import ReviewRatingAvg from "../components/Review/ReviewRatingAvg";
import Reviews from "../components/Review/Reviews";
import { useProducts } from "../contexts/ProductContext";

const ContainerStyled = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-direction: column;
  min-width: 100%;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const ProductPage = () => {
  const { id } = useParams();
  const { products } = useProducts();
  const product = products.find((p) => p.id === Number(id)) ?? products[0];
  const ref = useRef<null | HTMLDivElement>(null);

  function handleClick() {
    ref.current?.scrollIntoView({ behavior: "smooth" });
    console.log(ref.current)
  };
  return (
    <MainContent>
      <ContainerStyled>
        <ImagePresenter product={product} />
        <ProductInfo product={product} />
      </ContainerStyled>
      <div onClick={handleClick} style={{cursor: 'pointer'}}>
        <ReviewRatingAvg product={product} />
      </div>
      <div ref={ref} style={{height: '70px'}}>
      </div>
        <Reviews product={product} />
      <ReviewForm product={product} />
    </MainContent>
  );
};

export default ProductPage;
