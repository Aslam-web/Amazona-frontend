import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
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
        <a href="/cart">Cart </a>
        <a href="/sign">Sign In </a>
        {/* <a href="/signinForm.html">Admin</a> */}
      </div>
    </header>
  )
}
