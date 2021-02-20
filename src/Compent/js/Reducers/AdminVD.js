import {
   GET_ALLUSERVD

} 
from '../constants/ActionsTypes'
const UserVD = {
    Verifed: [],
  
  };
  
   const AdminVD = (state = UserVD, { type, payload }) => {
    switch (type) {
        case  GET_ALLUSERVD :
            return {
                ...state,
                Verifed:payload,
               
              };
      default:
        return state;
    }
  };
  export default AdminVD