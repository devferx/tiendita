import React, { useContext } from "react";
import ReactDOM from "react-dom";

import { AppContext } from "@context/AppContext";
import { IProduct } from "@interfaces/product";
import { ProductInfo } from "../ProductInfo";
import { ProductList } from "../ProductList";
import { Modal, StyledModalContainer } from "./styles";
import { BackgroundEventContainer } from "@shared/components/BackgroundEventContainer";

interface Props {
  product: IProduct;
  isActive?: boolean;
  toggleModal?: () => void;
}

export const ProductModal = ({
  product,
  isActive = false,
  toggleModal = () => {},
}: Props) => {
  const { isBrowser, popularProducts } = useContext(AppContext);

  if (!isBrowser) return null;

  return ReactDOM.createPortal(
    <StyledModalContainer isActive={isActive}>
      <BackgroundEventContainer onClick={toggleModal} />
      <Modal id="modal">
        <button className="btn-close" onClick={toggleModal}>
          <img src="/assets/icons/close.svg" alt="close icon" />
        </button>
        <ProductInfo product={product} toggleModal={toggleModal} />
        {isActive && (
          <ProductList
            title="Productos Recomendados"
            products={popularProducts}
            displayDiscount={false}
            isModal={true}
          />
        )}
      </Modal>
    </StyledModalContainer>,
    document.getElementById("modal-root")
  );
};
