import { Container, FormControl, List, ListItem, ListItemButton, ListItemText, Typography } from "@mui/material";
import { SnackbarProvider } from "notistack";
import { useState } from "react";
import styled from "styled-components";
import GridItem from "../components/GridItem";
import MainContent from "../components/MainContent";
import { useProducts } from "../contexts/ProductContext";

const StoreGridStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.5rem;
  padding: 1rem 0;

  @media (max-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
`;

const CategoryList = styled(List)`
  li {
    border-top: 1px solid rgba(0, 0, 0, 0.35);
  }

  li div:hover {
    background: transparent;
    text-decoration: underline;
  }

  div:last-child li {
    border-bottom: 1px solid rgba(0, 0, 0, 0.35);
  }

  span {
    font-size: 1rem;
    font-weight: 700;
  }

  .Mui-selected {
    text-decoration: underline;
    background-color: transparent !important;
    color: rgba(0, 0, 0, 0.35) !important;
    transition: 1s ease all;
  }
`;

const Store = () => {
  const { products } = useProducts();
  const [value, setValue] = useState("All");

  const handleClick = (name: string) => {
    setValue(name);
  };

  const categories = products.filter((x, i) => products.findIndex((y) => x.category === y.category) === i);

  return (
    <>
      <SnackbarProvider
        autoHideDuration={3000}
        maxSnack={3}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <MainContent>
          <FormControl sx={{ width: "100%", display: "grid", gridTemplateColumns: "1fr 5fr" }}>
            <CategoryList sx={{ width: "100%", bgcolor: "background.paper" }}>
              <Container onClick={() => handleClick("All")}>
                <ListItem disablePadding>
                  <ListItemButton selected={value === "All" ? true : false}>
                    <ListItemText primary={"All".toUpperCase()} />
                  </ListItemButton>
                </ListItem>
              </Container>
              {categories.map((product) => (
                <Container onClick={() => handleClick(product.category)}>
                  <ListItem disablePadding>
                    <ListItemButton selected={value === product.category ? true : false}>
                      <ListItemText primary={product.category.toUpperCase()} />
                    </ListItemButton>
                  </ListItem>
                </Container>
              ))}
            </CategoryList>
            <Container>
              <Typography variant="h4" sx={{ borderBottom: "1px solid rgba(0,0,0,0.35)" }}>
                {value}
              </Typography>
              <StoreGridStyled>
                {value === "All" && products.map((product) => <GridItem key={product.id} product={product} />)}
                {products
                  .filter((product) => product.category === value)
                  .map((product) => (
                    <GridItem key={product.id} product={product} />
                  ))}
              </StoreGridStyled>
            </Container>
          </FormControl>
        </MainContent>
      </SnackbarProvider>
    </>
  );
};

export default Store;
