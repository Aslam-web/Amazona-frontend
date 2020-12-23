import {
  CART_ADD_ITEM_REQUEST,
  CART_ADD_ITEM_SUCCESS,
  CART_ADD_ITEM_FAIL
}
from '../types';

const initialState = {
  isLoading : false,
  cartItems : [],
  error : null
}

export const addToCartReducer = (addTocartState = initialState, actions) => {

  console.log(actions);
  const { type, payload } = actions;
  console.log(payload);
  switch(type){
    case CART_ADD_ITEM_REQUEST:
      return {
        ...addTocartState,
        isLoading : true
      };
    case CART_ADD_ITEM_SUCCESS:
      // console.log(payload);
      return {
        ...addTocartState,
        isLoading : false,
        cartItems : payload,
        error : null
      };
    case CART_ADD_ITEM_FAIL:
      return {
        ...addTocartState,
        isLoading : false,
        cartItems : [],
        error : payload
      }
    default:
      return addTocartState;
  }
}