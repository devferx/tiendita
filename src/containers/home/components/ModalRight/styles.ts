import { css } from "@emotion/react";
import styled from "@emotion/styled";

interface StyledModalRigthProps {
  isActive: boolean;
}

export const StyledModalRigth = styled.div<StyledModalRigthProps>`
  position: fixed;
  display: flex;
  justify-content: flex-end;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  z-index: 999;
  background: rgba(51, 41, 39, 0.8);
  opacity: 0;
  transition: 0.6s;
  visibility: hidden;

  ${(p) =>
    p.isActive &&
    css`
      visibility: visible;
      opacity: 1;
    `}

  .product-list {
    display: flex;
    flex-direction: column;
    position: relative;
    z-index: 99999;
    height: 100%;
    width: 100%;
    max-width: 562px;
    background-color: var(--bg);
    transition: 0.6s transform;
    transform: translateX(100%);

    ${(p) =>
      p.isActive &&
      css`
        transform: translateX(0%);
      `}

    .header {
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
    }

    .product-list-container {
      flex: 1;
    }
  }
`;
