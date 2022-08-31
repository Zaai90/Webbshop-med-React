import { Card, CardContent, CardMedia, Grid } from "@mui/material";
import { Product } from "../ProductData";

interface Props {
  product: Product;
}

const GridItem = ({ product }: Props) => {
  return (
    <Grid item component={Card} xs={6} md={4}>
      {/* <Card sx={{ padding: "1rem", minHeight: "300px" }}> */}
      <CardMedia component="img" image={product.img[0]} />
      <CardContent sx={{ height: "100%" }}>
        <p>{product.designer}</p>
      </CardContent>
      {/* </Card> */}
    </Grid>
  );
};

export default GridItem;
