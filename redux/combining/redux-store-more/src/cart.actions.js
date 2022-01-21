export const ADD_PRODUCT = "CART/ADD_PRODUCT";
export const REMOVE_PRODUCT = "CART/REMOVE_PRODUCT";

export const addProduct = (product) => ({
  type: ADD_PRODUCT,
  payload: {
    product,
  },
});

export const removeProduct = (productId) => ({
  type: REMOVE_PRODUCT,
  payload: {
    productId,
  },
});
