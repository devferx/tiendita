import { ReactNode } from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/react";

import { CartItem } from "@context/cartReducer";

const Container = styled.aside<{ isActive: boolean }>`
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
`;

interface ProductCartListProps {
  isActive: boolean;
  products: CartItem[];
  renderHeader: () => ReactNode;
  renderFooter: () => ReactNode;
  renderProduct: (product: CartItem) => ReactNode;
  onEmptyProducts: () => ReactNode;
}

export const ProductCartList = ({
  isActive,
  products,
  renderHeader,
  renderProduct,
  renderFooter,
  onEmptyProducts,
}: ProductCartListProps) => {
  return (
    <Container isActive={isActive}>
      {renderHeader()}
      {products.length === 0 ? (
        onEmptyProducts()
      ) : (
        <section style={{ flex: 1, background: "var(--white)" }}>
          {products.map((p) => renderProduct(p))}
        </section>
      )}

      {products.length !== 0 && renderFooter()}
    </Container>
  );
};
