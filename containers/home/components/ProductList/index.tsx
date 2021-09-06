import { ProductListContainer } from "./styles";
import { IProduct } from "../../../../interfaces/product";
import { Product } from "../Product";

interface ProductListProps {
  title: string;
  products: IProduct[];
}

export const ProductList = ({ title, products }: ProductListProps) => {
  return (
    <ProductListContainer>
      <h3 className="title">{title}</h3>
      <div className="product-list">
        {products.map((product: IProduct, i) => (
          <Product key={product.name + i} product={product} />
        ))}
      </div>
    </ProductListContainer>
  );
};
