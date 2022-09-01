import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { CartItem } from "../models/CartItem";
import ControlPointIcon from "@mui/icons-material/ControlPoint";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import { useCart } from "../contexts/CartContext";

const Wrapper = styled.div`
  width: 100%;
  display: flex;
`;

const ImgContainer = styled.div<{ imgUrl: string }>`
  background: url(${(props) => props.imgUrl});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  width: 50px;
  height: 50px;
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 1rem;
  margin-right: auto;
`;

const QuantityContainer = styled.div`
  display: flex;
  align-items: center;
  padding-right: 1rem;
  gap: 0.5rem;
`;

interface Props {
  cartItem: CartItem;
}

const CartDrawerItem = ({ cartItem }: Props) => {
  const [quantity, setQuantity] = useState(cartItem.quantity);
  const { addToCart } = useCart();

  // TODO: use update cart functions
  function handleSubstract() {
    addToCart(cartItem.product, -1);
    setQuantity(cartItem.quantity);
  }

  function handleAdd() {
    addToCart(cartItem.product, 1);
    setQuantity(cartItem.quantity);
  }

  return (
    <Wrapper>
      <ImgContainer imgUrl={cartItem.product.img[0]} />
      <InfoContainer>
        <span style={{ fontWeight: "700" }}>{cartItem.product.title}</span>
        <span>{cartItem.product.price * cartItem.quantity} kr</span>
      </InfoContainer>
      <QuantityContainer>
        <RemoveCircleOutlineIcon onClick={handleSubstract} />
        <span>{quantity}</span>
        <ControlPointIcon onClick={handleAdd} />
      </QuantityContainer>
    </Wrapper>
  );
};

export default CartDrawerItem;
