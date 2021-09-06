import styled from "@emotion/styled";

export const ProductListContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 16px;
  background: var(--white);
  border-radius: 16px;
  border: 1px solid red;

  .title {
    font: var(--headline3);
  }

  .product-list {
    display: flex;
    gap: 24px;
  }

  @media screen and (min-width: 768px) {
    padding: 40px;
    gap: 40px;

    .product-list {
      gap: 48px;
    }
  }
`;
