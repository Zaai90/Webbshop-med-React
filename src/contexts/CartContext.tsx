import { createContext, useContext } from "react";
import { useLocalStorage } from "../hooks/localStorage";
import { CartItem } from "../models/CartItem";
import Product from "../models/Product";
import { useFavorites } from "./FavoriteContext";

interface CartContext {
  cart: CartItem[];
  addToCart(item: Product, size: string, quantity?: number): void;
  removeFromCart(id: string, quantity?: number): void;
  clearCart(): void;
  cartQty: number;
  totalAmount: number;
  getItemQty(id: string): number;
  removeItemFromCart: (cartItem: CartItem) => void;
  addAllFavorites: () => void;
}

const CartContext = createContext<CartContext>({
  cart: [],
  addToCart: () => {},
  removeFromCart: () => {},
  clearCart: () => {},
  cartQty: 0,
  totalAmount: 0,
  getItemQty: () => 0,
  removeItemFromCart: () => {},
  addAllFavorites: () => {},
});

interface CartProviderProps {
  children: React.ReactNode;
}

const CartContextProvider = ({ children }: CartProviderProps) => {
  const { favorites } = useFavorites();
  const [cart, setCart] = useLocalStorage<CartItem[]>("cart", []);

  const addToCart = (item: Product, size: string, quantity: number = 5) => {
    const existingItem = cart.find((i) => i.product.id === item.id);
    if (existingItem) {
      setCart(
        cart.map((i) => {
          if (i.product.id === item.id) i.quantity += quantity;
          return i;
        })
      );
    } else {
      setCart((prev) => [...prev, { product: item, quantity: quantity, size: size }]);
    }
  };

  const addAllFavorites = (size: string = "M") => {
    for (let i = 0; i < favorites.length; i++) {
      addToCart(favorites[i], size, 1);
    }
  };

  const getTotalAmount = cart.reduce((acc, curr) => acc + curr.product.price * curr.quantity, 0);

  const getCartQty = cart.reduce((acc, curr) => acc + curr.quantity, 0);

  const getItemQty = (id: string): number => {
    const item = cart.find((i) => i.product.id === id);
    return item ? item.quantity : 0;
  };

  const removeFromCart = (id: string, quantity: number = 1) => {
    const index = cart.findIndex((i) => i.product.id === id);
    if (index !== -1) {
      if (cart[index].quantity > quantity) {
        setCart((prev) => [
          ...prev.slice(0, index),
          { product: cart[index].product, quantity: cart[index].quantity - quantity, size: cart[index].size },
          ...prev.slice(index + 1),
        ]);
      } else {
        setCart((prev) => prev.filter((item) => item.product.id !== id));
      }
    }
  };

  const removeItemFromCart = (cartItem: CartItem) => {
    const cartCopy = [...cart];
    const cartItemIndex = cartCopy.findIndex((item) => item.product.id === cartItem.product.id);
    cartCopy.splice(cartItemIndex, 1);

    setCart(cartCopy);
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider
      value={{
        addAllFavorites,
        cart,
        cartQty: getCartQty,
        totalAmount: getTotalAmount,
        addToCart,
        removeFromCart,
        clearCart,
        getItemQty,
        removeItemFromCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  return context;
};

export default CartContextProvider;
