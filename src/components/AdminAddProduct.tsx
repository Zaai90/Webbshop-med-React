import { useProducts } from "../contexts/ProductContext";
import { Product } from "../ProductData";
import Form from "./Form";

interface Props {
  isOpen: boolean;
}

const AddProduct = ({ isOpen }: Props) => {
  const { createProduct } = useProducts();

  const handleSubmit = (newProduct: Product, event: any) => {
    event.preventDefault();
    console.log(newProduct);
    createProduct(newProduct);
  };

  return (
    <div>
      {isOpen && (
        <div>
          <Form isNewProduct onSubmit={handleSubmit} />
        </div>
      )}
    </div>
  );
};

export default AddProduct;
