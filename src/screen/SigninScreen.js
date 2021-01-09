import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import CheckoutSteps from '../component/CheckoutSteps';
import LoadingBox from '../component/LoadingBox';
import MessageBox from '../component/MessageBox';
import { signinAction } from '../store/actions/userActions';

export default function SigninScreen(props) {
  // console.log(props);

  const dispatch = useDispatch();
  const [ email, setEmail ] = useState('');
  const [ password, setPassword ] = useState('');
  const userSignin = useSelector(state => state.userSignin);
  const { signedIn } = useSelector(state => state.checkoutSteps);
  const { isLoading, userInfo, error } = userSignin;

  const submitButtonHandler = (e) => {
    e.preventDefault();
    dispatch(signinAction(email, password));
    // console.log("signedIn " + signedIn);
    // props.history.push('/shipping');
  }

  useEffect( () => console.log(signedIn) , [signedIn] );

  return (
    <div>
      <CheckoutSteps step1></CheckoutSteps>
      
      <form className="form" onSubmit={submitButtonHandler}>
        <div>
          <h1>Sign In</h1>
        </div>
        {isLoading && <LoadingBox/>}
        {error && <MessageBox variant="danger">{error}</MessageBox> } 
        <div>
          <label htmlFor="email">Email Address</label>
          <input type="email" id="email" placeholder="Enter Email" required
          onChange={ (e) => setEmail(e.target.value) }
          ></input>
        </div>
        <label htmlFor="password">Password</label>
          <input type="password" id="password" placeholder="Enter password" required
          onChange={ (e) => setPassword(e.target.value) }
          ></input>
        <div>
          <button type="submit">Sign In</button>
        </div>
        <div>
          New customer?<Link to="/register"> Create new account</Link>
        </div>
        <Link to="/shipping">shipping screen</Link>
      </form>
      
    </div>
  )
}