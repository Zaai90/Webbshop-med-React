import Form from "../Form";

interface Props {
  isOpen: boolean;
}

const AddProduct = ({ isOpen }: Props) => {
  return (
    <div>
      {isOpen && (
        <div>
          <Form isNewProduct={true} />
        </div>
      )}
    </div>
  );
};

export default AddProduct;
