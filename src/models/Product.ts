export default interface Product {
  id: number;
  designer: string;
  title: string;
  description: string;
  price: number;
  category: string;
  img: string[];
  size: string[];
  color?: string;
}
