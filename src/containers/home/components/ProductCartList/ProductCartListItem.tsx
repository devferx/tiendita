import styled from "@emotion/styled";
import { CartItem } from "@context/cartReducer";
import { ProductActions } from "../ProductActions";

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
  cartItem: CartItem;
  incrementCartItem: (productId: string) => void;
  decrementCartItem: (productId: string) => void;
}

export const ProductCartListItem = ({
  cartItem,
  incrementCartItem,
  decrementCartItem,
}: ProductCartListItemProps) => {
  return (
    <Container>
      <img className="img" src={cartItem.product.imageURL} alt="" />
      <div className="desc">
        <p className="title">{cartItem.product.name}</p>
        <p className="price">${cartItem.product.price}</p>
      </div>
      <div style={{ flex: 1 }} />
      <ProductActions
        quantity={cartItem.quantity}
        handleDecrement={() => {
          decrementCartItem(cartItem.product.name);
        }}
        handleIncrement={() => {
          incrementCartItem(cartItem.product.name);
        }}
      />
    </Container>
  );
};
