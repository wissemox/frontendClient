import React from 'react'
import {useDispatch} from 'react-redux'
import {DeletedVD} from '../../../js/actions/authActions'
const ValMap = ({el}) => {
    const dispatch = useDispatch()
    const DeletedVd0 = () =>{ 
        dispatch(DeletedVD(el._id))
    }
    return (
        <div className="Verfied">
            <p>{el.user}</p>
           <img src={el.Imgae}></img>
           
           <p className="Named">{el.name}</p>
           
       
           <p>{el.Price}</p>
         
         
           <p>{el.Quntites}</p>
           <button onClick={DeletedVd0}>Confirm order</button>
     
        </div>
    )
}

export default ValMap
