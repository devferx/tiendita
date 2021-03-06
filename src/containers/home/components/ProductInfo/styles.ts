import styled from "@emotion/styled";

export const StyledProductInfo = styled.section`
  display: grid;
  gap: 16px;

  .image {
    margin: 0 auto;
    width: 100%;
    max-width: 300px;
    object-fit: contain;
  }

  .product-info {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }
  .title {
    font: var(--headline1);
    color: var(--cocoabrown);
  }
  .price {
    font: var(--headline2);
    color: var(--cocoabrown);

    .original-price {
      color: var(--boulder);
      font: var(--headline3);
      text-decoration: line-through;
    }
  }
  .caption {
    font: var(--caption-regular);
    color: var(--cocoabrown);
  }
  .desc {
    font: var(--body2-regular);
    color: var(--cocoabrown);
  }
  .actions {
    display: flex;
    flex-direction: column;
    gap: 24px;
    margin-top: 24px;
  }

  .add-btn {
    width: 100%;
    padding: 12px 24px;
    font: var(--button);
    color: var(--white);
    background: var(--malachite);
    border: none;
    cursor: pointer;
    border-radius: 8px;
  }

  @media screen and (min-width: 768px) {
    grid-template-columns: 5fr 4.5fr;
    gap: 24px;

    .actions {
      flex-direction: row;
    }
  }
`;
