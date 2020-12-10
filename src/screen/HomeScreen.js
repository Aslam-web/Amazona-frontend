import React from 'react'
import data from '../data'
import Product from '../component/Product'
export default function HomeScreen(props) {

  const { products} = data  

  
  
  const prod = products.map(p => <Product key = {p._id } item = {p} />)
  console.log(prod)
  return (
    <section className="productsContainer">
        <p className="productsTitle">Our Products...</p>
        <div className="products">
          {prod}
          {/* {products.map(p => <Product key = {p._id } item = {p} />)}
          {products.map(p => <Product key = {p._id } item = {p} />)}
          {products.map(p => <Product key = {p._id } item = {p} />)}
          {products.map(p => <Product key = {p._id } item = {p} />)} */}
          
        </div>
      </section>
  )
}
