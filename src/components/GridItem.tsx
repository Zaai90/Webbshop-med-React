import * as Icon from "@mui/icons-material";
import { Card, IconButton } from "@mui/material";
import styled from "styled-components";
import { useCart } from "../contexts/CartContext";
import { Product } from "../ProductData";

const CardImageStyled = styled.div<{ imgUrl: string }>`
  background: url(${(props) => props.imgUrl});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  height: 80%;
  width: 100%;
  border-radius: none;
`;
const CardBottomStyled = styled.div`
  height: 20%;
  display: flex;
  justify-content: center;
  flex-direction: row;
  text-align: center;
  font-size: small;
  position: relative;
  @media (min-width: 450px) {
    margin: auto 0;
  }
`;

const IconButtonStyled = styled(IconButton)`
  position: absolute !important;
  right: 2%;
  top: 10%;
  color: black !important;
`;

const CardStyled = styled(Card)`
  box-shadow: none !important;
  border-radius: none;
  height: 35vh;

  @media (min-width: 580px) {
    height: 50vh;
  }
  @media (min-width: 700px) {
    height: 40vh;
  }
  @media (min-width: 1050px) {
    height: 60vh;
  }
`;

interface Props {
  product: Product;
}

const GridItem = ({ product }: Props) => {
  const { addToCart } = useCart();

  return (
    <CardStyled>
      <CardImageStyled imgUrl={product.img[0]} />
      <CardBottomStyled>
        <div>
          <h5>{product.title}</h5>
          <p>{product.designer}</p>
          <p>{product.price}:-</p>
        </div>

        <IconButtonStyled color="primary" aria-label="add to shopping cart">
          <Icon.AddShoppingCart
            onClick={() => {
              addToCart(product, 1);
            }}
          />
        </IconButtonStyled>
      </CardBottomStyled>
    </CardStyled>
  );
};

export default GridItem;
