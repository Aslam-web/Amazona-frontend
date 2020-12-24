import {
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
  PRODUCT_LIST_FAIL,
  PRODUCT_DETAILS_REQUEST,
  PRODUCT_DETAILS_SUCCESS,
  PRODUCT_DETAILS_FAIL
}
from '../types';

const initialState = {
  isLoading : false,
  products : [],
  error : null
};

export const getProductReducer = (getProductState = initialState, action) => {

  // console.log(action + "\n from productReducers");

  const { type, payload } = action;
  switch(type) {
    case PRODUCT_LIST_REQUEST:
      return{
        ...getProductState,
        isLoading : true
      };

    case PRODUCT_LIST_SUCCESS:
      return{
        ...getProductState,
        ...payload,
        isLoading : false
      };

    case PRODUCT_LIST_FAIL:
      return{
        ...getProductState,
        isLoading : false
      };
    
    default:
      return getProductState;
  }
}

const initialState2 = {
  isLoading : false,
  product : {}, 
  error : null
};

export const productDetailsReducer = (productDetailsState = initialState2, action) => {
  // console.log(action);
  const { type, payload } = action;
  switch (type) {
    case PRODUCT_DETAILS_REQUEST:
      return {
        ...productDetailsState, 
        isLoading : true
      };
      
    case PRODUCT_DETAILS_SUCCESS:
      // console.log(payload)
      return{
        ...productDetailsState, 
        isLoading : false, 
        product : payload, 
        error : null
      };
    
    case PRODUCT_DETAILS_FAIL:
      return {
        ...productDetailsState, 
        isLoading : false, 
        product:{}, 
        error : payload
      };
    default:
      return productDetailsState;
  }
}