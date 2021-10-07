import { useState } from "react";

import { IProduct } from "@interfaces/product";
import { StyledProductInfo } from "./styles";

interface Props {
  product: IProduct;
}

export const ProductInfo = ({ product }: Props) => {
  const [cant, setCant] = useState(1);

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
            <button>
              <img src="/assets/icons/remove.svg" alt="Remove" />
            </button>
            <p className="quantity">{cant}</p>
            <button>
              <img src="/assets/icons/add.svg" alt="Add" />
            </button>
          </div>
          <button className="add-btn">Agregar</button>
        </div>
      </div>
    </StyledProductInfo>
  );
};
