import styled from "@emotion/styled";

export const StyledHeader = styled.header`
  padding: 24px 0px;
  background: var(--white);

  .header-container {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    gap: 16px;
  }

  .card-actions {
    display: flex;
    align-items: center;
  }

  .vertical-divider {
    display: none;

    width: 1px;
    height: 40px;
    background: var(--boulder);
  }

  .flex-1 {
    flex: 1;
  }

  .location {
    display: flex;
    order: 3;
    gap: 8px;
    font: var(--body1-bold);
    color: var(--black);
    text-decoration: none;
  }

  .cart-link {
    display: flex;
    order: 2;
    gap: 8px;
    align-items: center;
    padding: 8px 24px;
    color: var(--white);
    font: var(--button);
    border-radius: 8px;
    text-decoration: none;
    background: var(--malachite);
  }

  @media screen and (min-width: 768px) {
    padding: 24px 40px;

    .vertical-divider {
      display: block;
      order: 3;
    }
    .cart-link {
      order: 4;
    }
  }
`;
