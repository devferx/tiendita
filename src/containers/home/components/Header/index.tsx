import { useContext } from "react";

import { CartContext } from "@context/CartContext";
import { AppContext } from "@context/AppContext";
import { StyledHeader } from "./styles";

export const Header = () => {
  const { cartLength } = useContext(CartContext);
  const { toggleModalRightIsOpen } = useContext(AppContext);

  return (
    <StyledHeader>
      <div className="header-container wrapper">
        <a href="/">
          <img src="/assets/icons/logo.svg" alt="Tiendita logo" />
        </a>

        <div className="flex-1"></div>

        <a className="location" href="/">
          <img src="/assets/icons/location-pin.svg" alt="Location Pin" />
          <p>México City Marriott Reforma Hotel...</p>
        </a>

        <span className="vertical-divider" />

        <button className="cart-btn" onClick={toggleModalRightIsOpen}>
          <img src="/assets/icons/cart.svg" alt="card" />
          {cartLength}
        </button>
      </div>
    </StyledHeader>
  );
};
