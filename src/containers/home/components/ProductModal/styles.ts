import { css, keyframes } from "@emotion/react";
import styled from "@emotion/styled";

interface StyledModalContainerProps {
  isActive: boolean;
}

export const StyledModalContainer = styled.section<StyledModalContainerProps>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding: 16px;
  background: rgba(51, 41, 39, 0.8);
  visibility: hidden;
  z-index: 9999;
  ${(p) =>
    p.isActive &&
    css`
      visibility: visible;
    `}
  @media screen and (min-width: 768px) {
    padding-top: 80px;
  }
`;

const fadeInAnimation = keyframes`
  from {
    transform: translateY(-1000px);
  }
  to {
    transform: translateY(0px);
  }
`;

export const Modal = styled.aside`
  width: 100%;
  max-width: 1068px;
  background: white;
  padding: 16px;
  border-radius: 16px;
  animation: ${fadeInAnimation} 1s;
  animation-delay: 0ms;

  .btn-close {
    display: block;
    width: 40px;
    height: 40px;
    border: none;
    margin-left: auto;
    background: var(--cocoabrown);
    border-radius: 50%;
    cursor: pointer;
  }

  @media screen and (min-width: 768px) {
    padding: 40px;
  }
`;
