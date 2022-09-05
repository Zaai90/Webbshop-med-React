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
            <a href={`/product/${cartItem.product.id}`}>
            <Image src={cartItem.product.img[0]} />
            </a>
            
            <div style={{width: '100%', padding: '1rem'}}>

              <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between'}}>
            <div style={{flex: 1}}>
              <div>{cartItem.product.title}</div>
              <div>{cartItem.product.designer}</div>
              <div>{cartItem.product.price}</div>
            </div>
            
            <div style={{flex: 1, display: 'flex', justifyContent: 'center'}}>
              <Button>+</Button>
              <Button>-</Button>
            </div>
            <div style={{flex: 1, display: 'flex', justifyContent: 'end'}}>
                <Button>Delete</Button>
              </div>
              </div>
              <div>{cartItem.product.price * cartItem.quantity}</div>
            </div>
          </CartItemCard>
        ))}
      </div>
      <div>{totalAmount}</div>
      <button>Pay now 🤑</button>
    </MainContent>
  );
};

export default Checkout;
