import React from 'react'
import {DeletedPR02} from '../../../js/actions/authActions'
import {useDispatch} from 'react-redux'
const VallPRMap = ({el}) => {
    const dispatch = useDispatch()
    const DeletedPR = () => { 
        dispatch(DeletedPR02(el._id))
    }
    return (
        <div className="Morgge">
          <p>{el.name}</p>  
          <img src={el.Image}></img>
          <p>{el.Price}</p>
          <p>{el.text}</p>
          <button onClick={DeletedPR} >Confirm order</button>
        </div>
    )
}

export default VallPRMap
