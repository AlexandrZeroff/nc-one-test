export interface Product {
  id: string;
  name: string;
  src: string;
  price: string;
}

export interface ProductCardContentProps extends Product {
  size: "small" | "large";
  direction: "row" | "column";
}

export interface ProductCardProps extends Product {
  dashed: boolean;
  direction: "row" | "column";
  style?: React.CSSProperties;
  contentSize: "small" | "large";
}

export type BtnSize = "small" | "large" | "medium" | undefined;

export type APIError = {
  message: string;
};
