
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
    if(!state.cart.includes(product)){
      
      state.cart.push({productCart: product , quantity: 1});      
    }
    else{
      console.log('si lo tengo')
    }  
  }
}

export default mutations;
