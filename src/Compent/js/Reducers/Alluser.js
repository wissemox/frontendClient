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
    GET_HOPE02,
    GET_ALLUSERS
    

} 
from '../constants/ActionsTypes'
const Alluser01 = {
    Alluser: [],
  };
   const userall = (state = Alluser01, { type, payload }) => {
    switch (type) {
        case GET_ALLUSERS :
            return {
                ...state,
                Alluser:payload,
               
              };
      default:
        return state;
    }
  };
  export default userall