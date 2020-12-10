import React from 'react'

export default function NavigationLeft() {
  return (
      <nav className="navbar">
        <ul className="navbarNav">

          <li className="navItem">
            <a href="#" className="navLink">
              <i className="fa fa-user"></i>
              <span className="navLinkText">User</span>
            </a>
          </li>

          <li className="navItem">
            <a href="#" className="navLink">
              <i className="fa fa-user"></i>
              <span className="navLinkText">Cart</span>
            </a>
          </li>

          <li className="navItem">
            <a href="#" className="navLink">
              <i className="fa fa-user"></i>
              <span className="navLinkText">Product</span>
            </a>
          </li>

          <li className="navItem">
            <a href="#" className="navLink">
              <i className="fa fa-user"></i>
              <span className="navLinkText">Contacts</span>
            </a>
          </li>

          <li className="navItem">
            <a href="#" className="navLink">
              <i className="fa fa-user"></i>
              <span className="navLinkText">SignOut</span>
            </a>
          </li>

        </ul>
      </nav>
  )
}
