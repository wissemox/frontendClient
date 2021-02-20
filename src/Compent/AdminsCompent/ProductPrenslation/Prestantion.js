import React, {useEffect} from 'react'
import Add02 from './ModelAddPr'
import {useDispatch, useSelector} from "react-redux"
import { getPersonlise } from "../../js/actions/authActions"
import CardMap from "./CardMap"
const Prestantion = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getPersonlise());
      }, []); 
      const productPerso = useSelector ((state)=> state.Presonlise.PresonliseProduct.Productall)
    return (
        <div>
       
            {productPerso && productPerso.map((el)=><CardMap  el={el}/>)}
            <Add02/>
        </div>
    )
}

export default Prestantion
