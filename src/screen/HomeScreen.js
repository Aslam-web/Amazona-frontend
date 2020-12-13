import React from 'react'
import data from '../data'
import Product from '../component/Product'
export default function HomeScreen(props) {
  const { products} = data  
  const productList = products.map(p => <Product key = {p._id } item = {p} />)

  return (
    <section className="productsContainer">
        <p className="productsTitle">Our Products...</p>
        <div className="products">
          {productList}
        </div>
      </section>
  )
}
