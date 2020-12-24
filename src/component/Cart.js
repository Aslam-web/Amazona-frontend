import React from 'react'
import { Link } from 'react-router-dom';

export default function Cart( {item} ) {

  // console.log(item);

  return (

    // <>from component "Cart" {item.name} </>

    <ul>

      <li>
        <div className="row">
          <div>
            <img className="small" src={item.image} alt="Product-image"/>
          </div>
          <div className="min-30">
            <Link to={`/products/${item._id}`}>  
              {item.name}
            </Link>
          </div>
          <div>                
            <select >
              <option>product</option>
            </select>
          </div>
          <div>${item.price}</div>
          <div>
            <button>delete</button>
          </div>
        </div>
      </li>

    </ul>
  )
}
