import { createContext, useContext, useState } from "react";
import { Product } from "../ProductData";

interface CartContext {
  cart: Product[];
  addToCart(item: Product): void;
  removeFromCart(id: number): void;
  clearCart(): void;
}

const CartContext = createContext<CartContext>({
  cart: [],
  addToCart: () => {},
  removeFromCart: () => {},
  clearCart: () => {},
});

interface CartProviderProps {
  children: React.ReactNode;
}

const CartContextProvider = ({ children }: CartProviderProps) => {
  const [cart, setCart] = useState<Product[]>([]);

  const addToCart = (item: Product) => {
    setCart((prev) => [...prev, item]);
  };

  const removeFromCart = (id: number) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  const clearCart = () => {
    setCart([]);
  };

  return <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart }}>{children}</CartContext.Provider>;
};

export const useCart = () => {
  const context = useContext(CartContext);
  return context;
};

export default CartContextProvider;
