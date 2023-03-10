import CardMedia from "@mui/material/CardMedia";
import { Link } from "react-router-dom";
import ProductCardContent from "./ProductCardContent";
import { Stack } from "@mui/material";
import { ProductCardProps } from "../../types/types";

const ProductCard = ({
  id,
  src,
  name,
  price,
  dashed,
  direction,
  style,
  contentSize,
}: ProductCardProps) => {
  const api_string = process.env.REACT_APP_BASE_API_STRING;
  const image_url = api_string + src;

  const flexDirection = direction === "row" ? "row" : "column";

  return (
    <Link
      to={"/" + id}
      state={{ id: id }}
      style={{ ...style, textDecoration: "none" }}
    >
      <Stack
        className={dashed ? "DashedThin" : ""}
        direction={flexDirection}
        alignItems={direction === "row" ? "center" : ""}
        sx={{
          height: direction === "row" ? "min-content" : "100%",
          width: "100%",
          boxSizing: "border-box",
          borderRadius: "30px",
          px: 3,
          py: 2,
          marginBottom: 1,
          backgroundColor: "common.white",
          transition: direction === "row" ? "none" : "all .1s ease-in-out",
          "&:hover": {
            transform: direction === "row" ? "none" : "scale(1.02)",
          },
        }}
      >
        <CardMedia
          component="img"
          alt={name}
          image={image_url}
          sx={{
            width: direction === "row" ? "40%" : "auto",
            mr: direction === "row" ? 2 : 0,
          }}
        />
        <ProductCardContent
          id={id}
          src={src}
          name={name}
          price={price}
          size={contentSize}
          direction={direction}
        />
      </Stack>
    </Link>
  );
};

export default ProductCard;
