import { Container, FormControl, List, ListItem, ListItemButton, ListItemText, Typography, useMediaQuery } from "@mui/material";
import { NavLink, Outlet, useParams } from "react-router-dom";
import styled from "styled-components";
import MainContent from "../components/MainContent";
import StoreGrid from "../components/StoreGrid";
import { useProducts } from "../contexts/ProductContext";
import theme from "../utils/Theme";

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
  const { category } = useParams();
  const { products } = useProducts();

  const smScreen = useMediaQuery(theme.breakpoints.down("tablet"));
  const tabletScreen = useMediaQuery(theme.breakpoints.down("md"));
  const categories = products.filter((x, i) => products.findIndex((y) => x.category === y.category) === i).map((x) => x.category.toLowerCase());
  categories.unshift("all");

  return (
    <>
      <MainContent>
        <FormControl sx={{ width: "100%", display: smScreen ? "flex" : "grid", gap: smScreen ? "1rem" : undefined, gridTemplateColumns: "1fr 5fr" }}>
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
            {categories.map((c) => (
              <NavLink key={c} style={{ textDecoration: "none", color: "black" }} to={c === "all" ? "" : "category/" + c}>
                <Container className={"categoryParent"} sx={{ padding: tabletScreen ? "0" : undefined }}>
                  <ListItem disablePadding sx={{ border: smScreen ? "1px solid rgba(0,0,0,0.35)" : undefined }}>
                    <ListItemButton
                      selected={c === category || (c === "all" && category === undefined) ? true : false}
                      sx={{ minWidth: "max-content !important" }}
                    >
                      <ListItemText sx={{ wordBreak: "keep-all" }} primary={c.toUpperCase()} />
                    </ListItemButton>
                  </ListItem>
                </Container>
              </NavLink>
            ))}
          </CategoryList>
          <Container>
            <Typography variant="h4" sx={{ borderBottom: "1px solid rgba(0,0,0,0.35)" }}>
              {categories.includes(category || "") && category ? category.split("")[0].toUpperCase() + category.slice(1) : "All"}
            </Typography>
            {category ? <Outlet /> : <StoreGrid />}
          </Container>
        </FormControl>
      </MainContent>
    </>
  );
};

export default Store;
