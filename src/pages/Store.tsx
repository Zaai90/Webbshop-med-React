import { Grid, Card, CardHeader, CardMedia, CardContent } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
import GridItem from "../components/GridItem";
import MainContent from "../components/MainContent";
import { products as procutsArr, Product } from "../ProductData";

const Store = () => {
  const [products, setProduct] = useState<Product[]>(procutsArr);

  return (
    <MainContent>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container>
          {products.map((product) => (
            <GridItem product={product} />
          ))}
        </Grid>
      </Box>
    </MainContent>
  );
};

export default Store;
