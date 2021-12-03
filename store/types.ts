export default interface RootState {}

export interface Product {
  id: number;
  title: string;
  price: number;
  category: string;
  description: string;
  image: string;
}

export interface Cart{
  productCart: Product[];
  quantity: number;
}