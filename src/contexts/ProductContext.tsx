import { createContext, ReactNode, useContext } from "react";
import { ProductCreate } from "../components/Form";
import { useLocalStorage } from "../hooks/localStorage";
import { Product, Products } from "../ProductData";

interface ProductContextValue {
  products: Product[];
  createProduct: (product: ProductCreate) => void;
  deleteProducts: (selectedIds: number[]) => void;
  editProduct: (product: Product) => void;
}

const ProductContext = createContext<ProductContextValue>({
  products: [],
  createProduct: () => {},
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
    const productsCopy = [...products, { ...product, id: 14 }];

    setProducts(productsCopy);
  };

  const deleteProducts = (selectedIds: number[]) => {
    const newProducts = products.filter((product) => !selectedIds.includes(product.id));

    setProducts(newProducts);
  };

  const editProduct = (editedProduct: Product) => {
    const index = products.findIndex((product) => product.id === editedProduct.id);

    const productsCopy = [...products];

    productsCopy.splice(index, 1, editedProduct);

    setProducts(productsCopy);
  };

  return <ProductContext.Provider value={{ products, createProduct, deleteProducts, editProduct }}>{children}</ProductContext.Provider>;
}

export const useProducts = () => useContext(ProductContext);

export default ProductProvider;
