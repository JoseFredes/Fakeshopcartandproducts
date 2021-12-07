import { GetterTree } from 'vuex';
import RootState from '../types';
import { ShopState } from './types';
import { Product } from '../types';

export const getters: GetterTree<ShopState, RootState> = {
  // Bring the stock of products
  stock: (state): number => {
    return state.products.length;
  },
  // If there is no data in, it returns a boolean value
  noData: (state): boolean => {
    return !state.fetching.active && state.products.length === 0;
  },
  showError: (state): boolean => {
    return !state.fetching.active && state.fetching.error;
  },
  // Should bring the quantity of the product that is in the cart 
  getQuantityforProduct: (state) => (id: number): number =>{
    let isInCart = state.cart.find(item => item.productCart.id === id)
    if(isInCart){
      return isInCart.quantity;
    }
    else{
      return 0;
    }
  },
  // Get the total to pay according to the number of products and their price
  getTotalToPay: (state) : number =>{
    let total:number = 0;

    state.cart.forEach(item => { 
      total += item.productCart.price * item.quantity
    })
    return Math.round(total)

  },  
}

export default getters;