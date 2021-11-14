import { useContext } from "react";

import ProductCartList from "@containers/home/components/ProductCartList";
import { CartContext } from "@context/CartContext";
import { PayListStyled } from "./styles";

export const PayList = () => {
  const { cart, incrementCartItem, decrementCartItem, clearCard } =
    useContext(CartContext);

  return (
    <PayListStyled>
      {cart.map((cartItem) => (
        <ProductCartList.Item
          key={cartItem.product.name}
          cartItem={cartItem}
          decrementCartItem={decrementCartItem}
          incrementCartItem={incrementCartItem}
        />
      ))}
    </PayListStyled>
  );
};
