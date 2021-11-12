import styled from "@emotion/styled";
import { CartItem } from "@context/cartReducer";

const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
  padding: 24px 16px;

  .img {
    width: 64px;
  }

  .desc {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  .title {
    font: var(--body2-regular);
    color: var(--cocoa-brown);
  }

  .price {
    font: var(--body1-bold);
    color: var(--cocoa-brown);
  }
`;

interface ProductCartListItemProps {
  product: CartItem;
}

export const ProductCartListItem = ({ product }: ProductCartListItemProps) => {
  return (
    <Container>
      <img className="img" src={product.product.imageURL} alt="" />
      <div className="desc">
        <p className="title">{product.product.name}</p>
        <p className="price">{product.product.price}</p>
      </div>
      <div style={{ flex: 1 }} />
      <div>buttons</div>
    </Container>
  );
};
