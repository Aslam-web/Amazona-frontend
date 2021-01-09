import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import CheckoutSteps from '../component/CheckoutSteps';
import { saveShippingAddress } from '../store/actions/cartActions';

export default function ShippingAddressScreen(props) {

  const dispatch = useDispatch();

  const [ fullname, setFullname] = useState('');
  const [ address, setAddress] = useState('');
  const [ city, setCity] = useState('');
  const [ postalcode, setPostalcode] = useState('');
  const [ country, setCountry] = useState('');

  const { signedIn } = useSelector(state => state.checkoutSteps);

  useEffect( () => {
    console.log("signedIn " + signedIn);
    if(!signedIn){
      props.history.push('/signin');
    };
    
  }, [signedIn]);
  
  const submitButtonHandler = (e) => {
    e.preventDefault();
    dispatch(saveShippingAddress({fullname, address, city, postalcode, country}));
    props.history.push('/payment');
  }
  
  return (
    <div>
      <CheckoutSteps step1 step2></CheckoutSteps>
      <form className="form" onSubmit={submitButtonHandler}>
        <div>
          <h1>Shipping Address</h1>
        </div>
        <div>
          <label htmlFor="fullname">Full Name</label>
          <input type="text" id="fullname" placeholder="Enter Full Name" required
          onChange={ (e) => setFullname(e.target.value) }
          ></input>
        </div>
        <div>
          <label htmlFor="address">Address</label>
          <input type="text" id="address" placeholder="Enter Address" required
          onChange={ (e) => setAddress(e.target.value) }
          ></input>
        </div>
        <div>
          <label htmlFor="city">City</label>
          <input type="text" id="city" placeholder="Enter City" required
          onChange={ (e) => setCity(e.target.value) }
          ></input>
        </div>
        <div>
          <label htmlFor="postalcode">Postal Code</label>
          <input type="text" id="postalcode" placeholder="Enter Postal Code" required
          onChange={ (e) => setPostalcode(e.target.value) }
          ></input>
        </div>
        <div>
          <label htmlFor="country">Country</label>
          <input type="text" id="country" placeholder="Enter Country" required
          onChange={ (e) => setCountry(e.target.value) }
          ></input>
        </div>
        <button type="submit">Continue</button>
      </form>
    </div>
  )
}
