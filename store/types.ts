export default interface RootState {}

export interface Product {
  id: number;
  title: string;
  price: number;
  category: string;
  description: string;
  image: string;
}

export interface CartItems{
  productCart: Product;
  quantity: number;
}