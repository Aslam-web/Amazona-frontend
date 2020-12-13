import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import HomeScreen from './screen/HomeScreen'
import ProductScreen from './screen/ProductScreen.js'
import Header from './component/Header'
import NavigationLeft from './component/NavigationLeft'
function App() {
  return (
    <BrowserRouter>
      <NavigationLeft/>

      <div className="grid-container">


        <Header/>
        <main>
          <Switch>
          <Route path="/products/:id" myname ="aslam" component = {ProductScreen}/>
          <Route path="/" component = {HomeScreen}/>
          </Switch>
        </main>
        <footer className="row center">&#169; 2020 All rights reserved.</footer>


      </div>
    </BrowserRouter>
  );
}

export default App;
