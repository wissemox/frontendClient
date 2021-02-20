import {ADDD_INCREMENT} from '../constants/ActionsTypes'

  
   const ForPresAll = (state = 0, { type, payload }) => {
    switch (type) {
      case ADDD_INCREMENT:
        return state+1
      default:
        return state;
    }
  };
  export default ForPresAll