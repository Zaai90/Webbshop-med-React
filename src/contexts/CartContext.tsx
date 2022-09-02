import { createContext, useContext, useEffect, useState } from "react";
import { CartItem } from "../models/CartItem";
import { Product } from "../ProductData";

interface CartContext {
  cart: CartItem[];
  addToCart(item: Product, quantity?: number): void;
  removeFromCart(id: number, quantity?: number): void;
  clearCart(): void;
  cartQty: number;
  totalAmount: number;
  getItemQty(id: number): number;
}

const CartContext = createContext<CartContext>({
  cart: [],
  addToCart: () => {},
  removeFromCart: () => {},
  clearCart: () => {},
  cartQty: 0,
  totalAmount: 0,
  getItemQty: () => 0,
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

  const getTotalAmount = cart.reduce((acc, curr) => acc + curr.product.price * curr.quantity, 0);

  const getCartQty = cart.reduce((acc, curr) => acc + curr.quantity, 0);

  const getItemQty = (id: number): number => {
    const item = cart.find((i) => i.product.id === id);
    return item ? item.quantity : 0;
  };

  const removeFromCart = (id: number, quantity: number = 1) => {
    const index = cart.findIndex((i) => i.product.id === id);
    if (index !== -1) {
      if (cart[index].quantity > quantity) {
        setCart((prev) => [
          ...prev.slice(0, index),
          { product: cart[index].product, quantity: cart[index].quantity - quantity },
          ...prev.slice(index + 1),
        ]);
      } else {
        setCart((prev) => prev.filter((item) => item.product.id !== id));
      }
    }
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider value={{ cart, cartQty: getCartQty, totalAmount: getTotalAmount, addToCart, removeFromCart, clearCart, getItemQty }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  return context;
};

export default CartContextProvider;
