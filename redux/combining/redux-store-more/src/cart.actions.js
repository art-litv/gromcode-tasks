export const ADD_PRODUCT = "CART/ADD_PRODUCT";
export const DELETE_PRODUCT = "CART/DELETE_PRODUCT";

export const addProduct = (productData) => ({
  type: ADD_PRODUCT,
  payload: {
    productData,
  },
});

export const deleteProduct = (productId) => ({
  type: DELETE_PRODUCT,
  payload: {
    productId,
  },
});
