import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useGlobalState } from "../../state";
import Grid from "@mui/material/Grid";
import { Link } from "react-router-dom";

const ProductCard = ({ id, image, title, price, dashed, direction }) => {
  const [favorites, updateFavorites] = useGlobalState("favoriteProducts");

  const flexDirection = direction === "row" ? "row" : "column";

  const api_string = process.env.REACT_APP_BASE_API_STRING;
  const image_url = api_string + image;

  const isFavorite = favorites.some((product) => {
    if (product.id === id) {
      return true;
    }
    return false;
  });

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
    <Link to={"/" + id} style={{ textDecoration: "none" }}>
      <Card
        className={dashed ? "DashedCard" : ""}
        sx={{
          width: "100%",
          height: "100%",
          boxSizing: "border-box",
          borderRadius: "30px",
          px: 3,
          py: 1,
          marginBottom: 4,
          display: "flex",
          flexDirection: { flexDirection },
        }}
      >
        <CardMedia component="img" alt={title} image={image_url} sx={{}} />
        <CardContent
          sx={{
            width: "100%",
            mt: "auto",
          }}
        >
          <Typography variant="h4" component="h4" color="secondary.main">
            {title}
          </Typography>
          <CardActions
            sx={{
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              m: 0,
            }}
          >
            <Typography variant="h3" component="h3" color="secondary.main">
              $ {price}
            </Typography>
            <IconButton
              aria-label="Add to favorites"
              onClick={isFavorite ? removeFromFavorites : addToFavorites}
              sx={{
                borderRadius: 1,
                color: favorite ? "secondary.main" : "white",
                backgroundColor: "primary.main",
              }}
            >
              <FavoriteIcon />
            </IconButton>
          </CardActions>
        </CardContent>
      </Card>
    </Link>
  );
};

export default ProductCard;
