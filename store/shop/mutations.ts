
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
  //set the products
  setProducts: (state, products: Product[]): void => {
    state.products = products;
  },
  //add the products to the cart
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
  // Increases the quantity of a product in the cart
  increaseQuantity(state, product : Product){
      
    let item = state.cart.find(item => {
      return item.productCart === product
    })
    if(item){
      item.quantity++
    }
  },
  // Decreases the quantity of a product in the cart
  decreaseQuantity(state, product: Product){
    let item = state.cart.find(item => {
      return item.productCart === product
    })
    if(item){
      item.quantity--
    }
  },
  // Remove the product from the cart
  removeToCart: (state, product: Product): void =>{
    const itemInCart = state.cart.findIndex(item => item.productCart.id === product.id);
    console.log(itemInCart);
    if (itemInCart != -1) {
      state.cart.splice(itemInCart, 1);
    }
  },
  // Clean the car
  clearCart:(state):void =>{
    state.cart = []
  },
  
}

export default mutations;
