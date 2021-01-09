import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import CheckoutSteps from '../component/CheckoutSteps'
import { orderCreate } from '../store/actions/orderActions';
export default function PlaceOrderScreen(props) {

  const dispatch = useDispatch();
  const cart = useSelector(state => state.cart);
  const { shippingAddress, paymentMethod, cartItems} = cart;
  const { address, city, postalcode, country } = shippingAddress;

  const toPrice = (no) => Number(no.toFixed(2));
  cart.itemsPrice = toPrice(cartItems.reduce( (a, i) => a + i.qty * i.price , 0 ));
  cart.shippingPrice = toPrice(cart.itemsPrice >= 100 ? 0 : 10);
  cart.taxPrice = toPrice(0.15 * cart.itemsPrice);
  cart.totalPrice = cart.itemsPrice + cart.shippingPrice + cart.taxPrice;
   
  const placeOrderHandler = (e) => {
    e.preventDefault();
    // let arr1 = [{name2: "Aslam"}, {name2: "Naseem"}];
    // console.log({...cart, orderItems : cart.cartItems});
    dispatch(orderCreate({...cart, orderItems : cartItems}));
  }

  return (
    <div>
      <div className="row top" >
        <div className="col-2">
          <ul className="header2">
            <li>
              <div className="card">
                <h2>Shipping </h2>
                <p> <strong> Full Name : </strong> {address}, {city}, {postalcode}, {country}</p>
                <p> <strong> Address : </strong> {address}, {city}, {postalcode}, {country}</p>
              </div>
            </li>
            <li>
              <div className="card">
                <h2>Payment</h2>
                <p> <strong> Method : </strong>{paymentMethod}</p>
              </div>
            </li>
            <li>
              <div className="card">
                <h2>Order Items</h2>
                <ul>

                  {
                    cartItems.map( item => 
                      (<li key = {item._id}>
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
                  <div>${cart.itemsPrice}</div>
                </div>
              </li>
              <li>
                <div className="row">
                  <div>Shipping Cost</div>
                  <div>${cart.shippingPrice}</div>
                </div>
              </li>
              <li>
                <div className="row">
                  <div>Tax</div>
                  <div>${cart.taxPrice}</div>
                </div>
              </li>
              <li>
                <div className="row">
                  <strong><div>Order Total</div></strong>
                  <strong><div>${cart.totalPrice}</div></strong>
                </div>
              </li>
              <li className="form">
                <button type="submit" onClick={placeOrderHandler}>Place Order</button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
