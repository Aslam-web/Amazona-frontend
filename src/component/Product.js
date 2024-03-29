import React from 'react'
import Rating from './Rating'
import {Link} from 'react-router-dom';

export default function Product({item}) {
  

  return (
    
    <article className="productItem">
      <Link to={`/products/${item._id}`} className="productItemimage">
        <img src={item.image} alt=""/>
      </Link>
      <div className="productItemDetails">
        <ul>
          <li className="productItemName">
            <Link to={`/products/${item._id}`} className="">{item.name}</Link>
            <p>{item.brand}</p>
          </li>
          <li className="productItemDesc">{item.description}</li>
          <li className="productItemPrice">${item.price}</li>
          <li className="productItemRating">
            <Rating rating = {item.rating} reviews = {item.numReviews}/>
          </li>
         
        </ul>
        <button className="addToCart">Add To Cart</button>
      </div>
    </article>
  )
}
