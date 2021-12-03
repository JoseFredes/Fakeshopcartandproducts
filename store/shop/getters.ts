import { GetterTree } from 'vuex';
import RootState from '../types';
import { ShopState } from './types';

export const getters: GetterTree<ShopState, RootState> = {
  stock: (state): number => {
    return state.products.length;
  },
  noData: (state): boolean => {
    return !state.fetching.active && state.products.length === 0;
  },
  showError: (state): boolean => {
    return !state.fetching.active && state.fetching.error;
  }
}

export default getters;