import { GetterTree } from 'vuex';
import RootState from '../types';
import { ShopState } from './types';
import { Product } from '../types';

export const getters: GetterTree<ShopState, RootState> = {
  stock: (state): number => {
    return state.products.length;
  },
  noData: (state): boolean => {
    return !state.fetching.active && state.products.length === 0;
  },
  showError: (state): boolean => {
    return !state.fetching.active && state.fetching.error;
  },
  getQuantityforProduct: (state, product:Product): number =>{
  
    let itemCart = state.cart.length
    
    return itemCart;
    
  
  },
  getTotalToPay: (state) : number =>{
    let total:number = 0;

    state.cart.forEach(item => { 
      total += item.productCart.price * item.quantity
    })
    return Math.round(total)

  } 
  
}

export default getters;