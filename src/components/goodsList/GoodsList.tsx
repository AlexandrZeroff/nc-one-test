import useProducts from "../../hooks/useProducts";
import Grid from "@mui/material/Grid";
import ProductCard from "../productCard/ProductCard";
import Error from "../utils/Error";
import Loading from "../utils/Loading";

const GoodsList = () => {
  const { data, error, loading } = useProducts();

  return (
    <Grid
      container
      sx={{
        height: "100%",
        overflowY: "scroll",
        maxHeight: "calc(100vh - 6rem - 1px)",
        paddingTop: 4,
        paddingRight: 4,
        boxSizing: "border-box",
      }}
    >
      {loading && <Loading />}
      {error && <Error error={error} />}
      {data !== null &&
        data.map((product, index) => (
          <Grid
            item
            xs={3}
            sx={{
              px: 1,
              paddingBottom: 4,
            }}
            key={index}
          >
            <ProductCard
              key={index}
              dashed={true}
              direction="column"
              contentSize="small"
              id={product.id}
              name={product.name}
              src={product.src}
              price={product.price}
            />
          </Grid>
        ))}
    </Grid>
  );
};

export default GoodsList;
