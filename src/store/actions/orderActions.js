import axios from "axios";
import { 
  ORDER_CREATE_FAIL, 
  ORDER_CREATE_REQUEST, 
  ORDER_CREATE_SUCCESS 
} 
from "../types";

export const orderCreate = (order) => async dispatch => {
  console.log(order);
  dispatch({
    type : ORDER_CREATE_REQUEST
  })
  try {
    const res = await axios.post('/api/order', order);
    console.log(res.data);
    dispatch({
      type : ORDER_CREATE_SUCCESS,
      payload : res.data
    })
    dispatch({
        
    })

  } catch (error) {
    dispatch({
      type : ORDER_CREATE_FAIL,
      payload : error
    })
  }
}