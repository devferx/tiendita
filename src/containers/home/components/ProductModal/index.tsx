import { useContext, useState } from "react";
import ReactDOM from "react-dom";

import { AppContext } from "@context/AppContext";
import { IProduct } from "@interfaces/product";
import { Modal, StyledModalContainer } from "./styles";
import { ProductInfo } from "../ProductInfo";

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
  const { isBrowser } = useContext(AppContext);

  if (!isBrowser) return null;

  return ReactDOM.createPortal(
    <StyledModalContainer isActive={isActive}>
      <Modal>
        <button className="btn-close" onClick={toggleModal}>
          <img src="/assets/icons/close.svg" alt="close icon" />
        </button>
        <ProductInfo product={product} />
      </Modal>
    </StyledModalContainer>,
    document.getElementById("modal-root")
  );
};
