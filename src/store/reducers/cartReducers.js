import {
  CART_ADD_ITEM_REQUEST,
  CART_ADD_ITEM_SUCCESS,
  CART_ADD_ITEM_FAIL,
  CART_REMOVE_ITEM
}
from '../types';

const initialState = {
  isLoading : false,
  cartItems : [],
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

    default:
      return addTocartState;
  }
}


// case CART_ADD_ITEM_SUCCESS:
//       let found = addTocartState.cartItems.findIndex(p => p._id == payload._id)

//       if(found <0){
//         return {
//           ...addTocartState,
//           isLoading : false,
//           cartItems : [...addTocartState.cartItems, payload],
//           error : null
//         };
//       }
//       else{
//         const newItem = [...addTocartState.cartItems]
//         newItem[found] = payload;
//         return {
//           ...addTocartState,
//           isLoading : false,
//           cartItems : newItem,
//           error : null
//         };
//       }
    

// {(found <0) ? 
//   ({return {
//     ...addTocartState,
//     isLoading : false,
//     cartItems : [...addTocartState.cartItems, payload],
//     error : null
//     };
//   })
// :        
//   ({return {
//     ...addTocartState,
//     isLoading : false,
//     cartItems : newItem,
//     error : null
//   };
// })}