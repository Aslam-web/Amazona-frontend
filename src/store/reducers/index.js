import { combineReducers } from 'redux';
import getProductReducer from './prodReducer';

export default combineReducers({
  productList : getProductReducer
})