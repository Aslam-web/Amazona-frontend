import axios from 'axios';
import {
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
  PRODUCT_LIST_FAIL
}
from '../types';

export const getProductAction = () => async dispatch => {

  dispatch({
    type : PRODUCT_LIST_REQUEST
  })

  try {
    const data = await axios.get('http://localhost:2020/api/products');
    dispatch({
      type : PRODUCT_LIST_SUCCESS,
      payload : data
    })

  } catch (error) {
    dispatch({
      type : PRODUCT_LIST_FAIL
    })
  }
}