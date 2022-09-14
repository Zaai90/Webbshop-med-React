import { nanoid } from "nanoid";
import { createContext, ReactNode, useContext } from "react";
import { ProductCreate } from "../components/Form";
import { useLocalStorage } from "../hooks/localStorage";
import Product from "../models/Product";
import { Products } from "../ProductData";

interface ProductContextValue {
  products: Product[];
  createProduct: (product: ProductCreate) => void;
  deleteProductById: (id: string) => void;
  deleteProducts: (selectedIds: string[]) => void;
  editProduct: (product: Product) => void;
}

const ProductContext = createContext<ProductContextValue>({
  products: [],
  createProduct: () => {},
  deleteProductById: () => {},
  deleteProducts: () => {},
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

  const createProduct = (product: ProductCreate) => {
    const nanoId = nanoid();
    const productsCopy = [...products, { id: nanoId, ...product }];

    setProducts(productsCopy);
  };

  const deleteProductById = (id: string) => {
    const index = products.findIndex((p) => p.id === id);

    const productsCopy = [...products];

    productsCopy.splice(index, 1);
    setProducts(productsCopy);
  };

  const deleteProducts = (selectedIds: string[]) => {
    const newProducts = products.filter((product) => !selectedIds.includes(product.id));

    setProducts(newProducts);
  };

  const editProduct = (editedProduct: Product) => {
    const index = products.findIndex((product) => product.id === editedProduct.id);

    const productsCopy = [...products];

    productsCopy.splice(index, 1, editedProduct);

    setProducts(productsCopy);
  };

  return (
    <ProductContext.Provider value={{ products, createProduct, deleteProductById, deleteProducts, editProduct }}>{children}</ProductContext.Provider>
  );
}

export const useProducts = () => useContext(ProductContext);

export default ProductProvider;
