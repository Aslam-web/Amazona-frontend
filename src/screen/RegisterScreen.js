import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom'
import LoadingBox from '../component/LoadingBox'
import { registerAction } from '../store/actions/userActions';

export default function RegisterScreen() {

  const dispatch = useDispatch();
  const [ name, setName ] = useState('');
  const [ email, setEmail ] = useState('');
  const [ password, setPassword ] = useState('');
  const [ confirmPassword, setConfirmPassword] = useState('');
  // console.log(name, email, password, confirmPassword);

  const submitButtonHandler = (e) => {
    e.preventDefault();
    if(password !== confirmPassword) {
      alert("Passwords dont match !!")
    }
    else {
      dispatch(registerAction(name, email, password));
    }
  }

  return (
    <div>
      {/* from RegisterScreen<Link to="/signin"> to sign in</Link> */}
      <form className="form" onSubmit={submitButtonHandler}> 
        <div>
          <h1>Register</h1>
        </div>
        {/* {isLoading && <LoadingBox/>} */}
        <div>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" placeholder="Enter Name" required
          onChange={ (e) => setName(e.target.value) }
          ></input>
        </div>
        <div>
          <label htmlFor="email">Email Address</label>
          <input type="email" id="email" placeholder="Enter email" required
          onChange={ (e) => setEmail(e.target.value) }
          ></input>
        </div>
        <div>
          <label htmlFor="password">Enter Password</label>
          <input type="password" id="password" placeholder="Enter password" required
          onChange={ (e) => setPassword(e.target.value) }
          ></input>
        </div>
        <div>
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input type="password" id="confirmPassword" placeholder="Confirm Name" required
          onChange={ (e) => setConfirmPassword(e.target.value) }
          ></input>
        </div>
        <div>
          <button type="submit">Register</button>
        </div>
        <div>
          Already have an account? <Link to="/signin"> Go to sign In</Link>
        </div>

      </form>

    </div>
  )
}
