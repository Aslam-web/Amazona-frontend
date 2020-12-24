import axios from "axios";
import { 
  CART_ADD_ITEM_REQUEST,
  CART_ADD_ITEM_SUCCESS,
  CART_ADD_ITEM_FAIL
} from "../types";

export const addToCart = (productId, qty) => async (dispatch) => {

  dispatch({
    type : CART_ADD_ITEM_REQUEST
  })
  try {
    const res = await axios.get(`http://localhost:2020/api/products/${productId}`);
    // console.log(res.data);
    const product = res.data;
    console.log(product);
    // debugger
    dispatch({
      type : CART_ADD_ITEM_SUCCESS,
      payload : {...product, qty}
    })
  } 
  catch (error) {
    dispatch({
      type : CART_ADD_ITEM_FAIL,
      payload : error.message
    })
  }
  
}