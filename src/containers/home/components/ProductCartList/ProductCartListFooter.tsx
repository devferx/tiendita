import Link from "next/link";
import styled from "@emotion/styled";

const Footer = styled.footer`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px;
  border-top: 1px solid rgba(0, 0, 0, 0.05);

  .btn-clean {
    background: none;
    border: none;
    cursor: pointer;
    color: var(--boulder);
    font: var(--body2-regular);
  }

  .btn-buy {
    display: flex;
    align-items: center;
    gap: 28px;
    padding: 8px 16px;
    background: var(--malachite);
    font: var(--body2-bold);
    border: none;
    cursor: pointer;
    color: var(--white);
    border-radius: 8px;
    text-decoration: none;

    .counter {
      background: #2e7e78;
      padding: 0 8px;
      border-radius: 4px;
    }

    .price {
      font: var(--body2-regular);
    }
  }
`;

interface ProductCartListFooterProps {
  counter: number;
  price: number;
  payRoute: string;
  cleanCart: () => void;
}

export const ProductCartListFooter = ({
  counter,
  price,
  cleanCart,
  payRoute,
}: ProductCartListFooterProps) => {
  return (
    <Footer>
      <button className="btn-clean" onClick={cleanCart}>
        Vaciar canasta
      </button>

      <Link href={payRoute}>
        <a className="btn-buy">
          <span className="counter">{counter}</span>
          <span>Ir a pagar</span>
          <span className="price">${price}</span>
        </a>
      </Link>
    </Footer>
  );
};
