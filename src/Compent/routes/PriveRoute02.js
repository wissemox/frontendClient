import React from 'react'
import {Redirect ,Route} from 'react-router-dom'
import {useSelector} from 'react-redux' 

const PriverRoute02 = ({component:Component,...rest}) => {
    const Pers = useSelector((state)=>state.Admins01.AdminsCompte.isAdmin);
    if(Pers===false){
        return <Redirect to='/'/> 
    }
    if(Pers===true){
        return <Route component={Component} {...rest}/>
    
    }
   
}

export default PriverRoute02
