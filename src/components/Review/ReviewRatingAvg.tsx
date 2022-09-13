import { Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import { useEffect, useState } from "react";
import { useLocalStorage } from "../../hooks/localStorage";
import { ReviewModel } from "../../models/ReviewModel";
import { Product } from "../../ProductData";
import ratingData from "./ratingData";
import { ReviewData } from "./reviewData";

interface Props {
  product: Product;
  avgRating: number;
}

const ReviewRatingAvg = ({ product, avgRating }: Props) => {
  const [reviews, setReviews] = useLocalStorage<ReviewModel[]>("reviews", ReviewData);

  const [rating, setRating] = useState<number>(avgRating);
  useEffect(() => {
    setRating(avgRating);
  }, [avgRating]);


  return (
    <Container sx={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
      <Box>
        <img draggable="false" width={32} src={ratingData[rating].img} />
      </Box>
      <Typography variant="body2">
        Users rate this as... <span style={{ fontWeight: 700, textDecoration: "underline" }}>{ratingData[rating].title}</span>
      </Typography>
    </Container>
  );
};

export default ReviewRatingAvg;
