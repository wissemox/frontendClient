import React , {useEffect}from 'react'
import {useSelector , useDispatch} from 'react-redux'
import Navbar02 from '../navbar/navbar02'
import Background from '../background/background'
import {getProduct} from '../js/actions/authActions'
import { Spinner } from 'reactstrap';
import {EditArticle} from '../js/actions/authActions'
import Card02 from './Card'
import {getPersonlise} from '../js/actions/authActions'
import Card03 from './Card02'

import './Product02.css'
import { Link } from 'react-router-dom'
const Personlise = () => {
    const dispatch =useDispatch()
    
       
        useEffect(() => {
          dispatch(getPersonlise());
        }, []);
        const userPersonlise = useSelector((state)=> state.Presonlise.PresonliseProduct.Productall)
    return (
        
        <div >
        <Background/>
            <Navbar02/>
            {console.log(userPersonlise)}
            <div className="adz">
                <Link to="/Dashboard">  <button><h2>Back to Dashboard</h2></button>  </Link>
                </div>
            <div className="more">
                <div className="Filter">
                
                </div>
                
                <div className="test">
                  
                {userPersonlise&&userPersonlise.map((el)=><div> <Card03 el={el}/> </div>)}
            </div>
            </div>
            
            
           {/* <Card02/> */}
        </div>
    )
  
      
}

export default Personlise
