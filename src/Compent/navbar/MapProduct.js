import React from 'react'
import {Link} from 'react-router-dom'
const MapProduct = ({el}) => {
    return (
    <>
     <a href="/register?#"> 
     <div  className="Card005">
          <img src=  {el.image} />
          <h3>{el.name }</h3>
          <div className="Price">
              <p>{el.Quantites}unites</p>
              <p>{el.Price}</p>
          </div> 
          
        </div>
        </a>
        </>
    )
}

export default MapProduct
