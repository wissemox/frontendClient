
import {SEARCH_BYNAME} from '../constants/ActionsTypes'

const serachProd = {
    searches: "",
  };
  
   const Searched = (state = serachProd, { type, payload }) => {
    switch (type) {
      case SEARCH_BYNAME:
        return {
          ...state,
          searches: payload,
          
        };
      
      default:
        return state;
    }
  };
  export default Searched