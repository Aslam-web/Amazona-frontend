import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import CheckoutSteps from '../component/CheckoutSteps';
import { savePaymentMethod } from '../store/actions/cartActions';

export default function PaymentScreen(props) {

  const dispatch = useDispatch();
  const [ paymentMethod, setPaymentMethod ] = useState('paypal');

  const submitButtonHandler = (e) => {
    e.preventDefault();
    console.log(paymentMethod);
    dispatch(savePaymentMethod(paymentMethod));
    
    props.history.push('/placeorder');
  };

  return (
    <div>
      <CheckoutSteps step1 step2 step3></CheckoutSteps>
      <form className="form" onSubmit={submitButtonHandler}>
        <div>
          <h1>Payment</h1>
        </div>
        <div className="radio">
          <input type="radio" id="paypal" name="paymentMethod" value="paypal" checked
          onClick={ (e) => setPaymentMethod(e.target.value) }
          ></input>
          <label htmlFor="paypal">PayPal</label>
        </div>
        <div className="radio">
          <input type="radio" id="stripe" name="paymentMethod" value="stripe"
          onClick={ (e) => setPaymentMethod(e.target.value) }
          ></input>
          <label htmlFor="stripe">Stripe</label>
        </div>
        <button type="submit">Continue</button>
      </form>
    </div>
  )
}