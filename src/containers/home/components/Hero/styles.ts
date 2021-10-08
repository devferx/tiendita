import styled from "@emotion/styled";

export const StyledHero = styled.section`
  position: relative;
  margin: 24px 0px;
  width: 100%;
  height: 132px;
  border-radius: 16px;
  overflow: hidden;
  margin-top: 152px;

  img {
    position: relative;
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 16px;
  }

  &::after {
    content: "";
    position: absolute;
    display: block;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(252, 70, 45, 0.24);
    z-index: 1;
  }

  h1 {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 80%;
    text-align: center;
    transform: translate(-50%, -50%);
    font: var(--body2-bold);
    color: white;
    z-index: 2;
  }

  @media screen and (min-width: 768px) {
    height: 250px;
    margin-top: 90px;

    h1 {
      font: var(--headline1);
    }
  }
`;
