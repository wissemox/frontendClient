import {PRGET_ALL} from '../constants/ActionsTypes'

const PresFormAll = {
    Donne: [],
  };
  
   const ForPresAll = (state = PresFormAll, { type, payload }) => {
    switch (type) {
      case PRGET_ALL:
        return {
          ...state,
          Donne: payload,
          
        };
      default:
        return state;
    }
  };
  export default ForPresAll