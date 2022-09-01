import { Button } from "@mui/material";
import { useState } from "react";
import styled from "styled-components";
import { Product } from "../ProductData";

const ProductCard = styled.div`
  display: flex;
  max-width: 760px;
  flex-direction: column;
`;

const Row = styled.div`
  display: flex;
  border: 1px solid black;
  gap: 2rem;
  align-items: center;
`;

const Image = styled.img`
  height: 50px;
`;

const Info = styled.div<{ open: boolean }>`
  display: ${(props) => (props.open ? "flex" : "none")};
  transition: all 2s;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
`;

interface Props {
  product: Product;
}

const AdminProductCard = ({ product }: Props) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <ProductCard key={product.id} onClick={() => setIsOpen(!isOpen)}>
      <Row>
        <Image src={product.img[0]} />
        <div>{product.id}</div>
        <div>{product.title}</div>
      </Row>
      <Info open={isOpen}>
        <div>{product.designer}</div>
        <div>{product.description}</div>
        <div>{product.price}</div>
        <div>{product.category}</div>
        <div>{product.color}</div>
        <div>{product.size}</div>
        <ButtonContainer>
          <Button>Edit</Button>
          <Button>Delete</Button>
        </ButtonContainer>
      </Info>
    </ProductCard>
  );
};

export default AdminProductCard;
