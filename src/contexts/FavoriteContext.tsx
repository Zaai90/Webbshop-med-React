import { createContext, useContext } from "react";
import { useLocalStorage } from "../hooks/localStorage";
import { Product } from "../ProductData";

interface FavoriteContext {
  favorites: Product[];
  addToFavorites: (product: Product) => void;
  removeFromFavorites: (product: Product) => void;
  removeAllFavorites: () => void;
  isFavorite: (product: Product) => boolean;
  toggleFavorite: (product: Product) => void;
}

const FavoriteContext = createContext<FavoriteContext>({
  favorites: [],
  addToFavorites: () => {},
  removeAllFavorites: () => {},
  removeFromFavorites: () => {},
  isFavorite: () => false,
  toggleFavorite: () => {},
});

interface Props {
  children: React.ReactNode;
}

const FavoritesProvider = ({ children }: Props) => {
  const [favorites, setFavorites] = useLocalStorage<Product[]>("Favorites", []);

  const addToFavorites = (favoriteProduct: Product) => {
    const existingProduct = favorites.find((product) => product.id === favoriteProduct.id);
    if (!existingProduct) {
      setFavorites((prevState) => [...prevState, favoriteProduct]);
    }
  };

  const removeFromFavorites = (favoriteToRemove: Product) => {
    const favoriteIndex = favorites.findIndex((favorite) => favorite.id === favoriteToRemove.id);
    if (favoriteIndex != -1) {
      const favoritesCopy = [...favorites];
      favoritesCopy.splice(favoriteIndex, 1);
      setFavorites(favoritesCopy);
    }
  };

  const isFavorite = (product: Product) => {
    if (favorites.length === 0) {
      return false;
    }
    return favorites.find((favorite) => favorite.id === product.id) ? true : false;
  };

  const toggleFavorite = (product: Product) => {
    !isFavorite(product) ? addToFavorites(product) : removeFromFavorites(product);
  };

  const removeAllFavorites = () => setFavorites([]);

  return (
    <FavoriteContext.Provider value={{ removeFromFavorites, favorites, addToFavorites, removeAllFavorites, isFavorite, toggleFavorite }}>
      {children}
    </FavoriteContext.Provider>
  );
};

export const useFavorites = () => {
  const context = useContext(FavoriteContext);
  return context;
};

export default FavoritesProvider;
