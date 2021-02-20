import {
    USER_LOADING ,
     LOGIN_USER , 
     REGISTER_USER , 
     LOGOUT_USER ,
      GET_AUTH_USER ,
       AUTH_ERRORS} 
from '../constants/ActionsTypes'



const Verifed = (state=false,{type}) =>{
    switch(type) {
        case REGISTER_USER:
            return {
                state:true
            }
        
            default:
                return state;
        
    }
};
const Verifed02 = (state=false,{type}) =>{
    switch(type) {
        case REGISTER_USER:
            return {
                state:true
            }
        
            default:
                return state;
        
    }
};
export default Verifed