import axios from 'axios';
import {
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
  PRODUCT_LIST_FAIL,
  PRODUCT_DETAILS_REQUEST,
  PRODUCT_DETAILS_SUCCESS,
  PRODUCT_DETAILS_FAIL
}
from '../types';

export const getProductAction = () => async (dispatch) => {
  // console.log(dispatch);

  dispatch({
    type : PRODUCT_LIST_REQUEST
  })

  try {
    const res = await axios.get('http://localhost:2020/api/products');
    dispatch({
      type : PRODUCT_LIST_SUCCESS,
      payload : res.data
    })

  } catch (error) {
    dispatch({
      type : PRODUCT_LIST_FAIL
    })
  }
}

export const detailsProduct = (productId) => async (dispatch) => {

  dispatch({
    type : PRODUCT_DETAILS_REQUEST
  })

  try {
    const res = await axios.get(`http://localhost:2020/api/products/${productId}`)
    dispatch({
      type : PRODUCT_DETAILS_SUCCESS,
      payload : res.data
    })
  } catch (error) {
    dispatch({
      type : PRODUCT_DETAILS_FAIL,
      payload : error.message
    })
  }
}