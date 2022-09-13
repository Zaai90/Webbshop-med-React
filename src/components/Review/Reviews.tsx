import { Box, Container, Typography } from "@mui/material";
import { Product } from "../../ProductData";
import ReadMore from "../ReadMore";
import ratingData from "./ratingData";
import { ReviewData } from "./reviewData";

interface Props {
  product: Product;
}

const Reviews = ({ product }: Props) => {
  return (
    <Container sx={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
      {ReviewData.filter((review) => review.productId === product.id).map((review) => (
        <Box>
          <Box sx={{ display: "flex", gap: "1rem" }}>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <img src={ratingData[review.rating].img} alt={ratingData[review.rating].title} loading="lazy" width={42} />
            </Box>
            <Box>
              <Box sx={{ display: "flex", gap: "1rem", alignItems: "center" }}>
                <Typography variant="h6" sx={{lineHeight: undefined}}>{review.name}</Typography>
                <Typography variant="subtitle2" sx={{lineHeight: undefined}}>{review.createdAt}</Typography>
              </Box>
              <ReadMore limit={50} variant="body2">
                {review.review}
              </ReadMore>
            </Box>
          </Box>
        </Box>
      ))}
    </Container>
  );
};

export default Reviews;