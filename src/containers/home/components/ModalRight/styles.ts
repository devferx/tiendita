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
`;
