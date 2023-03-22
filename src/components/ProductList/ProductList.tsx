import useProducts from "../../hooks/useProducts";
import ProductCard from "../ProductCard/ProductCard";
import Error from "../../shared/Error";
import Loading from "../../shared/Loading";
import { Product } from "../../types/types";
import {
  ProductListGridContainer,
  ProductListGridItem,
} from "../../app/themeComponents";

const ProductList = () => {
  const { data, error, loading } = useProducts();

  return (
    <ProductListGridContainer container>
      {loading && <Loading />}
      {error && <Error error={error} />}
      {data !== null &&
        data.map((product: Product, index: number) => (
          <ProductListGridItem item xs={3} sx={{}} key={index}>
            <ProductCard
              key={index}
              dashed={true}
              direction="column"
              contentSize="small"
              {...product}
            />
          </ProductListGridItem>
        ))}
    </ProductListGridContainer>
  );
};

export default ProductList;
