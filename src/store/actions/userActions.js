import axios from "axios";
import { 
  USER_SIGNIN_FAIL, 
  USER_SIGNIN_REQUEST, 
  USER_SIGNIN_SUCCESS 
} 
from "../types";

export const signin = (email, password) => async dispatch => {
  dispatch({
    type : USER_SIGNIN_REQUEST
  })

  try {
    const res = await axios.post('/api/user/signin', { email, password })
    console.log(res); 
  }
  catch{}
}