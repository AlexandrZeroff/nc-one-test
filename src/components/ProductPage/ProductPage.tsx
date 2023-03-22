import Grid from "@mui/material/Grid";
import ProductCardContent from "../ProductCard/ProductCardContent";
import useProducts from "../../hooks/useProduct";
import Stack from "@mui/material/Stack";
import ReactImageMagnify from "react-image-magnify";
import ZoomInIcon from "@mui/icons-material/ZoomIn";
import Error from "../../shared/Error";
import Loading from "../../shared/Loading";
import { useLocation } from "react-router-dom";
import {
  ProductPageStack,
  ZoomIconButton,
  ProductPageContentStack,
} from "../../app/themeComponents";

const ProductPage = () => {
  const location = useLocation();
  const { id } = location.state;
  const { data, error, loading } = useProducts(id);

  const api_string = process.env.REACT_APP_BASE_API_STRING;
  return (
    <ProductPageStack>
      {loading && <Loading />}
      {error && <Error error={error} />}
      {data && (
        <Grid container columnSpacing={8} className="FullHeight">
          <Grid item xs={5}>
            <Stack
              direction="column"
              justifyContent="center"
              alignItems="center"
              className="FullHeight"
            >
              <ReactImageMagnify
                {...{
                  smallImage: {
                    alt: data.name,
                    isFluidWidth: true,
                    src: api_string + data.src,
                  },
                  largeImage: {
                    src: api_string + data.src,
                    width: 600,
                    height: 600,
                  },
                  enlargedImageContainerDimensions: {
                    width: "140%",
                    height: "120%",
                  },
                  enlargedImageContainerStyle: {
                    marginTop: "-10%",
                  },
                  style: {
                    display: "flex",
                    flexDirection: "column",
                  },
                  isHintEnabled: true,
                  shouldHideHintAfterFirstActivation: false,
                  hintComponent: () => (
                    <ZoomIconButton size="large">
                      <ZoomInIcon fontSize="inherit" />
                    </ZoomIconButton>
                  ),
                }}
              />
            </Stack>
          </Grid>
          <Grid item xs={7}>
            <ProductPageContentStack
              direction="row"
              alignItems="center"
              className="FullHeight"
            >
              <ProductCardContent
                size="large"
                id={data.id}
                src={data.src}
                name={data.name}
                price={data.price}
                direction="row"
              />
            </ProductPageContentStack>
          </Grid>
        </Grid>
      )}
    </ProductPageStack>
  );
};

export default ProductPage;
