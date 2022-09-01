import { createContext, useContext, useEffect, useState } from "react";
import { Product } from "../ProductData";

interface CartContext {
    cart: Product[];
    addToCart(item: Product): void;
    removeFromCart(id: number): void;
    clearCart(): void;
};

const CartContext = createContext<CartContext>({
    cart: [],
    addToCart: () => { },
    removeFromCart: () => { },
    clearCart: () => { }
});


interface CartProviderProps {
    children: React.ReactNode;
};

const CartContextProvider = ({ children }: CartProviderProps) => {
    const [cart, setCart] = useState<Product[]>([]);

    const addToCart = (item: Product) => {
        const newCart = [...cart, item];
        setCart(prevState => newCart);
    }

    const removeFromCart = (id: number) => {
        const newCart = cart.filter(item => item.id !== id);
        setCart(newCart);
    }

    const clearCart = () => {
        setCart([]);
    }

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart }}>
            {children}
        </CartContext.Provider>
    );
}

export const useCart = () => {
    const context = useContext(CartContext);
    return context;
}

export default CartContextProvider;