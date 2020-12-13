import React from 'react'
// import Link from 'react'
import data from '../data'
import {Link} from 'react-router-dom';
import Rating from '../component/Rating';

export default function ProductScreen(props) {
  console.log(props);
  
  const product = data.products.find(p => p._id == props.match.params.id)
  console.log(product);


  return (
    <section className="productsContainer">

    <Link to='/'>Back to home</Link>
    <div className="row top">

   
    <div className="col-2">
     
      <img className="large" src={product.image} />
    </div>
    <div className="col-1">
      <ul>
        <li>
          <h1>{product.name}</h1>
        </li>
        <li><Rating rating={product.rating} reviews={product.numReviews}/></li>
        <li>Price: ${product.price}</li>
        <li>description : {product.description}</li>
      </ul>
    </div>
    <div className="col-1">
      <div className="card card body">
        <ul>
          <li>
            <div className="row">
              <div>Price</div>
              <div className="price">${product.price}</div>
            </div>
          </li>
        <li>
          <div className="row">
            <div>Status</div>
            <div>
              {product.countInStock > 0 ? 
              (<span className="success">In Stock</span>)
              :
              (<span className="danger">Unavailable</span>)}
            </div>
          </div>
        </li>
        <li>
          <button className="primary block">Add To Cart</button>
        </li>
        </ul>
      </div>
      </div>
    </div>

    </section>
  )
}
