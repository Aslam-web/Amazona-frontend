import { 
  CHECKOUT_SIGNIN,
  CHECKOUT_SHIPPING, 
  CHECKOUT_PAYMENT_METHOD
} from "../types";

const initialState = {
  signedIn : false,
  shippedAddress : false,
  donePayment : false
};

export const checkoutReducer = ( checkoutState = initialState, action ) => {
  switch(action.type){
    case CHECKOUT_SIGNIN:
      return {
        ...checkoutState,
        signedIn : true
      };
    case CHECKOUT_SHIPPING:
      return {
        ...checkoutState,
        shippedAddress : true
      };
    case CHECKOUT_PAYMENT_METHOD:
      return {
        ...checkoutState,
        donePayment : true
      };
    default:
      return checkoutState;
  };
};