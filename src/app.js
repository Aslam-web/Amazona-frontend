import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";

import HomeScreen from './screen/HomeScreen'
import ProductScreen from './screen/ProductScreen.js'
import CartScreen from './screen/CartScreen';

import Header from './component/Header'
import NavigationLeft from './component/NavigationLeft'
import SigninScreen from './screen/SigninScreen';
import RegisterScreen from './screen/RegisterScreen';
import ShippingAddressScreen from './screen/ShippingAddressScreen';
import PaymentScreen from './screen/PaymentScreen';
import PlaceOrderScreen from './screen/PlaceOrderScreen';
import OrderScreen from './screen/OrderScreen';

function App(props) {
  return (
    <BrowserRouter>
      <NavigationLeft/>

      <div className="grid-container">

        <Header/>
        <main>
          <Switch>
          <Route path="/products/:id" myname ="aslam" component = {ProductScreen}/>
          <Route path="/cart/:id/:qty" component = {CartScreen}/>
          <Route path="/cart" component = {CartScreen}/>
          <Route path="/signin" component = {SigninScreen}/>
          <Route path="/register" component = {RegisterScreen}/>
          <Route path="/shipping" component = {ShippingAddressScreen}/>
          <Route path="/payment" component = {PaymentScreen}/>
          <Route path="/placeorder" component = {PlaceOrderScreen}/>
          <Route path="/order" component = {OrderScreen}/>
          <Route path="/" component = {HomeScreen}/>
          </Switch>
        </main>
        <footer className="row center">&#169; 2020 All rights reserved.</footer>

      </div>
    </BrowserRouter>
  );
}

export default App;
