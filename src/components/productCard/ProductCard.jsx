import React from "react";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { useGlobalState } from "../../state";
import Grid from "@mui/material/Grid";
import { Link } from "react-router-dom";

const ProductCard = ({ id, image, title, price }) => {
  const [favorites, updateFavorites] = useGlobalState("favoriteProducts");

  const api_string = process.env.REACT_APP_BASE_API_STRING;
  const image_url = api_string + image;

  const handleAddFavorites = (e) => {
    e.preventDefault();
    updateFavorites("favoriteProducts", [
      {
        id: id,
        name: title,
        src: image,
        price: price,
      },
    ]);
  };

  return (
    <Link to={"/" + id} style={{ textDecoration: "none" }}>
      <Card
        sx={{
          width: "100%",
          height: "100%",
          boxSizing: "border-box",
          borderWidth: "2px",
          borderStyle: "dashed",
          borderColor: "secondary.main",
          borderRadius: "30px",
          px: 2,
          py: 1,
          marginBottom: 4,
          display: "flex",
          flexWrap: "wrap",
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
              onClick={handleAddFavorites}
            >
              <FavoriteBorderIcon />
            </IconButton>
          </CardActions>
        </CardContent>
      </Card>
    </Link>
  );
};

export default ProductCard;
