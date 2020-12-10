import  React from 'react';
import HomeScreen from './screen/HomeScreen'
function App() {
  return (
    <>
    <nav class="navbar">
    <ul class="navbarNav">

      <li class="navItem">
        <a href="#" class="navLink">
          <i class="fas fa-user"></i>
          <span class="navLinkText">User</span>
        </a>
      </li>

      <li class="navItem">
        <a href="#" class="navLink">
          <i class="fas fa-user"></i>
          <span class="navLinkText">Cart</span>
        </a>
      </li>

      <li class="navItem">
        <a href="#" class="navLink">
          <i class="fas fa-user"></i>
          <span class="navLinkText">Product</span>
        </a>
      </li>

      <li class="navItem">
        <a href="#" class="navLink">
          <i class="fas fa-user"></i>
          <span class="navLinkText">Contacts</span>
        </a>
      </li>

      <li class="navItem">
        <a href="#" class="navLink">
          <i class="fas fa-user"></i>
          <span class="navLinkText">SignOut</span>
        </a>
      </li>

    </ul>
  </nav>

  <div class="grid-container">
    <header class="row">
      <div class="hamburger">
        <div class="bar"></div>
        <div class="bar"></div>
        <div class="bar"></div>
      </div>
      <div class="logo">
        <img src="/images/eBag.png" alt="logo-img"/>
      </div>
      <div class="searchBox">
        <input type="text" id="searchItem"/>
        <button id="searchButton">Search</button>
      </div>
      <div class="links">
        <a href="/productForm.html">Products </a>
        <a href="/signupForm.html">Sign Up </a>
        <a href="/signinForm.html">Sign In</a>
      </div>
    </header>

    <main>
      <HomeScreen/>
    </main>

    <footer class="row">&#169; 2020 All rights reserved.</footer>

  </div>
    </>
  );
}

export default App;
