import { Button } from "@mui/material";
import { useState } from "react";
import styled from "styled-components";
import MainContent from "../components/MainContent";
import { useCart } from "../contexts/CartContext";

const CartItemCard = styled.div`
  display: flex;
  justify-content: start;
  border: 1px solid black;
`;

const Image = styled.img`
  height: 200px;
  flex: 1;
`;

const CartItemInfo = styled.div`
  flex: 1;
`;

const Title = styled.div`
  font-weight: bold;
`;

const Right = styled.div`
  display: flex;
  flex-direction: column;
`;

const CartButtons = styled.div`
  flex: 1;
`;

const Checkout = () => {
  const [isPayed, setIsPayed] = useState(false);

  const { cart, totalAmount } = useCart();
  return (
    <MainContent>
      <div>Checkout</div>
      <div>
        {cart.map((cartItem) => (
          <CartItemCard key={cartItem.product.id}>
            <Image src={cartItem.product.img[0]} />
            <CartItemInfo>
              <Title>{cartItem.product.title}</Title>
              <div>{cartItem.product.designer}</div>
              <Button>+</Button>
              <Button>-</Button>
            </CartItemInfo>
            <Right>
              <CartButtons>
                <Button>🩲</Button>
                <Button>🗑</Button>
              </CartButtons>
              <div>{cartItem.product.price * cartItem.quantity}</div>
            </Right>
          </CartItemCard>
        ))}
      </div>
      <div>{totalAmount}</div>
    </MainContent>
  );
};

export default Checkout;
