import { createContext, useContext, useState } from "react";
import { CartItem } from "../models/CartItem";
import { Product } from "../ProductData";

interface CartContext {
  cart: CartItem[];
  addToCart(item: Product, quantity?: number): void;
  removeFromCart(id: number, quantity?: number): void;
  clearCart(): void;
  getCartQty(): number;
  getTotalAmount(): number;
}

const CartContext = createContext<CartContext>({
  cart: [],
  addToCart: () => {},
  removeFromCart: () => {},
  clearCart: () => {},
  getCartQty: () => 0,
  getTotalAmount: () => 0,
});

interface CartProviderProps {
  children: React.ReactNode;
}

const CartContextProvider = ({ children }: CartProviderProps) => {
  const [cart, setCart] = useState<CartItem[]>([]);

  const addToCart = (item: Product, quantity: number = 5) => {
    const existingItem = cart.find((i) => i.product.id === item.id);
    if (existingItem) {
      setCart(
        cart.map((i) => {
          if (i.product.id === item.id) i.quantity += quantity;
          return i;
        })
      );
    } else {
      setCart((prev) => [...prev, { product: item, quantity: quantity }]);
    }
  };

  const getTotalAmount = (): number => {
    return cart.reduce((acc, curr) => acc + curr.product.price * curr.quantity, 0);
  };

  const getCartQty = (): number => {
    return cart.reduce((acc, curr) => acc + curr.quantity, 0);
  };

  const removeFromCart = (id: number, quantity: number = 1) => {
    const exisitingItem = cart.find((i) => i.product.id === id);
    if (exisitingItem) {
      if (exisitingItem.quantity > quantity) {
        setCart((prev) => {
          return prev.map((i) => {
            if (i.product.id === id) i.quantity -= quantity;
            return i;
          });
        });
      } else {
        setCart((prev) => prev.filter((item) => item.product.id !== id));
      }
    }
  };

  const clearCart = () => {
    setCart([]);
  };

  return <CartContext.Provider value={{ cart, getCartQty, getTotalAmount, addToCart, removeFromCart, clearCart }}>{children}</CartContext.Provider>;
};

export const useCart = () => {
  const context = useContext(CartContext);
  return context;
};

export default CartContextProvider;
