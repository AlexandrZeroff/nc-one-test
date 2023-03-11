import React from "react";
import Box from "@mui/material/Box";
import { FixedSizeList as List } from "react-window";
import AutoSizer from "react-virtualized-auto-sizer";
import ProductCard from "../productCard/ProductCard";
import { useGlobalState } from "../../state";

const Favorites = () => {
  const [favorites, updateFavorites] = useGlobalState("favoriteProducts");

  const getFavoriteProducts = () => {};
  /* {
      currentFavorites.map((product, index) => (
        <ProductCard
          key={index}
          id={product.id}
          title={product.name}
          image={product.src}
          price={product.price}
        />
      ))} */

  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        boxSizing: "border-box",
        py: 4,
        paddingLeft: 4,
        paddingRight: 6,
      }}
    >
      <Box
        sx={{
          width: "100%",
          height: "100%",
          boxSizing: "border-box",
          borderWidth: "2px",
          borderStyle: "dashed",
          borderColor: "secondary.main",
          borderRadius: "30px",
          p: 4,
        }}
      >
        <AutoSizer>
          {({ height, width }) => (
            <List
              height={height}
              itemSize={80}
              itemCount={favorites.length}
              width={width}
            >
              {({ index, style }) => (
                <ProductCard
                  key={index}
                  id={favorites[index].id}
                  title={favorites[index].name}
                  image={favorites[index].src}
                  price={favorites[index].price}
                />
              )}
            </List>
          )}
        </AutoSizer>
      </Box>
    </Box>
  );
};

export default Favorites;
