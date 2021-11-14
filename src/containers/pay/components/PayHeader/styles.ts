import styled from "@emotion/styled";

export const HeaderStyled = styled.header`
  .wrapper {
    display: flex;
    align-items: center;
    padding-top: 16px;
    padding-bottom: 16px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.05);
  }

  .link {
    display: flex;
    align-items: center;
    gap: 8px;
    text-decoration: none;
    font: var(--caption-regular);
    color: var(--black);

    img {
      padding: 8px;
      background-color: var(--cocoabrown);
      border-radius: 50%;
    }
  }

  @media screen and (min-width: 768px) {
    .wrapper {
      border-bottom: transparent;
    }

    .link {
      font: var(--button);
    }
  }
`;
