import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import LoadingBox from '../component/LoadingBox';

import Product from '../component/Product'
import { getProductAction } from '../store/actions/productActions';


export default function HomeScreen(props) {

  // console.log(props);

  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  const { isLoading, products, error } = productList;

  useEffect( () => {
    dispatch(getProductAction());
    return ()=> {
      console.log("homeScreen is unmounting")
    }
  }, []);
     const allProducts = products.map(p => <Product key = {p._id } item = {p} />)
  
  // console.log(allProducts)

  return (
    
    <>
    { isLoading ? 

      <LoadingBox/>
      :
      <section className="productsContainer">
      <p className="productsTitle">Our Products...</p>
      <div className="products">
        {allProducts}
      </div>
    </section>
    
    }
  </>
    
      // <section className="productsContainer">
      //   { isLoading ? 
      //       (<LoadingBox/>)
      //       :
      //       (<p className="productsTitle">Our Products...</p>
      //       <div className="products">
      //         {allProducts}
      //       </div>)

      //   }
      // </section>

  )
}