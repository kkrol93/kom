import {
  SKILLS_GET_REQUEST,
  SKILLS_GET_SUCCESS,
  ADD_SKILL_SUCCESS,
  REMOVE_SKILL_SUCCESS,
  EDIT_SKILL_SUCCESS,
} from '../constans';

const initialState = {
  skills: [],
};
function skills(state = initialState, action) {
  switch (action.type) {
    case SKILLS_GET_REQUEST:
      return {
        ...state,
      };
    case SKILLS_GET_SUCCESS:
      return {
        ...state,
        skills: [...action.payload],
      };
    case ADD_SKILL_SUCCESS:
      return {
        ...state,
        skills: [...state.websites, action.payload.data],
      };
    case REMOVE_SKILL_SUCCESS:
      return {
        ...state,
        skills: [...state.skills.filter((skills) => skills.id !== action.payload.id)],
      };
    case EDIT_SKILL_SUCCESS:
      return {
        ...state,
        skills: state.skills.map((skill) =>
          skill.id === action.payload.data.id ? action.payload.data : skill,
        ),
      };
    default:
      return state;
  }
}

export default skills;
