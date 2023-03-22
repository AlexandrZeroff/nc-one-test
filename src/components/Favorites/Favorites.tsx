import React from "react";
import { FixedSizeList as List } from "react-window";
import AutoSizer from "react-virtualized-auto-sizer";
import ProductCard from "../ProductCard/ProductCard";
import { useStoreState } from "../../state";
import { Size } from "../../types/types";
import {
  FavoritesContainer,
  FavoritesOuterStack,
  FavoritesHeader,
  FavoritesInnerStack,
} from "../../app/themeComponents";

interface RowGeneratorProps {
  index: number;
  style: React.CSSProperties;
}

const Favorites = () => {
  const favorites = useStoreState("favorites");

  const getProduct = ({ index, style }: RowGeneratorProps) => (
    <ProductCard
      dashed={false}
      direction="row"
      style={style}
      contentSize="small"
      {...favorites[index]}
    />
  );

  return (
    <FavoritesContainer className="Fullsize">
      <FavoritesOuterStack direction="column" className="DashedThick Fullsize">
        <FavoritesHeader variant="h3">Favorites</FavoritesHeader>
        <FavoritesInnerStack className="Fullsize">
          <AutoSizer>
            {({ width, height }: Size) => (
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
        </FavoritesInnerStack>
      </FavoritesOuterStack>
    </FavoritesContainer>
  );
};

export default Favorites;
