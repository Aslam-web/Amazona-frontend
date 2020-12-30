import axios from "axios";
import { 
  CART_ADD_ITEM_REQUEST,
  CART_ADD_ITEM_SUCCESS,
  CART_ADD_ITEM_FAIL,
  CART_REMOVE_ITEM
} from "../types";

export const addToCart = (productId, qty) => async (dispatch) => {

  dispatch({
    type : CART_ADD_ITEM_REQUEST
  })
  try {
    const res = await axios.get(`/api/products/${productId}`);
    // console.log(res.data);
    // check if productId exists
    const product = res.data;
    console.log(product);
    // debugger

    if(product._id){
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
  console.log("cartAction" , _id)
}