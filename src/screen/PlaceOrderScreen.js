import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import CheckoutSteps from '../component/CheckoutSteps'
export default function PlaceOrderScreen(props) {

  const { shippingAddress, paymentMethod, cartItems} = useSelector(state => state.cart);
  const { address, city, postalcode, country } = shippingAddress;
  
  // console.log(address,city,postalcode,country);

  return (
    <div>
      <CheckoutSteps step1 step2 step3 step4></CheckoutSteps>
      <div className="row top" >
        <div className="col-2">
          <ul className="header2">
            <li>
              <div className="card">
                <h2>Shipping Address</h2>
                <p>{address}, {city}, {postalcode}, {country}</p>
              </div>
            </li>
            <li>
              <div className="card">
                <h2>Payment Method</h2>
                <p>{paymentMethod}</p>
              </div>
            </li>
            <li>
              <div className="card">
                <h2>Order Items</h2>
                <ul>

                  {
                    cartItems.map( item => 
                      (<li>
                        <div className="row">
                          <div>
                            <img className="small" src={item.image} alt={item.name}></img>
                          </div>
                          <div className="min-30">
                            <Link to={`/products/${item._id}`}>{item.name}</Link>
                          </div>
                          <div>
                            {item.qty} x {item.price} = ${item.qty * item.price}
                          </div>
                        </div>
                      </li>)
                    )
                  }

                </ul>
              </div>
            </li>
          </ul>
        </div>
        <div className="col-1 card-style">
          <div>
            <ul className="header2">
              <li>
                <h2>Order Summary</h2>
              </li>
              <li>
                <div className="row">
                  <div>Items Price</div>
                  <div>${}</div>
                </div>
              </li>
              <li>
                <div className="row">
                  <div>Shipping Address</div>
                  <div>$123</div>
                </div>
              </li>
              <li>
                <div className="row">
                  <div>Tax</div>
                  <div>$12</div>
                </div>
              </li>
              <li>
                <div className="row">
                  <strong><div>Order Total</div></strong>
                  <strong><div>$258</div></strong>
                </div>
              </li>
              <li className="form">
                <button type="submit">Place Order</button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
