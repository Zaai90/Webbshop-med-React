import * as Icon from "@mui/icons-material/";
import { Button, IconButton } from "@mui/material";
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
  const handleSubmit = () => {};
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

            <div style={{ width: "100%", padding: "1rem" }}>
              <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between" }}>
                <div style={{ flex: 1 }}>
                  <div>{cartItem.product.title}</div>
                  <div>{cartItem.product.designer}</div>
                  <div>{cartItem.product.price}</div>
                </div>

                <div style={{ display: "flex", flex: 1, alignItems: "center" }}>
                  <div style={{ flex: 1, display: "flex", alignItems: "center" }}>
                    <Button>+</Button>
                    <div>{cartItem.quantity}</div>
                    <Button>-</Button>
                  </div>
                  <div style={{ flex: 1, display: "flex", justifyContent: "end" }}>
                    <IconButton sx={{ alignSelf: "end" }} onClick={() => console.log("Hello")}>
                      <Icon.DeleteOutline sx={{ fontSize: "1.3rem" }} />
                    </IconButton>
                  </div>
                </div>
              </div>
              <div>{cartItem.product.price * cartItem.quantity}</div>
            </div>
          </CartItemCard>
        ))}
      </div>
      <div>{totalAmount}</div>
    </MainContent>
  );
};

export default Checkout;
