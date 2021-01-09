import { 
  ORDER_CREATE_FAIL, 
  ORDER_CREATE_REQUEST, 
  ORDER_CREATE_SUCCESS 
} 
from "../types";

export const createOrderReducer = ( createOrderState = {}, actions ) => {
  const { type, payload } = actions;
  switch (type) {
    case ORDER_CREATE_REQUEST:
      return {
        ...createOrderState,
        isLoading : true  
      }  
    case ORDER_CREATE_SUCCESS:
      return {
        ...createOrderState,
        order : payload,
        error : null
      }
    case ORDER_CREATE_FAIL:
      return {
        ...createOrderState,
        error : payload
      }
    default:
      return createOrderState;
  }
}


// import {
//   ORDER_CREATE_FAIL,
//   ORDER_CREATE_REQUEST,
//   ORDER_CREATE_RESET,
//   ORDER_CREATE_SUCCESS,
// } from '../constants/orderConstants';

// export const orderCreateReducer = (state = {}, action) => {
//   switch (action.type) {
//     case ORDER_CREATE_REQUEST:
//       return { loading: true };
//     case ORDER_CREATE_SUCCESS:
//       return { loading: false, success: true, order: action.payload };
//     case ORDER_CREATE_FAIL:
//       return { loading: false, error: action.payload };
//     case ORDER_CREATE_RESET:
//       return {};
//     default:
//       return state;
//   }
// };