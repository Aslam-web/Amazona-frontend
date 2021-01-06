import {
  CART_ADD_ITEM_REQUEST,
  CART_ADD_ITEM_SUCCESS,
  CART_ADD_ITEM_FAIL,
  CART_REMOVE_ITEM,
  CART_SAVE_SHIPPING_ADDRESS,
  CART_SAVE_PAYMENT_METHOD
}
from '../types';

const initialState = {
  isLoading : false,
  cartItems : [],
  shippingAddress : {},
  paymentMethod : "",
  error : null
}

export const addToCartReducer = (addTocartState = initialState, actions) => {

  // console.log(actions);
  const { type, payload } = actions;
  // console.log(payload);
  switch(type){
    case CART_ADD_ITEM_REQUEST:
      return {
        ...addTocartState,
        isLoading : true,
        error:null
      };
    
    case CART_ADD_ITEM_SUCCESS:
    let found = addTocartState.cartItems.findIndex(p => p._id == payload._id)

    if(found <0){
      return {
        ...addTocartState,
        isLoading : false,
        cartItems : [...addTocartState.cartItems, payload],
        error : null
      };
    }
    else{
      const newCartItems = [...addTocartState.cartItems]
      newCartItems[found] = payload;
      return {
        ...addTocartState,
        isLoading : false,
        cartItems : newCartItems,
        error : null
      };
    }
  
    case CART_ADD_ITEM_FAIL:
      return {
        ...addTocartState,
        isLoading : false,
        // cartItems : [],
        error : payload
      }



    case CART_REMOVE_ITEM:
      let newCartItems = addTocartState.cartItems.filter(p => p._id !== payload)
      console.log("cartReducer" , payload)
      return {
        ...addTocartState,
        isLoading : false,
        cartItems : newCartItems,
        error : null
      };
    
      case CART_SAVE_SHIPPING_ADDRESS:
        return {
          ...addTocartState,
          shippingAddress : payload
        }
      case CART_SAVE_PAYMENT_METHOD:
        return {
          ...addTocartState,
          paymentMethod : payload
        }

      default:
      return addTocartState;
  }
}

// const [formData, setformData] = useState({});

// const handleChange = (e) => {
//   e.persist();
//   setformData(formData => ({ 
//     ...formData, 
//     [e.target.name]: e.target.value })
//   )
// }