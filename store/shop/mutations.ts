
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
  //función que añade los productos al carrito recibiendo un producto
  addToCart: (state, product:Product): void =>{
    // con el find, se busca el item y que la canitdad sea mayor o igual a uno, en ese caso, el producto se agrega
    let productInCart = state.cart.find(item => {
      return item.productCart === product
    })

    //pregunta si exite un producto en el carrito
    if(!productInCart){
         state.cart.push({productCart: product , quantity: 1});      
    }
    else{
      //se suman las cantidades
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
    const itemInCart = state.cart.findIndex(item => item.productCart === product);
    console.log(itemInCart);
    if (itemInCart != -1) {
      state.cart.splice(itemInCart, 1);
    }
  }
  
}

export default mutations;
