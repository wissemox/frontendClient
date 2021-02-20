import {
    USER_LOADING ,
     LOGIN_USER , 
     REGISTER_USER , 
     LOGOUT_USER ,
      GET_AUTH_USER ,
      GET_PRODUCT,
    GET_PERSONLISE,
    GET_ADMIN,
    GET_HOPE,
    GET_HOPE02
    

} 
from '../constants/ActionsTypes'
const Admin2 = {
    Admin02: [],
  
  };
  
   const Admins02 = (state = Admin2, { type, payload }) => {
    switch (type) {
        case  GET_HOPE02 :
            return {
                ...state,
                Admin02:payload,
               
              };
      default:
        return state;
    }
  };
  export default Admins02