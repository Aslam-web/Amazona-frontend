import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

export default function Header(props)  {

    const { user } = useSelector(state => state.userSignin.userInfo);
    const { cartItems }= useSelector(state => state.cart)
    const totQty = cartItems.reduce( (a, i) => a + i.qty, 0 )

    useEffect( () => {},[user])

  return (
    <header className="row">
      <div className="hamburger">
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
      <div className="logo">
      {/* <a href="/"> */}
      <Link to="/">
        <img src="/images/eBag.png" alt="logo-img"/>
      </Link>
      {/* </a> */}

 
      </div>
      <div className="searchBox">
        <input type="text" id="searchItem"/>
        <button id="searchButton">Search</button>
      </div>
      <div className="links">
        <Link to="/cart" className="cartLink">Cart<span className="badge">{totQty}</span></Link>
          {
            user ? <Link to="/">{user.name}</Link> : <Link to="/signin">Sign In</Link>
          }
        {/* <a href="/signinForm.html">Admin</a> */}
      </div>
    </header>
  )
}
