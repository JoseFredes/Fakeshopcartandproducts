
import { MutationTree } from 'vuex';
import { Product } from '../types';
import { ShopState } from './types';

export const mutations: MutationTree<ShopState> = {
  toggleFetching: (state): void => {
    state.fetching.active = !state.fetching.active;
  },
  toggleError: (state, value: boolean | null = null): void => {
    state.fetching.error = value === null ? !state.fetching.error : value;
  },
  setProducts: (state, products: Product[]): void => {
    state.products = products;
  },
  addToCart: (state, product): void =>{
    let productInCart = state.cart.find(item => {
      return item.quantity >= 1
    })
  
    if(!productInCart){
         state.cart.push({productCart: product , quantity: 1});      
    }
    else{
       productInCart.quantity++
    }  
  }
}

export default mutations;
