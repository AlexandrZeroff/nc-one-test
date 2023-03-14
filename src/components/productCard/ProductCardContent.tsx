import React, { useState } from "react";
import CardContent from "@mui/material/CardContent";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Typography from "@mui/material/Typography";
import {
  useStoreState,
  addToFavorites,
  removeFromFavorites,
} from "../../state";
import { Stack } from "@mui/material";
import { ProductCardContentProps, BtnSize } from "../../types/types";

const ProductCardContent = ({
  id,
  src,
  name,
  price,
  size,
  direction,
}: ProductCardContentProps) => {
  const favorites = useStoreState("favorites");

  const handleAddProduct = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    addToFavorites(event, {
      id: id,
      name: name,
      src: src,
      price: price,
    });
    setFavorite(!favorite);
  };

  const handleRemoveProduct = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    removeFromFavorites(event, id);
    setFavorite(!favorite);
  };

  const isFavorite = favorites.some((product) => {
    if (product.id === id) {
      return true;
    }
    return false;
  });

  const [favorite, setFavorite] = useState(isFavorite);

  const componentStyles =
    size === "small"
      ? {
          titleVariant: "h4",
          priceVariant: "h3",
          priceWeight: 600,
          actionMarginTop: 1,
          btnSize: "small",
        }
      : {
          titleVariant: "h1",
          priceVariant: "h1",
          priceWeight: 600,
          actionMarginTop: 4,
          btnSize: "large",
        };

  const styles =
    direction === "row"
      ? {
          ...componentStyles,
          cardMarginTop: 0,
        }
      : {
          ...componentStyles,
          cardMarginTop: "auto",
        };

  return (
    <CardContent
      sx={{
        width: "100%",
        mt: styles.cardMarginTop,
      }}
    >
      <Typography
        variant={styles.titleVariant as "h1" | "h4"}
        component={styles.titleVariant as "h1" | "h4"}
        color="secondary.main"
      >
        {name}
      </Typography>
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        sx={{
          width: "100%",
          m: 0,
          marginTop: styles.actionMarginTop,
        }}
      >
        <Typography
          variant={styles.priceVariant as "h1" | "h3"}
          component={styles.priceVariant as "h1" | "h3"}
          color="secondary.main"
          sx={{
            fontWeight: styles.priceWeight,
          }}
        >
          $ {price}
        </Typography>
        <IconButton
          aria-label="Add to favorites"
          onClick={
            isFavorite
              ? (e) => handleRemoveProduct(e)
              : (e) => handleAddProduct(e)
          }
          size={styles.btnSize as BtnSize}
          sx={{
            borderRadius: 1,
            color: favorite ? "secondary.main" : "white",
            backgroundColor: "primary.main",
          }}
        >
          <FavoriteIcon fontSize="inherit" />
        </IconButton>
      </Stack>
    </CardContent>
  );
};

export default ProductCardContent;
