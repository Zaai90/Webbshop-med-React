import { createContext, useContext, useEffect, useState } from "react";
import { CartItem } from "../models/CartItem";
import { Product } from "../ProductData";

interface CartContext {
  cart: CartItem[];
  cartQty: number;
  addToCart(item: Product, quantity?: number): void;
  removeFromCart(id: number, quantity?: number): void;
  clearCart(): void;
}

const CartContext = createContext<CartContext>({
  cart: [],
  cartQty: 0,
  addToCart: () => {},
  removeFromCart: () => {},
  clearCart: () => {},
});

interface CartProviderProps {
  children: React.ReactNode;
}

const CartContextProvider = ({ children }: CartProviderProps) => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [cartQty, setCartQty] = useState<number>(0);

  useEffect(() => {
    setCartQty((prev) => cart.reduce((acc, curr) => acc + curr.quantity, prev)), [cart];
  });

  const addToCart = (item: Product, quantity: number = 1) => {
    const existingItem = cart.find((i) => i.product.id === item.id);
    if (existingItem) {
      existingItem.quantity += quantity;
    } else {
      setCart((prev) => [...prev, { product: item, quantity: quantity }]);
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

  return <CartContext.Provider value={{ cart, cartQty, addToCart, removeFromCart, clearCart }}>{children}</CartContext.Provider>;
};

export const useCart = () => {
  const context = useContext(CartContext);
  return context;
};

export default CartContextProvider;
