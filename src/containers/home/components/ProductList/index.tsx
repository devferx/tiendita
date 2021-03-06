import { ProductListContainer } from "./styles";
import { IProduct } from "@interfaces/product";
import { Product } from "../Product";

interface ProductListProps {
  title: string;
  products: IProduct[];
  displayDiscount?: boolean;
  isModal?: boolean;
}

export const ProductList = ({
  title,
  products,
  displayDiscount = true,
  isModal = false,
}: ProductListProps) => {
  return (
    <ProductListContainer isModal={isModal}>
      <h3 className="title">{title}</h3>
      <div className="product-list">
        {products.map((product: IProduct, i) => (
          <Product
            key={product.name + i}
            product={product}
            displayDiscount={displayDiscount}
          />
        ))}
      </div>
    </ProductListContainer>
  );
};
