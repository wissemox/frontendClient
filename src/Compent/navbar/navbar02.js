import React  , {useState}from 'react'
import {  useSelector , useDispatch} from 'react-redux'
import {logout , SearchProduct} from '../js/actions/authActions'
import {Link, Redirect} from "react-router-dom"
import "./dash.css"


const Navbar02 = ({user}) => {
   
   
    
    const dispatch = useDispatch()
   
    return (
        
        <div>
            
            <div className="flexboxs">
    
     <div class="input-field11">
                  <i class="fa fa-search"></i>
                  <input type="text" placeholder="Serach" onChange={(e)=>dispatch(SearchProduct(e.target.value))} />
        </div>
        <div className="button">
      <Link to="/"> <button onClick={()=>dispatch(logout())}>Logout</button> </Link> 
         <Link to="/Profile">  <button>Profile</button>  </Link>
         <Link to='/forum'>  <button>forum</button></Link> 

         <div className="Pennie">
      <Link to="/Dashboard/Card">  <button> <i  class="fa fa-shopping-cart"></i></button> </Link>
 
        </div>
         <p>{user ?` Welcome ${user.name}`:null}</p> 
        </div>
      
    </div>
        </div>
    )
}

export default Navbar02