import React from "react";
import Box from "@mui/material/Box";
import { FixedSizeList as List } from "react-window";
import AutoSizer from "react-virtualized-auto-sizer";
import ProductCard from "../productCard/ProductCard";
import { useStoreState } from "../../state";
import Typography from "@mui/material/Typography";
import { Stack } from "@mui/material";

const Favorites = () => {
  const favorites = useStoreState("favorites");

  const getProduct = ({ index, style }) => (
    <ProductCard
      dashed={false}
      direction="row"
      style={style}
      contentSize="small"
      id={favorites[index].id}
      title={favorites[index].name}
      image={favorites[index].src}
      price={favorites[index].price}
    />
  );

  return (
    <Box
      component="div"
      className="Fullsize"
      sx={{
        boxSizing: "border-box",
        py: 4,
        px: 8,
      }}
    >
      <Stack
        direction="column"
        sx={{
          borderRadius: "30px",
          boxSizing: "border-box",
          py: 4,
          px: 1
        }}
        className="DashedThick Fullsize"
      >
        <Typography
          component="h3"
          variant="h3"
          sx={{
            textTransform: "uppercase",
            ml: 4,
          }}
        >
          Favorites
        </Typography>
        <Stack
          style={{
            marginRight: 8,
          }}
          sx={{
            flexGrow: 1,
            height: "100%",
          }}
        >
          <AutoSizer>
            {({ width, height }) => (
              <List
                height={height}
                itemCount={favorites.length}
                itemSize={130}
                width={width}
              >
                {getProduct}
              </List>
            )}
          </AutoSizer>
        </Stack>
      </Stack>
    </Box>
  );
};

export default Favorites;
