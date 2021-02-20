import React from 'react'
import {Link} from  'react-router-dom'
const MapCard = ({el}) => {
    return (
  <div className="CardAll02">
            <div>
            <img src={el.image}/>
            
            </div>
            <div className="title">
            <h1>{el.title}</h1>
            <h5>{el.Descraption}</h5>
            </div>
        </div>
     
    )
}

export default MapCard
