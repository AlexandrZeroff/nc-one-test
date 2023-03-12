import React, { useState } from "react";
import useProducts from "../../hooks/useProducts";
import Grid from "@mui/material/Grid";
import ProductCard from "../productCard/ProductCard";
import { useGlobalState } from "../../state";

const GoodsList = () => {
  const { data, error, loading } = useProducts();
  const [favorites, updateFavorites] = useGlobalState("favoriteProducts");
  
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
              paddingBottom: 4,
            }}
            key={index}
          >
            <ProductCard
              dashed={true}
              direction="column"
              contentSize="small"
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
