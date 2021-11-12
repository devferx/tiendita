import { ProductActionsStyled } from "./styles";

interface ProductActionsProps {
  quantity: number;
  handleDecrement: () => void;
  handleIncrement: () => void;
}

export const ProductActions = ({
  quantity,
  handleDecrement,
  handleIncrement,
}: ProductActionsProps) => {
  return (
    <ProductActionsStyled>
      <button onClick={handleDecrement}>
        <img src="/assets/icons/remove.svg" alt="Remove" />
      </button>
      <p className="quantity">{quantity}</p>
      <button onClick={handleIncrement}>
        <img src="/assets/icons/add.svg" alt="Add" />
      </button>
    </ProductActionsStyled>
  );
};
