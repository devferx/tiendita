import { useContext } from "react";
import { createPortal } from "react-dom";

import { AppContext } from "@context/AppContext";
import { CartContext } from "@context/CartContext";

import ProductCartList from "../ProductCartList";
import { BackgroundEventContainer } from "@shared/components/BackgroundEventContainer";

import { StyledModalRigth } from "./styles";

export const ModalRight = () => {
  const { isBrowser, modalRightIsOpen, toggleModalRightIsOpen } =
    useContext(AppContext);
  const { cart, totalPrice, incrementCartItem, decrementCartItem, clearCard } =
    useContext(CartContext);

  if (!isBrowser) return null;

  return createPortal(
    <StyledModalRigth isActive={modalRightIsOpen}>
      <ProductCartList
        products={cart}
        isActive={modalRightIsOpen}
        onEmptyProducts={() => <ProductCartList.Empty />}
        renderHeader={() => (
          <ProductCartList.Header
            address="Lugar"
            toggleModalRightIsOpen={toggleModalRightIsOpen}
          />
        )}
        renderProduct={(cartItem) => (
          <ProductCartList.Item
            key={cartItem.product.name}
            cartItem={cartItem}
            decrementCartItem={decrementCartItem}
            incrementCartItem={incrementCartItem}
          />
        )}
        renderFooter={() => (
          <ProductCartList.Footer
            counter={cart.length}
            price={totalPrice}
            payRoute={"/pay"}
            cleanCart={clearCard}
          />
        )}
      ></ProductCartList>

      <BackgroundEventContainer onClick={toggleModalRightIsOpen} />
    </StyledModalRigth>,
    document.getElementById("modal-right")
  );
};
