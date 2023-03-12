import React from "react";
import Box from "@mui/material/Box";
import { FixedSizeList as List } from "react-window";
import ListItem from "@mui/material/ListItem";
import AutoSizer from "react-virtualized-auto-sizer";
import ProductCard from "../productCard/ProductCard";
import { useGlobalState } from "../../state";
import Typography from "@mui/material/Typography";
import { Stack } from "@mui/material";

const Favorites = () => {
  const [favorites] = useGlobalState("favoriteProducts");

  const getProduct = ({ index }) => (
    <ProductCard
      key={index}
      dashed={false}
      direction="row"
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
      sx={{
        width: "100%",
        height: "100%",
        boxSizing: "border-box",
        py: 4,
        paddingLeft: 4,
        paddingRight: 8,
      }}
    >
      <Stack
        direction="column"
        sx={{
          width: "100%",
          height: "100%",
          borderRadius: "30px",
          boxSizing: 'border-box',
          py: 4
        }}
        className="DashedCard"
      >
        <Typography
          component="h3"
          variant="h3"
          sx={{
            textTransform: "uppercase",
            ml: 2,
          }}
        >
          Favorites
        </Typography>
        <Stack
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
                itemSize={150}
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
