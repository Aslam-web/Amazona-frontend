import { combineReducers } from 'redux';
import { addToCartReducer } from './cartReducers';
import { getProductReducer, productDetailsReducer } from './productReducers';

export default combineReducers({
  productList : getProductReducer,
  productDetails : productDetailsReducer,
  cart : addToCartReducer
})