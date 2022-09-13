import Product from "../models/Product";
import GridItem from "./GridItem";

interface Props {
  products: Product[];
  value: string;
}

const ProductMapper = ({ products, value }: Props) => {
  return (
    <>
      {value === "All" && products.map((product) => <GridItem key={product.id} product={product} />)}
      {products
        .filter((product) => product.category === value)
        .map((product) => (
          <GridItem key={product.id} product={product} />
        ))}
    </>
  );
};

export default ProductMapper;
