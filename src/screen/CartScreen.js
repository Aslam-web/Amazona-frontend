import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import Cart from '../component/Cart';
import { addToCart } from '../store/actions/cartActions';
// import data from '../data'

export default function CartScreen(props) {

  // console.log(props);
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cartItems);  

  const allCartItems = cartItems.map(c => <Cart key = {c._id} item = {c} />);
  
  const { id } = props.match.params;
  const qty = Number(props.match.params.qty);

  const totQty = cartItems.reduce( (tot, item) =>{return item.qty + tot} , 0);

  const totAmount = cartItems.reduce( (tot, item) =>{return item.price * item.qty + tot} , 0);
  
  useEffect( () => {
    dispatch(addToCart(id, qty))
    return ()=> {
      console.log("cartScreen is unmounting")
    }
  }, [dispatch, id, qty]);

  return (
    // <>from cart screen:  productId = {id} ; quantity = {qty}</>

    <div className="row top">
      <div className="col-2">
        <h1>Shopping Cart</h1>
        
        {allCartItems}

      </div>
      <div className="col-1">
        <div className="card card-body">
          <ul>
            <li>
              <h2>Subtotal({totQty} items) : $ {totAmount} </h2>
            </li>
            <li>
              <button className="primary block">
                Proceed To Checkout
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
