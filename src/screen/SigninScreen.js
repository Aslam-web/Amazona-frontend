import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom'
import { signin } from '../store/actions/userActions';

export default function SigninScreen() {

  const dispatch = useDispatch();
  const [ email, setEmail ] = useState('');
  const [ password, setPassword ] = useState('');

  const submitButtonHandler = (e) => {
    e.preventDefault();
    dispatch(signin(email, password));
  }

  return (
    <div>
      <form className="form" onSubmit={submitButtonHandler}>
        <div>
          <h1>Sign In</h1>
        </div>
        <div>
          <label htmlFor="email">Email Address</label>
          <input type="email" id="email" placeholder="Enter Email" required
          onChange={ (e) => setEmail(e.target.value) }
          
          ></input>
        </div>
        <label htmlFor="email">Password</label>
          <input type="password" id="password" placeholder="Enter password" required
          onChange={ (e) => setPassword(e.target.value) }
          ></input>
        <div>
          <button type="submit">Sign In..</button>

        </div>
        <div>
          New customer?<Link to="/register"> Create new account</Link>
        </div>
      </form>
    </div>
  )
}
