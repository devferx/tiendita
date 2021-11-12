import { ProductCartList } from "./ProductCartList";
import { ProductCartListHeader } from "./ProductCartListHeader";
import { ProductCartListFooter } from "./ProductCartListFooter";
import { ProductCartListEmpty } from "./ProductCartListEmpty";
import { ProductCartListItem } from "./ProductCartListItem";

export { ProductCartList } from "./ProductCartList";
export { ProductCartListHeader } from "./ProductCartListHeader";
export { ProductCartListFooter } from "./ProductCartListFooter";
export { ProductCartListEmpty } from "./ProductCartListEmpty";
export { ProductCartListItem } from "./ProductCartListItem";

const ProductCartListHoc = Object.assign(ProductCartList, {
  Header: ProductCartListHeader,
  Footer: ProductCartListFooter,
  Empty: ProductCartListEmpty,
  Item: ProductCartListItem,
});

export default ProductCartListHoc;
