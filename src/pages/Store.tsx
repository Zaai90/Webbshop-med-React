import { Grid } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
import MainContent from "../components/MainContent";
import { products as procutsArr, Product } from "../ProductData";

const Store = () => {
  const [products, setProduct] = useState<Product[]>(procutsArr);

  return (
    <MainContent>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={3}>
          {products.map((productCard) => (
            <Grid bgcolor={"blue"} item xs={6} md={4}>
              {productCard.designer}
            </Grid>
          ))}
        </Grid>
      </Box>
    </MainContent>
  );
};

export default Store;
