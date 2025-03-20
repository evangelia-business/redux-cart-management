import { ADD_TO_CART, REMOVE_FROM_CART, UPDATE_QUANTITY, APPLY_DISCOUNT } from '../actions/cartActions';

const initialState = {
  items: [],
  discountCode: null,
  discountAmount: 0,
  taxRate: 0.08,
  shippingFee: 5.99
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    // TODO: Implement cases for ADD_TO_CART, REMOVE_FROM_CART, UPDATE_QUANTITY, APPLY_DISCOUNT
    // Remember to maintain immutability!
    
    default:
      return state;
  }
};

export default cartReducer;