import { IProduct } from "@interfaces/product";

export interface CartState {
  cart: IProduct[];
}

export const initialCartState: CartState = {
  cart: [],
};

type CartAction = { type: string };
export function cartReducer(state: CartState, action: CartAction) {
  switch (action.type) {
    default:
      return { ...state };
  }
}
