import AdminProductCard from "../components/AdminProductCard";
import MainContent from "../components/MainContent";
import { products } from "../ProductData";

const Admin = () => {
  return (
    <MainContent>
      <div>Admin</div>
      {products.map((product) => (
        <AdminProductCard key={product.id} product={product} />
      ))}
    </MainContent>
  );
};

export default Admin;
