import { ActionTypes } from '../constants/action-types';
const initialState = {
  cart: [],
};

export const addToCartReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.ADD_PRODUCT_TO_CART:
      return { ...state, cart: state.cart.concat(payload) };
    default:
      return state;
  }
};
