import { Product } from "../ProductData";

export interface CartItem {
  product: Product;
  quantity: number;
}
