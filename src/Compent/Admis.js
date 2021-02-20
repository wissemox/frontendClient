import React,{useState,useEffect} from 'react'
import {BrowserRouter,Link,Redirect,Route, Switch } from "react-router-dom"
import { Spinner } from 'reactstrap';
import {Hopeso} from './js/actions/authActions'
import {useSelector ,useDispatch} from 'react-redux'
import ListProduct from './AdminsCompent/ListProduct'
import Listuser from './AdminsCompent/user/Listuser'
import Verifed from './AdminsCompent/user/VerifedCommend/Verifed'
import Prestantion from './AdminsCompent/ProductPrenslation/Prestantion'
import './login.css'
const Admis = () => {
    const[Logout , setLogout]=useState(false)
    const dispatch = useDispatch()
    const getAdmin =() =>dispatch(Hopeso(p))
    useEffect(()=>{
        getAdmin()
    },[])
    const Loguout = () =>{
        localStorage.removeItem('id');
        setLogout(true)
    }
    const p = JSON.parse(localStorage.getItem('id'))
    
    const Pers = useSelector((state)=>state.Admins01.isAdmin);
    const Perss = useSelector((state)=>state.Admins01.AdminsCompte);
   
    return (
        <div>
             {Logout && <Redirect to="/"/>}
             {Pers ? (      <>   <div className={"flex-box"}>
                 <div>
                 <p className="morgd">Welcome</p>
                <p className="Morg02">{Perss.Resercha.email}</p>
                </div>
            <button onClick={Loguout}>Logout</button>
                 {console.log(p)}
            {console.log(Pers)}
            {console.log(Perss)}
           
        </div>
        <div className="Flex-box02">
           <div className="Menu">
              <a href='/Admins/Product'><p>Product list</p></a>
              <a href='/Admins/User'><p>Users list</p></a>
            
               <a href='/Admins/ProductPresnaltion'><p>Custom Products</p></a>
               <a href='/Admins/ProductValid'><p>Order</p></a>
           {/* Honi il menuh */}
           </div>
           <div className="Product">
           {/* Honi iwn hoto Product */}
           <BrowserRouter>
          
           <Route  path="/Admins/Product" render={()=><ListProduct/>}></Route>
           <Route  path="/Admins/User" render={()=><Listuser/>}></Route>
           <Route  path="/Admins/ProductValid" render={()=><Verifed/>}></Route>
           <Route  path="/Admins/ProductPresnaltion" render={()=><Prestantion/>}></Route>
            
           </BrowserRouter>

           </div>
        </div>
        </>):(<Spinner className="ad" type="grow" color="primary" />)}
        </div>
       
        
   
    )
}

export default Admis
