import React from "react";
import Box from "@mui/material/Box";
import useProducts from "../../hooks/useProducts";
import Grid from "@mui/material/Grid";
import ProductCard from "../productCard/ProductCard";

const GoodsList = () => {
  const { data, error, loading } = useProducts();
  console.log(data);

  return (
    <Grid
      container
      sx={{
        overflowY: "scroll",
        maxHeight: "calc(100vh - 8rem - 1px)",
        marginTop: 4,
        marginRight: 4,
        boxSizing: "border-box",
      }}
    >
      {data !== null &&
        data.map((product, index) => (
          <Grid
            item
            xs={3}
            sx={{
              px: 1,
              paddingBottom: 4
            }}
          >
            <ProductCard
              key={index}
              id={product.id}
              title={product.name}
              image={product.src}
              price={product.price}
            />
          </Grid>
        ))}
    </Grid>
  );
};

export default GoodsList;
