import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

const ProductCard = ({ image, title, price }) => {
  return (
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
        py: 3,
        display: "flex",
        flexWrap: "wrap",
      }}
    >
      <CardMedia component="img" alt={title} image={image} />
      <CardContent
        sx={{
          py: 1,
        }}
      >
        <Typography variant="p" component="p" color="secondary.main">
          {title}
        </Typography>
        <CardActions
          sx={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Typography variant="h3" component="h3" color="secondary.main">
            $ {price}
          </Typography>
          <IconButton aria-label="Add to favorites">
            <FavoriteBorderIcon />
          </IconButton>
        </CardActions>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
