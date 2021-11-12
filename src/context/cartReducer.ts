import { IProduct } from "@interfaces/product";

export interface CartItem {
  product: IProduct;
  quantity: number;
}
export interface CartState {
  cart: CartItem[];
  cartLength: number;
}

export const initialCartState: CartState = {
  cart: [],
  cartLength: 0,
};

type CartAction =
  | { type: "ADD_PRODUCT"; payload: CartItem }
  | { type: "CLEAR_CART" };

export function cartReducer(state: CartState, action: CartAction): CartState {
  switch (action.type) {
    case "ADD_PRODUCT":
      return {
        ...state,
        cart: [...state.cart, action.payload],
        cartLength: state.cartLength + action.payload.quantity,
      };
    case "CLEAR_CART":
      return {
        ...state,
        cart: [],
        cartLength: 0,
      };
    default:
      return { ...state };
  }
}
