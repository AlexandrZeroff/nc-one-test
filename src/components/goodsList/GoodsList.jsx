import React from "react";
import Box from "@mui/material/Box";
import useProducts from "../../hooks/useProducts";

const GoodsList = () => {
  const products = useProducts();
  console.log(products)

  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        p: 4,
        boxSizing: "border-box",
      }}
    >
      {/* {products.map((product, index) => (
        <div>{product}</div>
      ))} */}
    </Box>
  );
};

export default GoodsList;
