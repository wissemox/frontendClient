import React from 'react'
import "./press.css"
import {useDispatch} from 'react-redux'
import {DeletedPR} from '../../js/actions/authActions'
import Edit03 from './ModallEdited'
const CardMap = ({el}) => {
    const dispatch = useDispatch()
    const Deleted =() =>{
        dispatch(DeletedPR(el._id))
    }
    return (
        <div className="Flex-Presnlise">
           <p className="Print"> {el.name}</p>
            <img src={el.Imgae}/>
            <p className="Print02">{`Price:${el.Price}`}</p>
        
            <button onClick={Deleted} >Delete</button>
            <Edit03 el={el}/>
        </div>
    )
}

export default CardMap
