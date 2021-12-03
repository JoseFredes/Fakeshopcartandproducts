import { Product ,Cart } from '../types';


export interface Flags {
  active: boolean;
  error: boolean;
}

export interface ShopState {
  fetching: Flags;
  products: Product[];
  cart: Cart[];
}