
import {GET_COMMENT} from '../constants/ActionsTypes'

const ourForum = {
    forum: [],
  };
  
   const Forums = (state = ourForum, { type, payload }) => {
    switch (type) {
      case GET_COMMENT:
        return {
          ...state,
          forum: payload,
          
        };
      default:
        return state;
    }
  };
  export default Forums