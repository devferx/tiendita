import { StyledProduct } from "./styles";
import { IProduct } from "../../../../interfaces/product";

interface Props {
  product: IProduct;
  displayDiscount: boolean;
}

export const Product = ({ product, displayDiscount }: Props) => {
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

      <button>Agregar</button>
    </StyledProduct>
  );
};
