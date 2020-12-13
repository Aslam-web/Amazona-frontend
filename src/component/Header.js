import React from 'react'

export default function Header() {
  return (
    <header className="row">
      <div className="hamburger">
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
      <div className="logo">
      <a href="/">
        <img src="/images/eBag.png" alt="logo-img"/>
      </a>

 
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
