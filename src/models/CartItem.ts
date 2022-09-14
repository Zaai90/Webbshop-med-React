import Product from "../models/Product";

export interface CartItem {
  product: Product;
  quantity: number;
  size: string;
}
