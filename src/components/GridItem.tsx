import { Card, CardContent, CardMedia, Grid } from "@mui/material";
import styled from "styled-components";
import { Product } from "../ProductData";

const CardImageStyled = styled.div<{ imgUrl: string }>`
  background: url(${(props) => props.imgUrl});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  height: 50%;
`;

interface Props {
  product: Product;
}

const GridItem = ({ product }: Props) => {
  return (
    <Grid item component={Card} minHeight="350px" xs={6} md={4}>
      <CardImageStyled imgUrl={product.img[0]} />
      <CardContent sx={{ height: "100%" }}>
        <p>{product.designer}</p>
      </CardContent>
    </Grid>
  );
};

export default GridItem;
