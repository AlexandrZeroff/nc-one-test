export type ProductCardContentProps = {
  id: string;
  image: string;
  title: string;
  price: string;
  size: "small" | "large";
  direction: "row" | "column";
};

export type ProductCardProps = {
  id: string;
  image: string;
  title: string;
  price: string;
  dashed: boolean;
  direction: "row" | "column";
  style: React.CSSProperties;
  contentSize: "small" | "large";
};

export type BtnSize = "small" | "large" | "medium" | undefined;

export type Product = { id: string; name: string; src: string; price: string };

export type APIError = {
  message: string;
};
