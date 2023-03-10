import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import ProductCardContent from "../productCard/ProductCardContent";
import useProduct from "../../hooks/useProduct";
import Stack from "@mui/material/Stack";
import ReactImageMagnify from "react-image-magnify";
import ZoomInIcon from "@mui/icons-material/ZoomIn";
import { IconButton } from "@mui/material";
import Error from "../utils/Error";
import Loading from "../utils/Loading";
import { useLocation } from "react-router-dom";

const ProductPage = () => {
  const location = useLocation();
  const { id } = location.state;
  const { data, error, loading } = useProduct(id);

  const api_string = process.env.REACT_APP_BASE_API_STRING;
  return (
    <Box
      sx={{
        flexGrow: 1,
        height: "100%",
        maxHeight: "calc(100vh - 8rem)",
        mx: 4,
        boxSizing: "border-box",
      }}
    >
      {loading && <Loading />}
      {error && <Error error={error} />}
      {data && (
        <Grid
          container
          columnSpacing={8}
          sx={{
            height: "100%",
          }}
        >
          <Grid item xs={5}>
            <Stack
              direction="column"
              justifyContent="center"
              alignItems="center"
              sx={{
                height: "100%",
              }}
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
                    <IconButton
                      size="large"
                      sx={{
                        marginTop: 4,
                        color: "secondary.main",
                        mx: "auto",
                      }}
                    >
                      <ZoomInIcon fontSize="inherit" />
                    </IconButton>
                  ),
                }}
              />
            </Stack>
          </Grid>
          <Grid item xs={7}>
            <Stack
              direction="row"
              alignItems="center"
              sx={{
                height: "100%",
                mr: 4,
              }}
            >
              <ProductCardContent
                size="large"
                id={data.id}
                src={data.src}
                name={data.name}
                price={data.price}
                direction="row"
              />
            </Stack>
          </Grid>
        </Grid>
      )}
    </Box>
  );
};

export default ProductPage;
