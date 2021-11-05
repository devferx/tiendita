import { useContext } from "react";
import ReactDOM from "react-dom";

import { AppContext } from "@context/AppContext";
import { BackgroundEventContainer } from "@shared/components/BackgroundEventContainer";
import { StyledModalRigth } from "./styles";

export const ModalRight = () => {
  const { isBrowser, modalRightIsOpen, toggleModalRightIsOpen } =
    useContext(AppContext);

  if (!isBrowser) return null;

  return ReactDOM.createPortal(
    <StyledModalRigth isActive={modalRightIsOpen}>
      <aside className="product-list">
        <header className="header">
          <h3 className="title">
            Entregar en: <span className="bold">Direccion</span>
          </h3>
          <button className="btn-close" onClick={toggleModalRightIsOpen}>
            <img src="/assets/icons/close.svg" alt="" />
          </button>
        </header>
        <div className="product-list-container"></div>
      </aside>
      <BackgroundEventContainer onClick={toggleModalRightIsOpen} />
    </StyledModalRigth>,
    document.getElementById("modal-right")
  );
};
