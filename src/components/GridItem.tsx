import * as Icon from "@mui/icons-material";
import { Card, IconButton } from "@mui/material";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { useCart } from "../contexts/CartContext";
import { Product } from "../ProductData";

const CardImageStyled = styled.div<{ imgUrl: string }>`
  background: url(${(props) => props.imgUrl});
  background-size: contain;
  background-color: #f7f7f7;
  background-repeat: no-repeat;
  background-position: center;
  height: 350px;
  width: 100%;
  border-radius: none;
  cursor: pointer;
  transition: .5s ease-in-out;

  @media (max-width: 768px) {
    height: 200px;
  }
`;

const CardBottomStyled = styled.div`
  position: relative;
  z-index: 100;
  background-color: white;
  display: flex;
  justify-content: center;
  flex-direction: row;
  text-align: center;
  font-size: small;
  position: relative;
`;

const IconButtonStyled = styled(IconButton)`
  position: absolute !important;
  right: 2%;
  top: 10%;
  color: black !important;
`;


const QuickView = styled.span`
    position: absolute;
    bottom: 0px;
    left: 0;
    right: 0;
    padding: 10px;
    background: rgba(0,0,0,.5);
    z-index: 4;
    transition: .5s ease all;
    text-align: center;

    a {
      text-decoration: none;
      font-size: 12px;
      color: white;
      text-shadow: 2px 2px 4px black;
    }
`

const CardStyled = styled(Card)`
  box-shadow: none !important;
  border-radius: none;
  position: relative;
  &:hover {
    ${QuickView} {
      transform: translateY(-125%);
   }
   ${CardImageStyled} {
    scale: 1.05;
   }
  }
`;


interface Props {
  product: Product;
}

const GridItem = ({ product }: Props) => {
  const { addToCart } = useCart();

  return (
    <CardStyled>
      <NavLink to={`../product/${product.id}`}>
        <CardImageStyled imgUrl={product.img[0]} />
      </NavLink>
      <QuickView>
        <a href="#">Quick View</a>
      </QuickView>
      <CardBottomStyled>
        <div>
          <h5>{product.title}</h5>
          <p>{product.designer}</p>
          <p>{product.price}:-</p>
        </div>

        <IconButtonStyled
          onClick={() => {
            addToCart(product, 1);
          }}
          color="primary"
          aria-label="add to shopping cart"
        >
          <Icon.AddShoppingCart />
        </IconButtonStyled>
      </CardBottomStyled>
    </CardStyled>
  );
};

export default GridItem;
