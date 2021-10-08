import { createContext, useReducer } from "react";

import { IProduct } from "@interfaces/product";
import { cartReducer, initialCartState } from "./cartReducer";

interface CartContextProps {
  cart: IProduct[];
  addToCard: (product: IProduct) => void;
  removeFromCard: (productId: string) => void;
  clearCard: () => void;
}

export const CartContext = createContext({} as CartContextProps);

interface AppContextProviderProps {
  children: React.ReactNode;
}

export const CartProvider = ({ children }: AppContextProviderProps) => {
  const [state, dispatch] = useReducer(cartReducer, initialCartState);

  const addToCard = (product: IProduct) => {};
  const removeFromCard = (productId: string) => {};
  const clearCard = () => {};

  return (
    <CartContext.Provider
      value={{
        ...state,
        addToCard,
        removeFromCard,
        clearCard,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
