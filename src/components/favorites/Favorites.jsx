import React from "react";
import Box from "@mui/material/Box";
import { FixedSizeList as List } from "react-window";
import AutoSizer from "react-virtualized-auto-sizer";
import ProductCard from "../productCard/ProductCard";

const Favorites = () => {
  const Row = ({ index, style }) => <div style={style}>Row {index + 1}</div>;

  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        p: 4,
        boxSizing: "border-box",
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
          p: 2,
        }}
      >
        <AutoSizer>
          {({ height, width }) => (
            <List height={height} itemSize={35} itemCount={10} width={width}>
              {Row}
            </List>
          )}
        </AutoSizer>
      </Box>
    </Box>
  );
};

export default Favorites;
