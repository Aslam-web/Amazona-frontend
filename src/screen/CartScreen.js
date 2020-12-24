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
  console.log(cartItems);

  const allCartItems = cartItems.map(c => <Cart key = {c._id} item = {c} />);
  
  const { id, qty } = props.match.params;
  // console.log(qty);
  
  useEffect( () => {
    dispatch(addToCart(id, qty))
  }, [id, qty]);

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
              <h2>Subtotal(12 items) : $ 1221</h2>
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
