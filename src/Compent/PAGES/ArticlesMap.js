
import React,{useState} from 'react'
import {  useSelector , useDispatch} from 'react-redux'
import { Link } from 'react-router-dom';
import { Spinner } from 'reactstrap';

import {DeletArticle} from '../js/actions/authActions'
import {AddValid , EditArticle01} from '../js/actions/authActions'
const ArticlesMap = ({el,setPrice}) => {
    const Username = useSelector((state)=>state.authReducer.user.name)
    const Email = useSelector((state)=>state.authReducer.user.email)
    const dispatch = useDispatch()
    const add = () =>{
        dispatch(EditArticle01(Email,{name:el.name , price:el.price ,Product:el.Product , Quntites:el.Quntites}))
        dispatch(AddValid({user:Username,name:el.name,Price:el.price , Imgae:el.Product ,Quntites:el.Quntites }))
        dispatch(DeletArticle(Email,{name:el.name,price:el.price,Quntites:el.Quntites,Product:el.Product}))
    }
    
    const [Price , serPrice]=useState(el.price)
    setPrice(Price)
    return (
        <div>
            
            <>
            
            <div className="Navbarf005">
            {console.log(Username)}
            </div>
            <div className="Cardd">
            <p>{el.name}</p>
            <img src={el.Product}/>
            
            <p className="PrintisHere">Price:{el.price}</p>
            <p className="PrintisHere">Quntites:{el.Quntites}</p>
            <button onClick={()=>dispatch(DeletArticle(Email,{name:el.name,price:el.price,Quntites:el.Quntites,Product:el.Product}))} > <h5>Delete</h5></button>
            <div className="Valid02">
            <button className="Valid" onClick={add}>Valid</button>
            </div>
            </div>
            </>
        </div>
    )
}

export default ArticlesMap
