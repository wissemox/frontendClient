import React,{useState} from 'react'
import {  useSelector , useDispatch} from 'react-redux'
import { Link } from 'react-router-dom';
import { Spinner } from 'reactstrap';
import ArticlesMap from "./ArticlesMap"
import {DeletArticle} from '../js/actions/authActions'
const DeshbordCard = () => {
    const Articles = useSelector((state)=>state.authReducer.user)
    const [Price , setPrice]=useState()
    const [Name , setName]=useState()
    
    return (
       
        <div>
            {console.log(Price)}
            {console.log(Name)}
            <div className="Navbar0c05">
              
              <h1> Cart </h1>
              <Link to='/Dashboard'>   <button className="Button005">Dashboard</button> </Link>
            </div>
        {Articles&&Articles.Aritcles.map((el)=><ArticlesMap setName={setName} setPrice={setPrice} el={el}/>)}
      
        
            
            
        
        </div>
    )
}

export default DeshbordCard
