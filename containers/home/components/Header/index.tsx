import React from "react";

import { StyledHeader } from "./styles";

export const Header = () => {
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

        <a className="cart-link" href="/">
          <img src="/assets/icons/cart.svg" alt="card" />5
        </a>
      </div>
    </StyledHeader>
  );
};
