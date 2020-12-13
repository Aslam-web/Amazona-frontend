import React from 'react'
// import Link from 'react-router-dom'
import data from '../data'

export default function ProductScreen() {
  const product = data.products[0] 
  console.log(product)
  return (
    <div>
     {/* <Link to='/'>Back to home</Link> */}
 
      you are in product screen
    </div>
  )
}
