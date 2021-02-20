
import Login from './Compent/login'
import React,{useState} from 'react'
import {BrowserRouter,Link,Route, Switch } from "react-router-dom"
import{useEffect} from 'react'
import { getAuthUser } from './Compent/js/actions/authActions'
import {useDispatch} from 'react-redux'
import Navbar from './Compent/navbar/navbar01'
import Background from './Compent/background/background'
import Registe from './Compent/registe'
import Nav03 from './Compent/nav03/Nav03'
import Main from './Compent/main/Main'
import Main02 from './Compent/Main02/Main02'

import Crosel from './Compent/crosel/Crosel'
import PriverRoute from './Compent/routes/PriverRoute'
import Dashboard02 from './Compent/PAGES/Dashboard02'
import  Profile from './Compent/PAGES/Profile'
import {getProduct} from './Compent/js/actions/authActions'

import './App.css';
import DeshbordCard from './Compent/PAGES/DeshbordCard'
import Personlise from './Compent/PAGES/Personlise'
import Fromo02 from './Compent/PAGES/Test05'
import {Hopeso} from './Compent/js/actions/authActions'
import PriverRoute02 from './Compent/routes/PriveRoute02'
import Admis from "./Compent/Admis"
import AddComments from "./Compent/PAGES/forum";

function App() {
   
  
    const dispatch = useDispatch()
    const getUser =() =>dispatch(getAuthUser())
    useEffect(()=>{
        getUser()
    },[])
 
  return (
    <div className="App">
    
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossorigin="anonymous"></link>
        
        <BrowserRouter>
        <Switch>
        <PriverRoute path="/profile" component={Profile} />
        <Route  path="/Admins" component={Admis}/>
            <Route exact path="/Personlise" render={()=><Personlise/>}></Route>
            <PriverRoute exact path="/Dashboard/Card" component={DeshbordCard}></PriverRoute>
        <PriverRoute exact path="/Dashboard" component={Dashboard02} />
        <Route path="/forum" component={AddComments} />
        </Switch>
        
         
            <Route exact path="/" render={()=><Navbar Link={Link}/>}></Route>
      
            
            <Route exact path="/login" render={()=><Login />}></Route>
            <Route exact path="/register" render={()=> <Registe/>}></Route>
            <Route exact path="/Forom" render={()=> <Fromo02/>}></Route>
            

            
        </BrowserRouter>
   
    </div>
    );
}

export default App;
