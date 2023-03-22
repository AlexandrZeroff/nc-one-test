import React, { useState } from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Typography from "@mui/material/Typography";
import {
  useStoreState,
  addToFavorites,
  removeFromFavorites,
} from "../../state";
import { ProductCardContentProps, BtnSize } from "../../types/types";
import {
  ProductCardContentContainer,
  ProductCardContentStack,
  StyledIconButton,
} from "../../app/themeComponents";

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
          actionMarginTop: ".5rem",
          btnSize: "small",
        }
      : {
          titleVariant: "h1",
          priceVariant: "h1",
          priceWeight: 600,
          actionMarginTop: "2rem",
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
    <ProductCardContentContainer
      sx={{
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
      <ProductCardContentStack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        actionMarginTop={styles.actionMarginTop}
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
        <StyledIconButton
          aria-label="Add to favorites"
          onClick={
            isFavorite
              ? (e) => handleRemoveProduct(e)
              : (e) => handleAddProduct(e)
          }
          size={styles.btnSize as BtnSize}
          sx={{
            color: favorite ? "secondary.main" : "white",
          }}
        >
          <FavoriteIcon fontSize="inherit" />
        </StyledIconButton>
      </ProductCardContentStack>
    </ProductCardContentContainer>
  );
};

export default ProductCardContent;
