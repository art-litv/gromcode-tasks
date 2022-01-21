import { ADD_PRODUCT, DELETE_PRODUCT } from "./cart.actions.js";

export default function cartReducer(state = { products: [] }, action) {
  const { payload } = action;
  switch (action.type) {
    case ADD_PRODUCT:
      return {
        ...state,
        products: state.products.concat(payload.product),
      };
    case DELETE_PRODUCT:
      return {
        ...state,
        products: state.products.filter({ id } !== payload.productId),
      };
    default:
      return state;
  }
}
