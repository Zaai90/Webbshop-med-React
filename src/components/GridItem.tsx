import * as Icon from "@mui/icons-material";
import { Card, FormControl, IconButton, InputLabel, MenuItem, Modal, Select, SelectChangeEvent } from "@mui/material";
import { useState } from "react";
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
  transition: 0.5s ease-in-out;

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
  padding: 10px 10px 15px 10px;
  background: rgba(0, 0, 0, 0.5);
  z-index: 4;
  transition: 0.5s ease all;
  text-align: center;
  cursor: pointer;
  font-size: 12px;
  color: white;
  text-shadow: 2px 2px 4px black;
`;

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

const ModalContent = styled.div`
  position: absolute;
  background-color: #fff;
  box-shadow: 0px 11px 15px -7px rgba(0, 0, 0, 0.2), 0px 24px 38px 3px rgba(0, 0, 0, 0.14), 0px 9px 46px 8px rgba(0, 0, 0, 0.12);
  padding: 16px;
  transform: translate(-50%, -50%);
  top: 50%;
  left: 50%;
  border: 1px solid white;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  :focus-visible {
    outline: none;
  }
`;

const ImagePlaceholder = styled.div`
  height: 500px;
  width: 400px;
  background-color: black;
`;

interface Props {
  product: Product;
}

const GridItem = ({ product }: Props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [size, setSize] = useState("");
  const { addToCart } = useCart();

  const handleChange = (event: SelectChangeEvent) => {
    setSize(event.target.value as string);
  };

  function handleQuickViewClick() {
    setIsModalOpen(true);
  }
  return (
    <>
      <CardStyled>
        <NavLink to={`../product/${product.id}`}>
          <CardImageStyled imgUrl={product.img[0]} />
        </NavLink>
        <QuickView
          onClick={() => {
            handleQuickViewClick();
          }}
        >
          Quick View
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
      <Modal open={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <ModalContent>
          <ImagePlaceholder />
          <div>
            <p style={{ color: "rgb(159, 159, 159)" }}>{product.designer}</p>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "3rem" }}>
              <h3>{product.title}</h3>
              <h2>{product.price}</h2>
            </div>
            <FormControl fullWidth>
              <InputLabel>Size</InputLabel>
              <Select id="demo-simple-select" value={size} label="Size" onChange={handleChange}>
                <MenuItem value={1}>XS</MenuItem>
                <MenuItem value={2}>S</MenuItem>
                <MenuItem value={3}>M</MenuItem>
                <MenuItem value={4}>L</MenuItem>
                <MenuItem value={5}>XL</MenuItem>
              </Select>
            </FormControl>
            <button>Add to cart</button>
          </div>
        </ModalContent>
      </Modal>
    </>
  );
};

export default GridItem;
