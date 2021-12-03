import { ActionContext, ActionTree } from 'vuex/types';
import RootState from '../types';
import { ShopState } from './types';

interface ShopActionContext extends ActionContext<ShopState, RootState> {}

export const actions: ActionTree<ShopState, RootState> = {
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
  
};

export default actions;
