import { ActionContext, ActionTree } from 'vuex/types';
import RootState from '../types';
import { ShopState } from './types';
import { Product } from '../types';

interface ShopActionContext extends ActionContext<ShopState, RootState> {}

export const actions: ActionTree<ShopState, RootState> = {
  // The function brings the products from the api
  fetchProducts: ({ commit }: ShopActionContext) => {
    commit('toggleFetching');
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((json) => {
        commit('setProducts', json);
        commit('toggleError', false);
      })
      .catch((_error) => commit('toggleError'))
      .finally(() => commit('toggleFetching'))
  },
  // This function decreases the products in the cart, when the cart reaches 0, the product is removed
  decreaseQuantityInCart : ({commit, state}, product : Product )=>{
    let isProduct = state.cart.find(item => item.productCart === product)

    if(isProduct){
      if(isProduct.quantity > 1){
        commit('decreaseQuantity',product)
      }
      else{
        commit('removeToCart',product)
      }
    }
  }
  
};

export default actions;
