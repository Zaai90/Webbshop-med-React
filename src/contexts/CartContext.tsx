import { createContext, useContext, useState } from "react";
import { CartItem } from "../models/CartItem";
import { Product } from "../ProductData";

interface CartContext {
  cart: CartItem[];
  addToCart(item: Product, quantity?: number): void;
  removeFromCart(id: number, quantity?: number): void;
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
  const [cart, setCart] = useState<CartItem[]>([]);

  const addToCart = (item: Product, quantity: number = 1) => {
    const existingItem = cart.find((i) => i.product.id === item.id);
    if (existingItem) {
      existingItem.quantity += quantity;
    } else {
      setCart((prev) => [...prev, { product: item, quantity: quantity}]);
    }
  };

  const removeFromCart = (id: number, quantity: number = 1) => {
    const exisitingItem = cart.find((i) => i.product.id === id);
    if (exisitingItem) {
      if (exisitingItem.quantity > quantity) {
        exisitingItem.quantity -= quantity;
      } else {
        setCart((prev) => prev.filter((item) => item.product.id !== id));
      }
    }
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
