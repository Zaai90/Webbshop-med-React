import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { Box, Button, Container, Modal, Pagination, Typography, useMediaQuery } from "@mui/material";
import { useState } from "react";
import { useReviews } from "../../contexts/ReviewContext";
import usePagination from "../../hooks/pagination";
import Product from "../../models/Product";
import { ReviewModel } from "../../models/ReviewModel";
import theme from "../../utils/Theme";
import ReadMore from "../ReadMore";
import ratingData from "./ratingData";
import ReviewForm from "./ReviewForm";

interface Props {
  product: Product;
  calcAvgRating: () => void;
}

const Reviews = ({ product, calcAvgRating }: Props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  let [page, setPage] = useState(1);
  const { reviews, addReview } = useReviews();
  const smScreen = useMediaQuery(theme.breakpoints.down("tablet"));
  const findReviews = reviews.find((x) => x.productId === product.id);

  const reviewsByProductId = reviews.filter((review) => review.productId === product.id);

  const per_page = 3;

  const count = Math.ceil(reviewsByProductId.length / per_page);
  const _reviews = usePagination(reviewsByProductId, per_page);

  function handleModalClick() {
    setIsModalOpen(true);
  }

  function handleSubmit(review: ReviewModel) {
    addReview(review);
    calcAvgRating();
  }

  const handleChange = (event: React.ChangeEvent<unknown>, page: number) => {
    setPage(page);
    _reviews.jump(page);
  };

  return (
    <>
      <Box sx={{ display: "flex", flexDirection: "column", maxWidth: smScreen ? "100%" : "50%" }}>
        <Typography variant="h6" sx={{ borderBottom: "1px solid rgba(0,0,0,0.10)", paddingBottom: ".5rem" }}>
          {findReviews ? "Buyers had this to say" : "No reviews yet..."}
        </Typography>

        {_reviews
          .currentData()
          .filter((review) => review.productId === product.id)
          .map((review, index) => (
            <Box key={index}>
              <Container sx={{ margin: 0, borderBottom: "1px solid rgba(0,0,0,0.05)", padding: "15px 0" }}>
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
              </Container>
            </Box>
          ))}
        <Pagination style={{ marginTop: "1rem" }} count={count} page={page} onChange={handleChange} />
      </Box>
      <Container>
        <Button
          sx={{ color: "black", marginTop: "1rem", fontSize: "12px" }}
          onClick={() => {
            handleModalClick();
          }}
        >
          Write a review
          <ChevronRightIcon />
        </Button>
      </Container>
      <Modal
        open={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        sx={{ display: "flex", alignItems: "center", justifyContent: "center", padding: "1rem" }}
      >
        <ReviewForm product={product} toggleModal={setIsModalOpen} handleSubmit={handleSubmit} />
      </Modal>
    </>
  );
};

export default Reviews;
