import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom'
import { addToCart } from '../store/actions/cartActions';
// import data from '../data'

export default function CartScreen(props) {

  // console.log(props);
  const dispatch = useDispatch();
  const productId = props.location.pathname.split('/')[2];
  const qty = props.location.pathname.split('/')[3];
  // console.log(qty);
  
  useEffect( () => {
    dispatch(addToCart(productId, qty))
  }, [productId, qty]);

  return (
    <>from cart screen {qty}</>

    // <div className="row top">
    //   <div className="col-2">
    //     <h1>Shopping Cart</h1>
    //     <ul>

    //       <li>
    //         <div className="row">
    //           <div>
    //             <img className="small" src={product.image} alt="Product-image"/>
    //           </div>
    //           <div className="min-30">
    //             <Link >  
    //               Sample Product
    //             </Link>
    //           </div>
    //           <div>                
    //             <select >
    //               <option>product</option>
    //             </select>
    //           </div>
    //           <div>$21</div>
    //           <div>
    //             <button>delete</button>
    //           </div>
    //         </div>
    //       </li>

    //       <li>
    //         <div className="row">
    //           <div>
    //             <img className="small" src={product.image} alt="Product-image"/>
    //           </div>
    //           <div className="min-30">
    //             <Link >  
    //               Sample Product
    //             </Link>
    //           </div>
    //           <div>                
    //             <select >
    //               <option>product</option>
    //             </select>
    //           </div>
    //           <div>$21</div>
    //           <div>
    //             <button>delete</button>
    //           </div>
    //         </div>
    //       </li>

    //       <li>
    //         <div className="row">
    //           <div>
    //             <img className="small" src={product.image} alt="Product-image"/>
    //           </div>
    //           <div className="min-30">
    //             <Link >  
    //               Sample Product
    //             </Link>
    //           </div>
    //           <div>                
    //             <select >
    //               <option>product</option>
    //             </select>
    //           </div>
    //           <div>$21</div>
    //           <div>
    //             <button>delete</button>
    //           </div>
    //         </div>
    //       </li>

    //     </ul>
    //   </div>
    //   <div className="col-1">
    //     <div className="card card-body">
    //       <ul>
    //         <li>
    //           <h2>Subtotal(12 items) : $ 1221</h2>
    //         </li>
    //         <li>
    //           <button className="primary block">
    //             Proceed To Checkout
    //           </button>
    //         </li>
    //       </ul>
    //     </div>
    //   </div>
    // </div>
  )
}
