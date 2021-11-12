import { useContext } from "react";
import ReactDOM from "react-dom";

import { AppContext } from "@context/AppContext";
import { CartContext } from "@context/CartContext";

import ProductCartList from "../ProductCartList";
import { BackgroundEventContainer } from "@shared/components/BackgroundEventContainer";

import { StyledModalRigth } from "./styles";

export const ModalRight = () => {
  const { isBrowser, modalRightIsOpen, toggleModalRightIsOpen } =
    useContext(AppContext);
  const { cart } = useContext(CartContext);

  if (!isBrowser) return null;

  return ReactDOM.createPortal(
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
            product={cartItem}
          />
        )}
        renderFooter={() => (
          <ProductCartList.Footer
            counter={6}
            price={22.3}
            buy={() => {}}
            cleanCart={() => {}}
          />
        )}
      ></ProductCartList>

      <BackgroundEventContainer onClick={toggleModalRightIsOpen} />
    </StyledModalRigth>,
    document.getElementById("modal-right")
  );
};
