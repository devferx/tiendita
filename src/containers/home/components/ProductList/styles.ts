import { css } from "@emotion/react";
import styled from "@emotion/styled";

interface ProductListContainerProps {
  isModal: boolean;
}

export const ProductListContainer = styled.section<ProductListContainerProps>`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 16px;
  background: var(--white);
  border-radius: 16px;
  box-shadow: 0px 11px 29px rgba(0, 0, 0, 0.05);
  margin: 24px 0;

  ${(p) =>
    p.isModal &&
    css`
      box-shadow: none;
      padding: 0px !important;
      margin: 0;
      margin: 20px 0;
    `}

  .title {
    font: var(--headline3);
  }

  .product-list {
    display: flex;
    gap: 24px;
    width: 100%;
    overflow-x: auto;
  }

  @media screen and (min-width: 768px) {
    padding: 40px;
    margin: 40px 0;
    gap: 40px;

    .product-list {
      gap: 48px;
    }
  }
`;
