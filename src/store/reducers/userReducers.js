import { 
  USER_REGISTER_FAIL,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_SIGNIN_FAIL, 
  USER_SIGNIN_REQUEST, 
  USER_SIGNIN_SUCCESS 
} 
from "../types";

const initialState = {
  isLoading : false,  
  userInfo : {},
  error : null
};

export const userSigninReducer = (signinState = initialState, action) => {

  const { type, payload } = action;
  switch(type){
    case USER_SIGNIN_REQUEST:
      return {
        ...initialState,
        isLoading : true,
      }
    case USER_SIGNIN_SUCCESS:
      return {
        ...initialState,
        isLoading : false,
        userInfo : payload,
        // error : "sample Error statement"
      };
    case USER_SIGNIN_FAIL:
      console.log(payload);
      return {
        ...initialState,
        isLoading : false,
        error : payload
      };
    default:
      return signinState;
    };
}


export const userRegisterReducer = (registerState = initialState, action) => {

  const { type, payload } = action;
  switch(type){
    case USER_REGISTER_REQUEST:
      return {
        ...initialState,
        isLoading : true,
      };
    case USER_REGISTER_SUCCESS:
      return {
        ...initialState,
        isLoading : false,
        userInfo : payload,
        // error : "sample Error statement"
      };
    case USER_REGISTER_FAIL:
      return {
        ...initialState,
        isLoading : false,
        error : "theres an error"
      };
    default:
      return registerState;
  };
}