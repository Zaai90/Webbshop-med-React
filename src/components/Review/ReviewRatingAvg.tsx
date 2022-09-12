import { Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import { Product } from "../../ProductData";
import ratingData from "./ratingData";
import { ReviewData } from "./reviewData";

interface Props {
  product: Product;
}

const ReviewRatingAvg = ({ product }: Props) => {
  function calcAvgRating(): number {
    let total = 0;
    const res = ReviewData.filter((review) => review.productId === product.id).map(
      (review) => (total += Number(ratingData.indexOf(ratingData[review.rating])))
    );

    return Number((total / res.length).toFixed());
  }

  return (
    <Container sx={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
      <Box>
        <img draggable="false" width={32} src={ratingData[calcAvgRating()].img} />
      </Box>
      <Typography variant="body2">
        Users rate this as... <span style={{ fontWeight: 700, textDecoration: "underline" }}>{ratingData[calcAvgRating()].title}</span>
      </Typography>
    </Container>
  );
};

export default ReviewRatingAvg;
