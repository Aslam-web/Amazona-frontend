import { combineReducers } from 'redux';
import { addToCartReducer } from './cartReducers';
import { userRegisterReducer, userSigninReducer } from './userReducers';
import { getProductReducer, productDetailsReducer } from './productReducers';
import { checkoutReducer } from './checkoutStepsReducer';
import { createOrderReducer } from './orderReducer';

export default combineReducers({
  productList : getProductReducer,
  productDetails : productDetailsReducer,
  cart : addToCartReducer,
  userSignin : userSigninReducer,
  userRegister : userRegisterReducer,
  checkoutSteps : checkoutReducer,
  createOrder : createOrderReducer
})
