import { useContext, useState } from "react";

import { IProduct } from "@interfaces/product";
import { StyledProductInfo } from "./styles";
import { CartContext } from "@context/CartContext";

interface Props {
  product: IProduct;
  toggleModal?: () => void;
}

export const ProductInfo = ({ product, toggleModal = () => {} }: Props) => {
  const [quantity, setQuantity] = useState(1);
  const { addToCard } = useContext(CartContext);

  const handleIncrement = () => setQuantity(quantity + 1);

  const handleDecrement = () => quantity > 1 && setQuantity(quantity - 1);

  const handleAdd = () => {
    addToCard({ product, quantity });
    toggleModal();
  };

  return (
    <StyledProductInfo>
      <img className="image" src={product.imageURL} alt={product.name} />
      <div>
        <div className="product-info">
          <h1 className="title">{product.name}</h1>
          <p className="price">
            {"·"} ${product.price}/{product.weightUnit}{" "}
            {product.priceWithoutDiscount && (
              <span className="original-price">
                ${product.priceWithoutDiscount}/{product.weightUnit}
              </span>
            )}
          </p>
          <p className="caption">Precios con IVA incluido</p>
          <p className="desc">{product.desc}</p>
        </div>

        <div className="actions">
          <div className="counter">
            <button onClick={handleDecrement}>
              <img src="/assets/icons/remove.svg" alt="Remove" />
            </button>
            <p className="quantity">{quantity}</p>
            <button onClick={handleIncrement}>
              <img src="/assets/icons/add.svg" alt="Add" />
            </button>
          </div>
          <button className="add-btn" onClick={handleAdd}>
            Agregar
          </button>
        </div>
      </div>
    </StyledProductInfo>
  );
};
