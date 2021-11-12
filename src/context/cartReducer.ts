import { IProduct } from "@interfaces/product";
import { roundTwoDecimals } from "../utils/roundTwoDecimals";

export interface CartItem {
  product: IProduct;
  quantity: number;
}
export interface CartState {
  cart: CartItem[];
  cartLength: number;
  totalPrice: number;
}

export const initialCartState: CartState = {
  cart: [],
  cartLength: 0,
  totalPrice: 0,
};

type CartAction =
  | { type: "ADD_PRODUCT"; payload: CartItem }
  | { type: "CLEAR_CART" }
  | { type: "DECREMENT_CART_ITEM"; payload: string }
  | { type: "INCREMENT_CART_ITEM"; payload: string };

export function cartReducer(state: CartState, action: CartAction): CartState {
  let productIndex: number;

  switch (action.type) {
    case "ADD_PRODUCT":
      productIndex = state.cart.findIndex(
        (item) => item.product.name === action.payload.product.name
      );
      if (productIndex === -1) {
        return {
          ...state,
          cart: [...state.cart, action.payload],
          cartLength: state.cartLength + action.payload.quantity,
          totalPrice: roundTwoDecimals(
            state.totalPrice +
              action.payload.quantity * action.payload.product.price
          ),
        };
      } else {
        return {
          ...state,
          cart: state.cart.map((item, i) =>
            i === productIndex
              ? { ...item, quantity: state.cart[productIndex].quantity + 1 }
              : item
          ),
          cartLength: state.cartLength + 1,
          totalPrice: roundTwoDecimals(
            state.totalPrice + state.cart[productIndex].product.price
          ),
        };
      }

    case "INCREMENT_CART_ITEM":
      productIndex = state.cart.findIndex(
        (item) => item.product.name === action.payload
      );
      return {
        ...state,
        cart: state.cart.map((item, i) =>
          i === productIndex
            ? { ...item, quantity: state.cart[productIndex].quantity + 1 }
            : item
        ),
        cartLength: state.cartLength + 1,
        totalPrice: roundTwoDecimals(
          state.totalPrice + state.cart[productIndex].product.price
        ),
      };

    case "DECREMENT_CART_ITEM":
      productIndex = state.cart.findIndex(
        (item) => item.product.name === action.payload
      );
      if (state.cart[productIndex].quantity - 1 < 1) {
        return {
          ...state,
          cart: state.cart.filter((_, i) => i !== productIndex),
          cartLength: state.cartLength - 1,
          totalPrice: roundTwoDecimals(
            state.totalPrice - state.cart[productIndex].product.price
          ),
        };
      } else {
        return {
          ...state,
          cart: state.cart.map((item, i) =>
            i === productIndex
              ? { ...item, quantity: state.cart[productIndex].quantity - 1 }
              : item
          ),
          cartLength: state.cartLength - 1,
          totalPrice: roundTwoDecimals(
            state.totalPrice - state.cart[productIndex].product.price
          ),
        };
      }
    case "CLEAR_CART":
      return {
        ...state,
        cart: [],
        cartLength: 0,
        totalPrice: 0,
      };
    default:
      return { ...state };
  }
}
