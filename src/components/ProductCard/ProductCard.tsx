import { Link } from "react-router-dom";
import ProductCardContent from "./ProductCardContent";
import { ProductCardProps } from "../../types/types";
import { ProductCardStack, ProductCardMedia } from "../../app/themeComponents";

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
      <ProductCardStack
        className={dashed ? "DashedThin" : ""}
        direction={flexDirection}
        alignItems={direction === "row" ? "center" : ""}
      >
        <ProductCardMedia
          direction={direction}
          component="img"
          alt={name}
          image={image_url}
        />
        <ProductCardContent
          id={id}
          src={src}
          name={name}
          price={price}
          size={contentSize}
          direction={direction}
        />
      </ProductCardStack>
    </Link>
  );
};

export default ProductCard;
