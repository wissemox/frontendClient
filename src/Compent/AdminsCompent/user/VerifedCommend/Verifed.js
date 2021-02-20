import React,{useEffect} from 'react'
import {useDispatch , useSelector} from 'react-redux'
import {getAlluserVD ,GETforall} from '../../../js/actions/authActions'
import ValMap from './ValMap'
import VallPRMap from './VallPRMap'
import './Verifed.css'
const Verifed = () => {
    const dispatch = useDispatch()
    const Valdition =  useSelector((state)=>state.AdminVD.Verifed.Validtiond)
    const Presnaltee =  useSelector((state)=>state.ForPresAll.Donne.allForm)
    useEffect(() => {
        dispatch(getAlluserVD());
        dispatch(GETforall())
      }, []); 
    return (
        <>
        <div>
        <p className="PrDesign">Products Orders</p>
            {Valdition&&Valdition.map((el)=><ValMap el={el}/>)}
           
        </div>
        <div>
        <p className="PrDesign">Custom Orders</p>
        {console.log(Presnaltee)}
        {Presnaltee&&Presnaltee.map((el)=><VallPRMap el={el}/>)}
        </div>
        </>
    )
}

export default Verifed
