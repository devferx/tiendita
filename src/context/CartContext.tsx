import { createContext, useReducer } from "react";
import {
  CartItem,
  cartReducer,
  CartState,
  initialCartState,
} from "./cartReducer";

interface CartContextProps extends CartState {
  addToCard: (product: CartItem) => void;
  incrementCartItem: (productId: string) => void;
  decrementCartItem: (productId: string) => void;
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

  const incrementCartItem = (productId: string) => {
    dispatch({ type: "INCREMENT_CART_ITEM", payload: productId });
  };

  const decrementCartItem = (productId: string) => {
    dispatch({ type: "DECREMENT_CART_ITEM", payload: productId });
  };

  const clearCard = () => {
    dispatch({ type: "CLEAR_CART" });
  };

  return (
    <CartContext.Provider
      value={{
        ...state,
        addToCard,
        incrementCartItem,
        decrementCartItem,
        clearCard,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
