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
        <img src="/images/eBag.png" alt="logo-img"/>
      </div>
      <div className="searchBox">
        <input type="text" id="searchItem"/>
        <button id="searchButton">Search</button>
      </div>
      <div className="links">
        <a href="/productForm.html">Products </a>
        <a href="/signupForm.html">Sign Up </a>
        {/* <a href="/signinForm.html">Sign In<a> */}
      </div>
    </header>
  )
}
