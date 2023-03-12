import React, { useState } from "react";
import CardContent from "@mui/material/CardContent";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Typography from "@mui/material/Typography";
import { useGlobalState } from "../../state";
import { Stack } from "@mui/material";

const ProductCardContent = ({ id, image, title, price, size, direction }) => {
  const [favorites, updateFavorites] = useGlobalState("favoriteProducts");

  const isFavorite = favorites.some((product) => {
    if (product.id === id) {
      return true;
    }
    return false;
  });

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

  const [favorite, setFavorite] = useState(isFavorite);

  const addToFavorites = (e) => {
    e.preventDefault();
    updateFavorites([
      ...favorites,
      {
        id: id,
        name: title,
        src: image,
        price: price,
      },
    ]);
    setFavorite(!favorite);
  };

  const removeFromFavorites = (e) => {
    e.preventDefault();
    updateFavorites(favorites.filter((product) => product.id !== id));
    setFavorite(!favorite);
  };

  return (
    <CardContent
      sx={{
        width: "100%",
        mt: styles.cardMarginTop,
      }}
    >
      <Typography
        variant={styles.titleVariant}
        component={styles.titleVariant}
        color="secondary.main"
      >
        {title}
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
          variant={styles.priceVariant}
          component={styles.priceVariant}
          color="secondary.main"
          sx={{
            fontWeight: styles.priceWeight,
          }}
        >
          $ {price}
        </Typography>
        <IconButton
          aria-label="Add to favorites"
          onClick={isFavorite ? removeFromFavorites : addToFavorites}
          size={styles.btnSize}
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
