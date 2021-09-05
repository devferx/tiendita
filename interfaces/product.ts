export interface IProduct {
  name: string;
  desc: string;
  price: number;
  imageURL: string;
  priceWithoutDiscount?: number;
  discountPercentage?: number;
  weightUnit?: string;
  weight?: number;
}
