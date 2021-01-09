import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom';
import Rating from '../component/Rating';
import { useDispatch, useSelector } from 'react-redux';
import { detailsProduct } from '../store/actions/productActions';
import LoadingBox from '../component/LoadingBox';
// [...Array(tot)].map((v,i) => v)

export default function ProductScreen(props) {
  const dispatch = useDispatch();
  const [qty, setQty] = useState(1);
  const { isLoading, product, error } = useSelector(state => state.productDetails);
  // console.log(product);
  const productId = props.match.params.id;

  useEffect(() => {
    dispatch(detailsProduct(productId))
  }, [productId])       // complains for not mentioning the dependancy "dispatch"

  // const qty = 100;
  // const product = data.products.find(p => p._id == props.match.params.id)

  const addToCartHandler = () => {
    props.history.push(`/cart/${product._id}/${qty}`);
  }

  return (

    // <>from product screen {productId}</>

    <>

    { isLoading ? 
      <LoadingBox/>

      :

      <section className="productsContainer">

      <Link to='/'>Back to home {qty}</Link>
      <div className="row top">

        <div className="col-2">
          <img className="large pad-5" src={product.image} />
        </div>
        <div className="col-1">
          <ul>
            <li>
              <h1>{product.name}</h1>
            </li>
            <li className="productItemRating"><Rating rating={product.rating} reviews={product.numReviews}/></li>
            <li>Price: ${product.price}</li>
            <li>description : {product.description}</li>
          </ul>
        </div>
        <div className="col-1 card-style">
          <div>
            <ul>
              {/* price */}
              <li>
                <div className="row">
                  <div>Price</div>
                  <div className="price">${product.price}</div>
                </div>
              </li>
              {/* Status */}
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
              {/* quantity */}
              <li>
                <div className="row">
                  <div>Quantity</div>
                  <div>
                    <select
                    value={qty}
                    onChange={(e) => setQty(e.target.value)}
                    >
                      {
                        [...Array(product.countInStock)].map((v,i )=>
                              <option selected key={i+1} value={i+1}>
                              {i+1}
                              </option>
                          )
                      }
                    </select>
                  </div>
                </div>
              </li>
              <li>
              <button className="primary block" onClick={addToCartHandler}>Add To Cart</button>
              </li>
            </ul>
          </div>
        </div>
      </div>

    </section>

    }
  </>
  )
}



// {
//   [...Array(product.countInStock)].map(
//     (v,i) => (
//       (i+1 == 1) ?
//         <option selected key={i+1} value={i+1}>
//         {i+1}
//         </option>
//       :
//         <option key={i+1} value={i+1}>
//         {i+1}
//         </option>
//     )
//   )
// }