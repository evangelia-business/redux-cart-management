// Action Types
export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
export const UPDATE_QUANTITY = 'UPDATE_QUANTITY';
export const APPLY_DISCOUNT = 'APPLY_DISCOUNT';

// Action Creators
export const addToCart = (product) => ({
  type: ADD_TO_CART,
  payload: product
});

export const removeFromCart = (productId) => ({
  type: REMOVE_FROM_CART,
  payload: productId
});

// TODO: Implement the following action creators
// export const updateQuantity = (productId, quantity) => ...
// export const applyDiscount = (discountCode) => ...


export const updateQuantity = (productId, quantity) => ({
  type: UPDATE_QUANTITY,
  payload: { productId, quantity }
});

export const applyDiscount = (discountCode) => ({
  type: APPLY_DISCOUNT,
  payload: discountCode
});