import React , {useEffect}from 'react'
import {useSelector , useDispatch} from 'react-redux'
import Navbar02 from '../navbar/navbar02'
import Background from '../background/background'
import {getProduct} from '../js/actions/authActions'
import { Spinner } from 'reactstrap';
import {EditArticle} from '../js/actions/authActions'
import ErroreNot from './ErroreNot'
import Card02 from './Card'
import './Product02.css'
import { Link } from 'react-router-dom'
const Dashboard02 = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getProduct());
      }, []); 
   
const user = useSelector((state)=> state.authReducer.user)
const Pro = useSelector((state)=> state.Product0.Article.Productall)

const searchMov = useSelector((state) => state.Searched.searches)
if(!user) {
    return <ErroreNot/>
}
if(!Pro) {
    return  <Spinner type="grow" color="primary" />
}

    return (
        
        <div >
            {console.log(user.email)}
        <Background/>
            <Navbar02/>
            <div className="adz">
                <Link to="/Personlise">  <button><h2>Custom Prducts</h2></button>  </Link>
               

                   </div>
            <div className="more">
                <div className="Filter">
                <h4 className="nda"></h4>
                </div>
                
                <div className="test">
                  
                {Pro.filter((el)=>el.name.toLowerCase().includes(searchMov.toLowerCase().trim())).map((el)=><div className="ProductFlex"> <Card02 user={user} el={el}/> </div>)}
            </div>
            </div>
            
            
           {/* <Card02/> */}
        </div>
    )
  
      
}

export default Dashboard02
