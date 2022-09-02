import { createContext, ReactNode, useContext, useState } from "react";
import { Product, Products } from "../ProductData";

interface ProductContextValue {
  products: Product[];
  createProduct: () => void;
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
  const [products, setProducts] = useState<Product[]>(Products);

  const createProduct = () => {
    // TODO: create product =D
  };

  const deleteProduct = (product: Product) => {
    // TODO: deleteProduct =D
    const index = products.findIndex((p) => p.id === product.id);

    const productsCopy = [...products];

    productsCopy.splice(index, 1);

    console.log(productsCopy);

    setProducts(productsCopy);

    console.log(products);
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
