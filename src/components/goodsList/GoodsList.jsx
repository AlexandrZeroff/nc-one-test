import React from "react";
import Box from "@mui/material/Box";
import useProducts from "../../hooks/useProducts";
import Grid from "@mui/material/Grid";
import ProductCard from "../productCard/ProductCard";

const GoodsList = () => {
  const { products, error, loading } = useProducts();
  console.log(products);

  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        paddingTop: 4,
        paddingRight: 4,
        boxSizing: "border-box",
      }}
    >
      <Grid container columnSpacing={2} rowSpacing={4}>
        {/*products !== null && products.map((product, index) => <ProductCard />)*/}
      </Grid>
    </Box>
  );
};

export default GoodsList;
