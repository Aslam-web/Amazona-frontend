import {
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
  PRODUCT_LIST_FAIL
}
from '../types';

const initialState = {
  isLoading : false,
  products : [],
  error : null
};

const getProductReducer = (getProductState = initialState, action) => {

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
      };;
    
    default:
      return initialState;
  }
}

export default getProductReducer;