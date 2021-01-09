import axios from "axios";
import { 
  CART_ADD_ITEM_REQUEST,
  CART_ADD_ITEM_SUCCESS,
  CART_ADD_ITEM_FAIL,
  CART_REMOVE_ITEM,
  CART_SAVE_SHIPPING_ADDRESS,
  CHECKOUT_SHIPPING,
  CART_SAVE_PAYMENT_METHOD,
  CHECKOUT_PAYMENT_METHOD
} from "../types";

export const addToCart = (productId, qty) => async (dispatch) => {
  // console.log(productId, qty);
  dispatch({
    type : CART_ADD_ITEM_REQUEST
  })
  try {
    const res = await axios.get(`/api/products/${productId}`);
    
    let product = res.data;
    if(product._id){
   
    // delete product._id;
    dispatch({
      type : CART_ADD_ITEM_SUCCESS,
      payload : {...product, qty}
    })}
   
  } 
  catch (error) {
    dispatch({
      type : CART_ADD_ITEM_FAIL,
      payload : error.message
    })
  }
  
}

export const removeCartItem = (_id) => dispatch => {

  dispatch({
    type : CART_REMOVE_ITEM,
    payload : _id
  })
  // console.log("cartAction" , _id)
}

export const saveShippingAddress = (data) => dispatch => {
  // console.log(data);
  dispatch({
    type : CART_SAVE_SHIPPING_ADDRESS,
    payload : data
  })
  dispatch({
    type : CHECKOUT_SHIPPING
  })
}

export const savePaymentMethod = (paymentMethod) => dispatch => {
  dispatch({
    type : CART_SAVE_PAYMENT_METHOD,
    payload : paymentMethod
  });
  dispatch({
    type : CHECKOUT_PAYMENT_METHOD
  })
}