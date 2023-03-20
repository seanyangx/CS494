import { RECEIVE_PRODUCTS } from './actions';

const initialState = {
  products: []
};

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case RECEIVE_PRODUCTS:
      return {
        ...state,
        products: action.products
      };
    default:
      return state;
  }
}