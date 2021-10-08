import { createContext, useReducer } from "react";
import {
  CartItem,
  cartReducer,
  CartState,
  initialCartState,
} from "./cartReducer";

interface CartContextProps extends CartState {
  addToCard: (product: CartItem) => void;
  removeFromCard: (productId: string) => void;
  clearCard: () => void;
}

export const CartContext = createContext({} as CartContextProps);

interface AppContextProviderProps {
  children: React.ReactNode;
}

export const CartProvider = ({ children }: AppContextProviderProps) => {
  const [state, dispatch] = useReducer(cartReducer, initialCartState);

  const addToCard = (product: CartItem) => {
    dispatch({ type: "ADD_PRODUCT", payload: product });
  };
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
