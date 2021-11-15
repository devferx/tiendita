import { css } from "@emotion/react";
import styled from "@emotion/styled";

interface StyledModalSuccessProps {
  isActive: boolean;
}

export const StyledModalSuccess = styled.div<StyledModalSuccessProps>`
  position: fixed;
  display: grid;
  place-items: center;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  z-index: 999;
  background: rgba(51, 41, 39, 0.8);
  opacity: 0;
  transition: 0.6s;
  visibility: hidden;
  padding: 0 16px;

  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 24px;
    width: 100%;
    padding: 40px;
    border-radius: 16px;
    background: var(--white);
    z-index: 99999;
    transform: translateY(-1000px);
    transition: 0.6s transform;

    ${(p) =>
      p.isActive &&
      css`
        transform: translateY(0px);
      `}

    img {
      width: 100%;
    }

    .title {
      font: var(--headline3);
    }

    .button {
      padding: 12px 24px;
      font-family: Poppins;
      font-style: normal;
      font-weight: normal;
      font-size: 14px;
      line-height: 16px;
      text-decoration: none;
      background: var(--malachite);
      border-radius: 8px;
      color: var(--white);
      cursor: pointer;
      border: none;
    }

    @media screen and (min-width: 768px) {
      width: auto;
    }
  }

  ${(p) =>
    p.isActive &&
    css`
      visibility: visible;
      opacity: 1;
    `}
`;
