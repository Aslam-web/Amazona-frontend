import React from 'react'
import Rating from './Rating'


export default function Products({item}) {
  
  return (
    <article className="productItem">
      <a href="/productsForm.html" className="productItemimage">
        <img src={item.image} alt=""/>
      </a>
      <div className="productItemDetails">
        <ul>
          <li className="productItemName">
            <a href="/productsForm.html" className="">{item.name}</a>
            <p>{item.brand}</p>
          </li>
          <li className="productItemDesc">{item.description}</li>
          <li className="productItemPrice">${item.price}</li>
          <Rating rating = {item.rating} reviews = {item.numReviews}/>
        </ul>
        <button className="addToCart">Add To Cart</button>
      </div>
    </article>
  )
}
