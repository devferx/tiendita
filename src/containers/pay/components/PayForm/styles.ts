import styled from "@emotion/styled";

export const FormStyled = styled.form`
  display: flex;
  flex-direction: column;
  gap: 32px;
  width: 100%;
  padding-top: 16px;
  padding-bottom: 16px;

  .form-control {
    display: flex;
    flex-direction: column;
    gap: 8px;

    label {
      font: var(--body1-regular);

      &::placeholder {
        color: var(--boulder);
      }
    }

    input {
      width: 100%;
      padding: 8px 12px;
      font: var(--body1-regular);
      border-radius: 8px;
      background: var(--white);
      border: 1px solid rgba(60, 66, 87, 0.12);
      box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.08),
        0px 1px 1px rgba(0, 0, 0, 0.04);
    }
    &.form-control-card {
      .grid {
        display: grid;
        grid-template-columns: 1fr 1fr;
        border: 1px solid rgba(60, 66, 87, 0.12);
        border-radius: 8px;
        overflow: hidden;
        box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.08),
          0px 1px 1px rgba(0, 0, 0, 0.04);

        input {
          border-radius: 0px;
          box-shadow: none;
        }

        input:first-child {
          grid-column: 1 / 3;
        }
      }
    }
  }

  .submit {
    background: var(--malachite);
    padding: 12px 48px;
    border: none;
    box-shadow: 0px -1px 1px rgba(0, 0, 0, 0.12),
      0px 2px 5px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.08);
    border-radius: 4px;
    font: var(--body1-bold);
    color: var(--white);
    cursor: pointer;
  }

  @media screen and (min-width: 768px) {
    max-width: 400px;
  }
`;
