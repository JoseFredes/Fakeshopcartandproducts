import { ShopState } from "./types";

export const initState = (): ShopState => ({
  fetching: {
    active: false,
    error: false,
  },
  products: [],
  cart: [],
});

export default initState;