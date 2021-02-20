
import React from 'react'
import {Redirect ,Route} from 'react-router-dom'
import {useSelector} from 'react-redux'
const PriverRoute = ({component:Component,...rest}) => {
    const isAuth = useSelector((state)=>state.authReducer.isAuth);
    if(isAuth===false){
        return <Redirect to='/'/> 
    }
    if(isAuth){
        return <Route component={Component} {...rest}/>
    
    }
   
}

export default PriverRoute