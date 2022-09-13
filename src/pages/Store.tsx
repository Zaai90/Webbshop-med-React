import { Container, FormControl, List, ListItem, ListItemButton, ListItemText, Typography, useMediaQuery } from "@mui/material";
import { SnackbarProvider } from "notistack";
import { useState } from "react";
import styled from "styled-components";
import GridItem from "../components/GridItem";
import MainContent from "../components/MainContent";
import { useProducts } from "../contexts/ProductContext";
import theme from "../utils/Theme";

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

  .categoryParent {
    padding: 0 !important;
  }
`;

const Store = () => {
  const { products } = useProducts();
  const [value, setValue] = useState("All");

  const smScreen = useMediaQuery(theme.breakpoints.down("tablet"));
  const tabletScreen = useMediaQuery(theme.breakpoints.down("md"));

  const handleClickCategory = (name: string) => {
    setValue(name);
  };

  const categories = products.filter((x, i) => products.findIndex((y) => x.category === y.category) === i);

  return (
    <>
      <SnackbarProvider
        autoHideDuration={2000}
        maxSnack={2}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <MainContent>
          <FormControl
            sx={{ width: "100%", display: smScreen ? "flex" : "grid", gap: smScreen ? "1rem" : undefined, gridTemplateColumns: "1fr 5fr" }}
          >
            <CategoryList
              sx={{
                width: "100%",
                bgcolor: "background.paper",
                overflowX: smScreen ? "scroll" : undefined,
                display: smScreen ? "flex" : undefined,
                gap: smScreen ? "1rem" : undefined,
                padding: smScreen ? "16px" : undefined,
              }}
            >
              <Container className={"categoryParent"} onClick={() => handleClickCategory("All")} sx={{ padding: tabletScreen ? "0" : undefined }}>
                <ListItem disablePadding sx={{ border: smScreen ? "1px solid rgba(0,0,0,0.35)" : undefined }}>
                  <ListItemButton selected={value === "All" ? true : false}>
                    <ListItemText primary={"All".toUpperCase()} />
                  </ListItemButton>
                </ListItem>
              </Container>
              {categories.map((product) => (
                <Container
                  key={product.id}
                  className={"categoryParent"}
                  onClick={() => handleClickCategory(product.category)}
                  sx={{ padding: tabletScreen ? "0" : undefined }}
                >
                  <ListItem disablePadding sx={{ border: smScreen ? "1px solid rgba(0,0,0,0.35)" : undefined }}>
                    <ListItemButton selected={value === product.category ? true : false} sx={{ minWidth: "max-content !important" }}>
                      <ListItemText sx={{wordBreak: 'keep-all'}} primary={product.category.toUpperCase()} />
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
