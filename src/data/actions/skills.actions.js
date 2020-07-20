import {
  SKILLS_GET_REQUEST,
  SKILLS_GET_SUCCESS,
  SKILLS_GET_FAILURE,
  ADD_SKILL_REQUEST,
  ADD_SKILL_SUCCESS,
  ADD_SKILL_FAILURE,
  REMOVE_SKILL_SUCCESS,
  REMOVE_SKILL_REQUEST,
  REMOVE_SKILL_FAILURE,
  EDIT_SKILL_SUCCESS,
  EDIT_SKILL_REQUEST,
  EDIT_SKILL_FAILURE,
} from '../constans';
import axios from 'axios';

export const fetchSkills = () => async (dispatch) => {
  dispatch({
    type: SKILLS_GET_REQUEST,
  });
  try {
    const response = await fetch(`https://kom-data-api.herokuapp.com/skills`);
    const data = await response.json();
    dispatch({
      type: SKILLS_GET_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: SKILLS_GET_FAILURE,
    });
  }
};
export const addSkill = (skillContent) => async (dispatch) => {
  dispatch({ type: ADD_SKILL_REQUEST });
  return axios
    .post('https://kom-data-api.herokuapp.com/skills', {
      ...skillContent,
    })
    .then(({ data }) => {
      dispatch({
        type: ADD_SKILL_SUCCESS,
        payload: {
          data,
        },
      });
    })
    .catch((err) => {
      console.log(err);
      dispatch({ type: ADD_SKILL_FAILURE });
    });
};
export const editSkill = (id, skillContent) => async (dispatch) => {
  dispatch({ type: EDIT_SKILL_REQUEST });
  return axios
    .patch(`https://kom-data-api.herokuapp.com/skills/${id}`, {
      ...skillContent,
    })
    .then(({ data }) => {
      dispatch({
        type: EDIT_SKILL_SUCCESS,
        payload: {
          data,
        },
      });
    })
    .catch((err) => {
      console.log(err);
      dispatch({ type: EDIT_SKILL_FAILURE });
    });
};

export const removeSkill = (id) => (dispatch) => {
  dispatch({ type: REMOVE_SKILL_REQUEST });

  axios
    .delete(`https://kom-data-api.herokuapp.com/skills/${id}`)
    .then(() => {
      dispatch({
        type: REMOVE_SKILL_SUCCESS,
        payload: {
          id,
        },
      });
    })
    .catch((err) => {
      console.log(err);
      dispatch({ type: REMOVE_SKILL_FAILURE });
    });
};
