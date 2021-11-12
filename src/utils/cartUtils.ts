import { CartItem, CartState } from "@context/cartReducer";
import { roundTwoDecimals } from "./roundTwoDecimals";

function incrementProductCartQuantity(
  cart: CartItem[],
  productIndex: number,
  quantity: number
): CartItem[] {
  return cart.map((item, i) =>
    i === productIndex
      ? { ...item, quantity: cart[productIndex].quantity + quantity }
      : item
  );
}

export function incrementProductCartQuantityState(
  state: CartState,
  productIndex: number,
  quantity: number
): CartState {
  return {
    ...state,
    cart: incrementProductCartQuantity(state.cart, productIndex, quantity),
    cartLength: state.cartLength + quantity,
    totalPrice: roundTwoDecimals(
      state.totalPrice + state.cart[productIndex].product.price * quantity
    ),
  };
}
