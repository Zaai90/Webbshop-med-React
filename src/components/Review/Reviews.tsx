import { Box, Button, Container, Modal, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useReviews } from "../../contexts/ReviewContext";
import { ReviewModel } from "../../models/ReviewModel";
import { Product } from "../../ProductData";
import ReadMore from "../ReadMore";
import ratingData from "./ratingData";
import ReviewForm from "./ReviewForm";

interface Props {
  product: Product;
  calcAvgRating: () => void;
}

const Reviews = ({ product, calcAvgRating }: Props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { reviews, addReview } = useReviews();

  function handleModalClick() {
    setIsModalOpen(true);
  }

  function handleSubmit(review: ReviewModel) {
    addReview(review);
    calcAvgRating();
  }


  return (
    <>
      <Box>
        <Button
          onClick={() => {
            handleModalClick();
          }}
        >
          Write a review
        </Button>
      </Box>
      <Container sx={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
        {reviews
          .filter((review) => review.productId === product.id)
          .map((review) => (
            <Box>
              <Box sx={{ display: "flex", gap: "1rem" }}>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <img src={ratingData[review.rating].img} alt={ratingData[review.rating].title} loading="lazy" width={42} />
                </Box>
                <Box>
                  <Box sx={{ display: "flex", gap: "1rem", alignItems: "center" }}>
                    <Typography variant="h6" sx={{ lineHeight: undefined }}>
                      {review.name}
                    </Typography>
                    <Typography variant="subtitle2" sx={{ lineHeight: undefined }}>
                      {review.createdAt}
                    </Typography>
                  </Box>
                  <ReadMore limit={50} variant="body2">
                    {review.review}
                  </ReadMore>
                </Box>
              </Box>
            </Box>
          ))}
      </Container>
      <Modal open={isModalOpen} onClose={() => setIsModalOpen(false)} sx={{ display: "flex", alignItems: "center" }}>
        <ReviewForm product={product} toggleModal={setIsModalOpen} handleSubmit={handleSubmit} />
      </Modal>
    </>
  );
};

export default Reviews;
