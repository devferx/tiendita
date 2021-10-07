import { useState } from "react";

import { ProductModal } from "@containers/home/components/ProductModal";
import { IProduct } from "@interfaces/product";
import { StyledProduct } from "./styles";

interface Props {
  product: IProduct;
  displayDiscount: boolean;
}

export const Product = ({ product, displayDiscount }: Props) => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => setShowModal(!showModal);

  return (
    <StyledProduct>
      {product.discountPercentage && displayDiscount && (
        <span className="discount">{product.discountPercentage}% dto.</span>
      )}
      <img src={product.imageURL} alt={product.name} />

      <div className="product-info">
        <p className="price">
          ${product.price}/{product.weightUnit}{" "}
          {product.priceWithoutDiscount && (
            <span className="original-price">
              ${product.priceWithoutDiscount}/{product.weightUnit}
            </span>
          )}
        </p>
        <p className="name">{product.name}</p>
        {product.weight && (
          <p className="weight">
            {product.weight} {product.weightUnit}
          </p>
        )}
      </div>

      <button onClick={toggleModal}>Agregar</button>

      <ProductModal
        product={product}
        isActive={showModal}
        toggleModal={toggleModal}
      />
    </StyledProduct>
  );
};
