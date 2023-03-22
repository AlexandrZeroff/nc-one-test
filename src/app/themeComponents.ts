import {
  CardContent,
  CardMedia,
  Grid,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import { styled } from "@mui/system";

type ProductCardMediaProps = {
  direction: "row" | "column";
  component: "img";
  alt: string;
  image: string;
};

type ProductCardContentStackProps = {
  actionMarginTop: string;
};

export const AppContainerStack = styled(Stack)(({ theme }) => ({
  backgroundColor: theme.palette.primary.contrastText,
  flexGrow: 1,
  boxSizing: "border-box",
  height: "calc(100vh - 6rem - 1px)",
}));

export const AppHeaderStack = styled(Stack)(({ theme }) => ({
  paddingLeft: "2rem",
  paddingRight: "2rem",
  height: "6rem",
  backgroundColor: theme.palette.primary.main,
  borderBottom: "1px solid black",
}));

export const FavoritesContainer = styled("div")({
  boxSizing: "border-box",
  paddingTop: "2rem",
  paddingBottom: "2rem",
  paddingLeft: "4rem",
  paddingRight: "4rem",
});

export const FavoritesOuterStack = styled(Stack)({
  boxSizing: "border-box",
  borderRadius: "30px",
  paddingTop: "2rem",
  paddingBottom: "2rem",
  paddingLeft: ".5rem",
  paddingRight: ".5rem",
});

export const FavoritesHeader = styled(Typography)({
  textTransform: "uppercase",
  marginLeft: "2rem",
});

export const FavoritesInnerStack = styled(Stack)({
  paddingRight: "4rem",
  flexGrow: 1,
});

export const ProductCardStack = styled(Stack)(({ theme, direction }) => ({
  height: direction === "row" ? "min-content" : "100%",
  width: "100%",
  boxSizing: "border-box",
  borderRadius: "30px",
  paddingTop: "1rem",
  paddingBottom: "1rem",
  paddingLeft: "1.5rem",
  paddingRight: "1.5rem",
  marginBottom: ".5rem",
  backgroundColor: theme.palette.common.white,
  transition: direction === "row" ? "none" : "all .1s ease-in-out",
  "&:hover": {
    transform: direction === "row" ? "none" : "scale(1.02)",
  },
}));

export const ProductCardMedia = styled(CardMedia)(
  ({ direction }: ProductCardMediaProps) => ({
    width: direction === "row" ? "40%" : "auto",
    marginRight: direction === "row" ? "1rem" : 0,
  })
);

export const ProductCardContentContainer = styled(CardContent)({
  width: "100%",
});

export const ProductCardContentStack = styled(Stack)(
  ({ actionMarginTop }: ProductCardContentStackProps) => ({
    width: "100%",
    margin: 0,
    marginTop: actionMarginTop,
  })
);

export const StyledIconButton = styled(IconButton)(({ theme }) => ({
  borderRadius: 1,
  backgroundColor: theme.palette.primary.main,
}));

export const ProductListGridContainer = styled(Grid)({
  height: "100%",
  overflowY: "scroll",
  maxHeight: "calc(100vh - 6rem - 1px)",
  paddingTop: "2rem",
  paddingRight: "2rem",
  boxSizing: "border-box",
});

export const ProductListGridItem = styled(Grid)({
  paddingLeft: ".5rem",
  paddingRight: ".5rem",
  paddingBottom: "2rem",
});

export const ProductPageStack = styled(Stack)({
  flexGrow: 1,
  height: "100%",
  maxHeight: "calc(100vh - 8rem)",
  marginRight: "2rem",
  marginLeft: "2rem",
  boxSizing: "border-box",
});

export const ZoomIconButton = styled(IconButton)(({ theme }) => ({
  marginTop: "2rem",
  color: theme.palette.secondary.main,
  marginLeft: "auto",
  marginRight: "auto",
}));

export const ProductPageContentStack = styled(Stack)({
  marginRight: "2rem",
});
