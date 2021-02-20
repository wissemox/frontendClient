import {
    USER_LOADING ,
     LOGIN_USER , 
     REGISTER_USER , 
     LOGOUT_USER ,
      GET_AUTH_USER ,
      GET_PRODUCT} 
from '../constants/ActionsTypes'
const Product = {
    Article: [],
  };
  const Product0 = (state=Product,{type, payload }) =>{
    switch (type) {
        case GET_PRODUCT:
          return {
            ...state,
            Article: payload,
            
          };
        default:
          return state;
      }
};

export default Product0