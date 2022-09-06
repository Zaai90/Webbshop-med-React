import { createContext, ReactNode, useContext } from "react";
import { useLocalStorage } from "../hooks/localStorage";
import { Product, Products } from "../ProductData";

interface ProductContextValue {
  products: Product[];
  createProduct: (product: Product) => void;
  deleteProduct: (product: Product) => void;
  editProduct: (product: Product) => void;
}

const ProductContext = createContext<ProductContextValue>({
  products: [],
  createProduct: () => {},
  deleteProduct: () => {},
  editProduct: () => {},
});

interface Props {
  children: ReactNode;
}

function ProductProvider({ children }: Props) {
  const LoadProducts = () => {
    return Products;
  };
  const [products, setProducts] = useLocalStorage<Product[]>("products", LoadProducts);

  const createProduct = (product: Product) => {
    // TODO: create product =D
    console.log("created product" + { product });
    const productsCopy = [...products, { ...product, id: 14 }];

    setProducts(productsCopy);
  };

  const deleteProduct = (product: Product) => {
    // TODO: deleteProducts =D

    const test: number[] = [1];

    const newProducts = products.filter((product) => !test.includes(product.id));

    console.log(newProducts);
  };

  const editProduct = (editedProduct: Product) => {
    const index = products.findIndex((product) => product.id === editedProduct.id);

    const productsCopy = [...products];

    productsCopy.splice(index, 1, editedProduct);

    setProducts(productsCopy);
  };

  return <ProductContext.Provider value={{ products, createProduct, deleteProduct, editProduct }}>{children}</ProductContext.Provider>;
}

export const useProducts = () => useContext(ProductContext);

export default ProductProvider;
