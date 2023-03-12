import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import ProductCardContent from "../productCard/ProductCardContent";
import { useLocation } from "react-router-dom";
import useProducts from "../../hooks/useProducts";
import CardMedia from "@mui/material/CardMedia";
import Stack from "@mui/material/Stack";

const ProductPage = () => {
  const location = useLocation();
  const { id } = location.state;
  const { data, error, loading } = useProducts(id);
  const api_string = process.env.REACT_APP_BASE_API_STRING;
  return (
    <Box
      sx={{
        flexGrow: 1,
        height: "100%",
        maxHeight: "calc(100vh - 8rem - 1px)",
        mx: 4,
        boxSizing: "border-box",
      }}
    >
      {data !== null && (
        <Grid
          container
          columnSpacing={8}
          sx={{
            height: "100%",
          }}
        >
          <Grid item xs={5}>
            <Stack
              direction="column"
              justifyContent="center"
              alignItems="center"
              sx={{
                height: "100%",
              }}
            >
              <CardMedia
                component="img"
                alt={data.name}
                image={api_string + data.src}
                sx={{}}
              />
            </Stack>
          </Grid>
          <Grid item xs={7}>
            <Stack
              direction="row"
              alignItems="center"
              sx={{
                height: "100%",
                mr: 4,
              }}
            >
              <ProductCardContent
                size="big"
                id={data.id}
                image={data.src}
                title={data.name}
                price={data.price}
                direction="row"
              />
            </Stack>
          </Grid>
        </Grid>
      )}
    </Box>
  );
};

export default ProductPage;
