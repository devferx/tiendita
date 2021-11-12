import React from "react";
import styled from "@emotion/styled";

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 24px 16px;
  background: var(--white);
  box-shadow: inset 0px -1px 0px rgba(0, 0, 0, 0.05);

  .title {
    font: var(--body2-regular);

    .bold {
      font: var(--body1-bold);
      color: var(--cocoabrown);
    }
  }

  .btn-close {
    display: grid;
    place-items: center;
    padding: 8px;
    background: var(--cocoabrown);
    border: none;
    border-radius: 99px;
    cursor: pointer;
  }
`;

interface ProductCartListHeaderProps {
  address: string;
  toggleModalRightIsOpen: () => void;
}

export const ProductCartListHeader = ({
  address,
  toggleModalRightIsOpen,
}: ProductCartListHeaderProps) => {
  return (
    <Header>
      <h3 className="title">
        Entregar en: <span className="bold">{address}</span>
      </h3>
      <button className="btn-close" onClick={toggleModalRightIsOpen}>
        <img src="/assets/icons/close.svg" alt="close icon" />
      </button>
    </Header>
  );
};
