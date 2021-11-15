import { useContext, useState } from "react";
import toast from "react-hot-toast";

import { IProduct } from "@interfaces/product";
import { StyledProductInfo } from "./styles";
import { CartContext } from "@context/CartContext";
import { ProductActions } from "../ProductActions";

interface Props {
  product: IProduct;
}

export const ProductInfo = ({ product }: Props) => {
  const [quantity, setQuantity] = useState(1);
  const { addToCard } = useContext(CartContext);

  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrement = () => {
    setQuantity((prevState) => Math.max(prevState - 1, 1));
  };

  const handleAdd = () => {
    addToCard({ product, quantity });
    setQuantity(1);
    toast.success("Producto Agregado!", {
      position: "top-right",
      style: {
        zIndex: 99999,
        font: "var(--body2-regular)",
      },
    });
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
          <ProductActions
            quantity={quantity}
            handleDecrement={handleDecrement}
            handleIncrement={handleIncrement}
          />
          <button className="add-btn" onClick={handleAdd}>
            Agregar
          </button>
        </div>
      </div>
    </StyledProductInfo>
  );
};
