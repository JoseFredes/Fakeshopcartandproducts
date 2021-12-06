import { Product ,CartItems } from '../types';


export interface Flags {
  active: boolean;
  error: boolean;
}

export interface ShopState {
  fetching: Flags;
  products: Product[];
  cart: CartItems[];
}