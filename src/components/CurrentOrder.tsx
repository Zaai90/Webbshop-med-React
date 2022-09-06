import * as Icon from "@mui/icons-material/";
import { Fade, IconButton, Tooltip } from "@mui/material";
import { useState } from "react";
import styled from "styled-components";
import MainContent from "../components/MainContent";
import { useCart } from "../contexts/CartContext";
import { CartItem } from "../models/CartItem";

const CartItemCard = styled.div`
  display: flex;
  justify-content: start;
  border-bottom: 1px solid black;

  a {
    margin: 20px 0;
  }
`;

const Image = styled.img`
  height: 100px;
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

const CurrentOrder = () => {
  const [isPayed, setIsPayed] = useState(false);
  const handleSubmit = () => {};
  const { addToCart, removeFromCart, getItemQty, removeItemFromCart, cart, totalAmount } = useCart();

  // TODO: use update cart functions
  function handleSubstract(cartItem: CartItem) {
    removeFromCart(cartItem.product.id, 1);
  }

  function handleAdd(cartItem: CartItem) {
    addToCart(cartItem.product, 1);
  }

  function handleRemove(cartItem: CartItem) {
    removeItemFromCart(cartItem);
  }
  return (
    <div>
      <div>Your order</div>
        {cart.map((cartItem) => (
          <CartItemCard key={cartItem.product.id}>
            <a href={`/product/${cartItem.product.id}`}>
              <Image src={cartItem.product.img[0]} />
            </a>

            <div style={{ width: "100%", padding: "1rem" }}>
              <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between" }}>
                <div style={{ flex: 1 }}>
                  <div>{cartItem.product.title}</div>
                  <div>{cartItem.product.designer}</div>
                  <div>{cartItem.product.price}</div>
                </div>

                <div style={{ display: "flex", flex: 1, alignItems: "center" }}>
                  <ButtonWrapper>
                    <IconButton onClick={() => handleSubstract(cartItem)}>
                      <Icon.Remove />
                    </IconButton>
                    <span>{getItemQty(cartItem.product.id)}</span>
                    <IconButton onClick={() => handleAdd(cartItem)}>
                      <Icon.Add />
                    </IconButton>
                  </ButtonWrapper>
                  <div style={{ flex: 1, display: "flex", justifyContent: "end" }}>
                    <Tooltip TransitionComponent={Fade} TransitionProps={{ timeout: 500 }} title={"Remove from cart"} placement="right" arrow>
                      <IconButton onClick={() => handleRemove(cartItem)}>
                        <Icon.DeleteOutline sx={{ fontSize: "2rem" }} />
                      </IconButton>
                    </Tooltip>
                  </div>
                </div>
              </div>
              <div style={{display: 'flex', justifyContent: 'end'}}>
              <div style={{justifySelf: 'end', display: 'flex', alignItems: 'end'}}>{cartItem.product.price * cartItem.quantity}</div>
              </div>
            </div>
          </CartItemCard>
        ))}
          <div style={{display: 'flex', justifyContent: 'end', gap: '1rem', padding: '1rem'}}>
            <div>Total price: </div>
      <div>{totalAmount}</div>
          </div>
    </div>
  );
};

export default CurrentOrder;
