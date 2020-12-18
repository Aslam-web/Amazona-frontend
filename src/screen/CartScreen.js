import React from 'react'
import { Link } from 'react-router-dom'
import data from '../data'

export default function CartScreen(props) {

  console.log(props)
  
  const product = data.products.find( p => p._id == 1);
  // console.log(product)

  return (
    <div className="row top">
      <div className="col-2">
        <h1>Shopping Cart</h1>
        <ul>

          <li>
            <div className="row">
              <div>
                <img className="small" src={product.image} alt="Product-image"/>
              </div>
              <div className="min-30">
                <Link >  
                  Sample Product
                </Link>
              </div>
              <div>                
                <select >
                  <option>product</option>
                </select>
              </div>
              <div>$21</div>
              <div>
                <button>delete</button>
              </div>
            </div>
          </li>

          <li>
            <div className="row">
              <div>
                <img className="small" src={product.image} alt="Product-image"/>
              </div>
              <div className="min-30">
                <Link >  
                  Sample Product
                </Link>
              </div>
              <div>                
                <select >
                  <option>product</option>
                </select>
              </div>
              <div>$21</div>
              <div>
                <button>delete</button>
              </div>
            </div>
          </li>

          <li>
            <div className="row">
              <div>
                <img className="small" src={product.image} alt="Product-image"/>
              </div>
              <div className="min-30">
                <Link >  
                  Sample Product
                </Link>
              </div>
              <div>                
                <select >
                  <option>product</option>
                </select>
              </div>
              <div>$21</div>
              <div>
                <button>delete</button>
              </div>
            </div>
          </li>

        </ul>
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
