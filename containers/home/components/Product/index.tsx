import { StyledProduct } from "./styles";
import { IProduct } from "../../../../interfaces/product";

interface Props {
  product: IProduct;
}

export const Product = ({ product }: Props) => {
  return <StyledProduct>{product.name}</StyledProduct>;
};
