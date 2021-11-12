import styled from "@emotion/styled";

export const ProductActionsStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 167px;
  padding: 8px 24px;
  box-shadow: 0px 11px 29px rgba(0, 0, 0, 0.05);
  background: #fefefe;
  border-radius: 8px;

  button {
    border: none;
    background: transparent;
    cursor: pointer;
  }
  .quantity {
    font: var(--body2-bold);
  }
`;
