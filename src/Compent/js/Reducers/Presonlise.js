import {
    USER_LOADING ,
     LOGIN_USER , 
     REGISTER_USER , 
     LOGOUT_USER ,
      GET_AUTH_USER ,
      GET_PRODUCT,
    GET_PERSONLISE} 
from '../constants/ActionsTypes'
const initState = {
    PresonliseProduct: [],
  };
  
   const Presonlise = (state = initState, { type, payload }) => {
    switch (type) {
      case GET_PERSONLISE:
        return {
          ...state,
          PresonliseProduct: payload,
          
        };
      default:
        return state;
    }
  };
  export default Presonlise