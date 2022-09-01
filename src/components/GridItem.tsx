import { Card, CardContent, Grid } from "@mui/material";
import styled from "styled-components";
import { Product } from "../ProductData";

const CardImageStyled = styled.div<{ imgUrl: string }>`
  background: url(${(props) => props.imgUrl});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  height: 85%;
`;
const CardInfoStyled = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  font-size: small;
  margin-top: 1px;
`;

interface Props {
  product: Product;
}

const GridItem = ({ product }: Props) => {
  return (
    <Grid item component={Card} minHeight="350px" xs={6} md={4}>
      <CardImageStyled imgUrl={product.img[0]} />
      <CardContent sx={{ height: "100%" }}>
        <CardInfoStyled>
          <h5>{product.title}</h5>
          <p>{product.designer}</p>
          <p>{product.price}:-</p>
        </CardInfoStyled>
      </CardContent>
    </Grid>
  );
};

export default GridItem;
