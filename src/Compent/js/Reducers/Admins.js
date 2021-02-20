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

const AdminsUser = {
    AdminsCompte: [],
    isAdmin:false
  };
  
   const Admins01 = (state = AdminsUser, { type, payload }) => {
    switch (type) {
      case  GET_HOPE:
        return {
          ...state,
          AdminsCompte:payload,
          isAdmin:true,
          
        };
        case  GET_HOPE02 :
          return {
              ...state,
              AdminsCompte:payload,
             
              
            };

      default:
        return state;
    }
  };
  export default Admins01