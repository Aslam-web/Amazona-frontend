import React from 'react'
// import ProductItems from './ProductItems'
export default function Products({item}) {
  // console.log(item)
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
          <li className="productItemPrice">{item.price}</li>
          <li className="productItemRating">
            <span><i className="fa fa-star"></i></span>
            <span><i className="fa fa-star"></i></span>
            <span><i className="fa fa-star"></i></span>
            <span><i className="fa fa-star"></i></span>
            <span><i className="fa fa-star-half"></i></span>
          </li>
        </ul>
        <button className="addToCart">{item.price}</button>
      </div>
    </article>
    

  )
}
