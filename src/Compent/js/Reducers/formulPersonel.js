import {GET_PERSID} from '../constants/ActionsTypes'

const persFormState = {
    Formul: [],
  };
  
   const ForPers = (state = persFormState, { type, payload }) => {
    switch (type) {
      case GET_PERSID:
        return {
          ...state,
          Formul: payload,
          
        };
      default:
        return state;
    }
  };
  export default ForPers