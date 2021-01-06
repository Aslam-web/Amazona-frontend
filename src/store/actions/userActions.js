import axios from "axios";
import { 
  CHECKOUT_SIGNIN,
  USER_REGISTER_FAIL,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_SIGNIN_FAIL, 
  USER_SIGNIN_REQUEST, 
  USER_SIGNIN_SUCCESS 
} 
from "../types";

export const signinAction = (email, password) => async dispatch => {
  dispatch({
    type : USER_SIGNIN_REQUEST
  });

  try {
    const res = await axios.post('/api/user/signin', { email, password })
    // console.log(res);
    dispatch({
      type : USER_SIGNIN_SUCCESS,
      payload : res.data
    });
    dispatch({
      type : CHECKOUT_SIGNIN
    });
  }
  catch(error) {
    // console.log(error.message);
    // console.log(error.response);
    dispatch({
      type : USER_SIGNIN_FAIL,
      payload : error.response.data.message ? 
        error.response.data.message : error.message
    });
  }
}

export const registerAction = (name, email, password) => async dispatch => {
  dispatch({
    type : USER_REGISTER_REQUEST
  })
  try {
    const res = await axios.post('/api/user/register', { name, email, password })
    // console.log(res);
    const data = res.data;
    dispatch({
      type : USER_REGISTER_SUCCESS,
      payload : res.data
    });
    localStorage.setItem('userInfo', JSON.stringify(data));
  }
  catch(error) {
      console.log(error);
    dispatch({
      type : USER_REGISTER_FAIL,
      // payload : error.response.data.message
    });
  }
}