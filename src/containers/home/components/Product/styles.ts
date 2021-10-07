import styled from "@emotion/styled";

export const StyledProduct = styled.article`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 10px;

  .discount {
    padding: 8px;
    width: max-content;
    color: var(--purple);
    font: var(--caption-bold);
    background: var(--purple-bg);
    border-radius: 16px;
  }

  img {
    width: 194px;
    height: 194px;
    object-fit: contain;
  }

  .product-info {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  .price {
    font: var(--body1-bold);

    .original-price {
      color: var(--boulder);
      text-decoration: line-through;
    }
  }

  .name {
    height: 96px;
    font: var(--body2-regular);
  }

  .weight {
    font: var(--caption-regular);
    color: var(--boulder);
  }

  button {
    padding: 12px 24px;
    font: var(--button);
    color: var(--white);
    border: none;
    border-radius: 8px;
    background: var(--malachite);
    cursor: pointer;
  }
`;
