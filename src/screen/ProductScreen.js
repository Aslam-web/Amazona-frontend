import React from 'react'
// import Link from 'react'
import data from '../data'
import {Link} from 'react-router-dom';
import Rating from '../component/Rating';

export default function ProductScreen(props) {
  // console.log(props);

  const qty = 100;
  const product = data.products.find(p => p._id == props.match.params.id)
  // console.log(product);

  const addToCartHandler = () => {
    props.history.push(`/cart/${product._id}/${qty}`)
  }

  return (
    <section className="productsContainer">

    <Link to='/'>Back to home</Link>
    <div className="row top">

   
    <div className="col-2">
     
      <img className="large pad-5" src={product.image} />
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
          {/* <Link to={`/cart/${product._id}`}> */}
            <button className="primary block" onClick={addToCartHandler}>Add To Cart</button>
          {/* </Link> */}
        </li>
        </ul>
      </div>
      </div>
    </div>

    </section>
  )
}
