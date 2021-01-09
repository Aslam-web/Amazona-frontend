import React from 'react'
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { addToCart, removeCartItem } from '../store/actions/cartActions';

export default function Cart( {item} ) {

  const dispatch = useDispatch();

  const removeFromCartHandler = () => {
    dispatch((removeCartItem(item._id)));
  }

  return (

    // <>from component "Cart" {item.name} </>

    <ul>

      <li>
        <div className="row">
          <div>
            <img className="small" src={item.image} alt="Product-image"/>
          </div>
          <div className="min-30">
            <Link to={`/products/${item._id}`}>  
              {item.name}
            </Link>
          </div>
          <div>                
            <select value={item.qty}
            onChange={ (e) => {dispatch(addToCart(item._id, Number(e.target.value)))} }
            >
              {
              [...Array(item.countInStock)].map((_,i) => 
              (item.qty == i+1) ?
                <option key={i+1} selected>{i+1}</option>
                :
                <option key={i+1}>{i+1}</option>
              )              
             }
            </select>
          </div>
          <div>${item.price}</div>
          <div>
            <button className="deleteFromCart" onClick={removeFromCartHandler}>delete</button>
          </div>
        </div>
      </li>

    </ul>
  )
}
