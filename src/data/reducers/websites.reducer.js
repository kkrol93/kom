import {
  WEBSITES_GET_REQUEST,
  WEBSITES_GET_SUCCESS,
  ADD_WEBSITE_SUCCESS,
  REMOVE_WEBSITE_SUCCESS,
  EDIT_WEBSITE_SUCCESS,
} from '../constans';

const initialState = {
  websites: [],
};
function websites(state = initialState, action) {
  switch (action.type) {
    case WEBSITES_GET_REQUEST:
      return {
        ...state,
      };
    case WEBSITES_GET_SUCCESS:
      return {
        ...state,
        websites: [...action.payload],
      };
    case ADD_WEBSITE_SUCCESS:
      return {
        ...state,
        websites: [...state.websites, action.payload.data],
      };
    case REMOVE_WEBSITE_SUCCESS:
      return {
        ...state,
        websites: [...state.websites.filter((websites) => websites.id !== action.payload.id)],
      };
    case EDIT_WEBSITE_SUCCESS:
      // console.log(action.payload.data);
      return {
        ...state,
        websites: state.websites.map((website) =>
          website.id === action.payload.data.id ? action.payload.data : website,
        ),
      };
    default:
      return state;
  }
}

export default websites;
