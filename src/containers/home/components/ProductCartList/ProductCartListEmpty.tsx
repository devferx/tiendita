import styled from "@emotion/styled";

const Container = styled.div`
  flex: 1;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 24px;

  img {
    width: 250px;
  }

  p {
    font: var(--headline3);
  }
`;

export const ProductCartListEmpty = () => {
  return (
    <Container>
      <img src="/assets/images/cart-empty.png" alt="cart empty" />
      <p>Tu canasta está vacía</p>
    </Container>
  );
};
