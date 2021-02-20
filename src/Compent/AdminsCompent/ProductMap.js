import React from 'react'
import {useDispatch} from 'react-redux'
import {DeleteProduct005} from '../js/actions/authActions'
import './Product.css'
import EditModal01 from './ModalEditProduct'

const ProductMap = ({el}) => {
    const dispatch = useDispatch()
    const DeletedProduct = () =>{ 
        dispatch(DeleteProduct005(el._id))
    }
    const getid=()=>{
        console.log("ahla")
    }
    return (
        <div>
           <div className="Product-flex-box"> 
            <img src={el.Imgae}></img>
            <p>{el.name}</p>
           
            <p>{`Price: ${el.Price}`}</p>
           
          
           
            <EditModal01 el={el}/>
            <button onClick={DeletedProduct}>Delete</button>
         
           <button onClick={getid}></button>
           </div>
        </div>
    )
}

export default ProductMap
