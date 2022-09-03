import * as Icon from "@mui/icons-material/";
import { useState } from "react";
import styled from "styled-components";
import { useCart } from "../contexts/CartContext";
import { CartItem } from "../models/CartItem";

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  padding: 0.5rem 0;
  border-bottom: 1px solid gray;
`;

const ImgContainer = styled.div<{ imgUrl: string }>`
  background: url(${(props) => props.imgUrl});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  width: 70px;
  height: 70px;
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 1rem;
  margin-right: auto;
`;

const QuantityContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-right: 1rem;
  gap: 0.5rem;
`;

const ButtonWrapper = styled.div`
  display: flex;
  flex-grow: 1;
  align-items: center;
  gap: 0.5rem;
  align-items: center;

  & span {
    font-size: 1.3rem;
  }
`;

interface Props {
  cartItem: CartItem;
}

const CartDrawerItem = ({ cartItem }: Props) => {
  const { addToCart, removeFromCart, getItemQty } = useCart();

  // TODO: use update cart functions
  function handleSubstract() {
    removeFromCart(cartItem.product.id, 1);
  }

  function handleAdd() {
    addToCart(cartItem.product, 1);
  }

  return (
    <Wrapper>
      <ImgContainer imgUrl={cartItem.product.img[0]} />
      <InfoContainer>
        {/* TODO Use mui Typography instead of spans?
         or at least fix proper style */}
        <span style={{ fontWeight: "700" }}>{cartItem.product.title}</span>
        <span style={{ fontWeight: "300", textTransform: "uppercase", fontSize: ".7rem" }}>
          ( {cartItem.product.color && cartItem.product.color}
          {cartItem.product.size && " " + cartItem.product.size} )
        </span>
        <span>{cartItem.product.price * cartItem.quantity} kr</span>
      </InfoContainer>
      <QuantityContainer>
        <Icon.DeleteOutline sx={{ fontSize: "1.3rem", alignSelf: "end" }} />
        <ButtonWrapper>
          <Icon.Remove onClick={handleSubstract} />
          <span>{getItemQty(cartItem.product.id)}</span>
          <Icon.Add onClick={handleAdd} />
        </ButtonWrapper>
      </QuantityContainer>
    </Wrapper>
  );
};

export default CartDrawerItem;
