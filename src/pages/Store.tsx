import styled from "styled-components";
import GridItem from "../components/GridItem";
import MainContent from "../components/MainContent";
import { useProducts } from "../contexts/ProductContext";
import { Snackbar } from "@mui/material";
import MuiAlert, { AlertProps } from "@mui/material/Alert";
import React, { useState } from "react";
import { Product } from "../ProductData";

const StoreGridStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.5rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
`;

const Store = () => {
  const { products } = useProducts();
  const [isSnackBarOpen, setIsSnackBarOpen] = useState(false);
  const [productTitle, setProductTitle] = useState<string>("");

  const handleClose = (event: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === "clickaway") {
      return;
    }

    setIsSnackBarOpen(false);
  };

  const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });

  function openSnackBar(productTitle: string) {
    setIsSnackBarOpen(true);
    setProductTitle(productTitle);
  }

  return (
    <>
      <MainContent>
        <StoreGridStyled>
          {products.map((product) => (
            <GridItem key={product.id} product={product} openSnackBar={openSnackBar} />
          ))}
        </StoreGridStyled>
      </MainContent>
      <Snackbar open={isSnackBarOpen} autoHideDuration={3000} onClose={handleClose} anchorOrigin={{ vertical: "bottom", horizontal: "center" }}>
        <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
          {productTitle} was added to the cart!
        </Alert>
      </Snackbar>
    </>
  );
};

export default Store;
