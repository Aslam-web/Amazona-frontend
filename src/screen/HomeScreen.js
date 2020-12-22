import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import Product from '../component/Product'
import { getProductAction } from '../store/actions/prodAction';



export default function HomeScreen(props) {

  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  const { isLoading, products, error } = productList;

  useEffect( () => {
    dispatch(getProductAction());
  }, [dispatch]);


  // const [products, setProducts] = useState([])

  // useEffect(() => {
    
  //   const fetchData = async () => {
  //     const { data } = await axios.get('http://localhost:2020/api/products');
  //     setProducts(data);
  //   }
  //   fetchData();
  // }, [])



  // const { products} = data  
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
