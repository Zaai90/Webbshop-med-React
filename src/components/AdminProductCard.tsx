import { Button } from "@mui/material";
import { useEffect, useState } from "react";
import styled from "styled-components";
import Form from "../components/Form";
import { useProducts } from "../contexts/ProductContext";
import { Product } from "../ProductData";

const ProductCard = styled.div`
  display: flex;
  max-width: 760px;
  flex-direction: column;
  border: 1px solid black;
`;

const Row = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;
`;

const Image = styled.img`
  height: 50px;
`;

const Info = styled.div<{ open: boolean }>`
  display: ${(props) => (props.open ? "flex" : "none")};
  transition: all 2s;
  flex-direction: column;
  padding: 1rem;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  cursor: pointer;
`;

interface Props {
  product: Product;
}

const AdminProductCard = ({ product }: Props) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isEditMode, setIsEditMode] = useState<boolean>(false);

  const { deleteProduct, editProduct } = useProducts();

  useEffect(() => {
    if (!isOpen) setIsEditMode(false);
  }, [isOpen]);

  return (
    <ProductCard key={product.id}>
      <Row onClick={() => setIsOpen(!isOpen)}>
        <Image src={product.img[0]} />
        <div>{product.id}</div>
        <div>{product.title}</div>
      </Row>

      {!isEditMode && (
        <Info open={isOpen}>
          <div>Designer: {product.designer}</div>
          <div>Description: {product.description}</div>
          <div>Price: {product.price}</div>
          <div>Category: {product.category}</div>
          <div>Color: {product.color}</div>
          {product.size && <div>Size: {product.size}</div>}
          <ButtonContainer>
            <Button onClick={() => setIsEditMode(!isEditMode)}>Edit</Button>
            <Button onClick={() => deleteProduct(product)}>Delete</Button>
          </ButtonContainer>
        </Info>
      )}

      {isEditMode && isOpen && (
        <div>
          <Form product={product} />
          <Button type="submit">Update</Button>
        </div>
      )}
    </ProductCard>
  );
};

export default AdminProductCard;
