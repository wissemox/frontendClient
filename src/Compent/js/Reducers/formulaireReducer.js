import {GET_FORMULAIRE, ADD_FORMULAIRE} from '../constants/ActionsTypes'

const formulState = {
    Formulaires: [],
  };
  
   const Formulaire = (state = formulState, { type, payload }) => {
    switch (type) {
      case ADD_FORMULAIRE:
        return {
          ...state,
          Formulaires: payload,
          
        };
      
      default:
        return state;
    }
  };
  export default Formulaire