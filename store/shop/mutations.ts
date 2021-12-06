
import { MutationTree } from 'vuex';
import { State } from 'vuex-class';
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

  addToCart: (state, product:Product): void =>{
    let productInCart = state.cart.find(item => {
      return item.productCart.id === product.id
    })
    if(!productInCart){
         state.cart.push({productCart: product , quantity: 1});      
    }
    else{
       productInCart.quantity++
    } 
  },

  increaseQuantity(state, product : Product){
      
    let item = state.cart.find(item => {
      return item.productCart === product
    })
    if(item){
      item.quantity++
    }
  },
  decreaseQuantity(state, product: Product){
    let item = state.cart.find(item => {
      return item.productCart === product
    })
    if(item){
      item.quantity--
    }
  },
  removeToCart: (state, product: Product): void =>{
    const itemInCart = state.cart.findIndex(item => item.productCart.id === product.id);
    console.log(itemInCart);
    if (itemInCart != -1) {
      state.cart.splice(itemInCart, 1);
    }
  },
  clearCart:(state):void =>{
    state.cart = []
  }
  
}

export default mutations;
