import { useContext } from "react";
import ReactDOM from "react-dom";
import { useRouter } from "next/router";

import { AppContext } from "@context/AppContext";
import { BackgroundEventContainer } from "@shared/components/BackgroundEventContainer";
import { StyledModalSuccess } from "./styles";
import { CartContext } from "../../../../context/CartContext";

interface ModalSuccessProps {
  isActive: boolean;
  toggleIsActiveModal: () => void;
}

export const ModalSuccess = ({
  isActive,
  toggleIsActiveModal,
}: ModalSuccessProps) => {
  const { isBrowser, toggleModalRightIsOpen } = useContext(AppContext);
  const { clearCard } = useContext(CartContext);
  const router = useRouter();

  if (!isBrowser) return null;

  const handleClick = () => {
    toggleIsActiveModal();
    clearCard();
    toggleModalRightIsOpen();
    router.push("/");
  };

  return ReactDOM.createPortal(
    <StyledModalSuccess isActive={isActive}>
      <div className="container">
        <img src="/assets/images/success-buy.png" alt="Success Buy" />
        <h3 className="title">¡Gracias por tu compra!</h3>

        <button className="button" onClick={handleClick}>
          Seguir comprando
        </button>
      </div>
      <BackgroundEventContainer />
    </StyledModalSuccess>,
    document.getElementById("modal-success-buy")
  );
};
