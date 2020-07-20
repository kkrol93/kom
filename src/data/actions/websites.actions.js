import {
  WEBSITES_GET_REQUEST,
  WEBSITES_GET_SUCCESS,
  WEBSITES_GET_FAILURE,
  ADD_WEBSITE_REQUEST,
  ADD_WEBSITE_SUCCESS,
  ADD_WEBSITE_FAILURE,
  REMOVE_WEBSITE_SUCCESS,
  REMOVE_WEBSITE_REQUEST,
  REMOVE_WEBSITE_FAILURE,
  EDIT_WEBSITE_SUCCESS,
  EDIT_WEBSITE_REQUEST,
  EDIT_WEBSITE_FAILURE,
} from '../constans';
import axios from 'axios';

export const fetchWebsites = () => async (dispatch) => {
  dispatch({ type: WEBSITES_GET_REQUEST });
  try {
    const response = await fetch(`https://kom-data-api.herokuapp.com/websites`);
    const data = await response.json();
    dispatch({
      type: WEBSITES_GET_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: WEBSITES_GET_FAILURE,
    });
  }
};
export const addWebsite = (websiteContent) => async (dispatch) => {
  dispatch({ type: ADD_WEBSITE_REQUEST });
  return axios
    .post('https://kom-data-api.herokuapp.com/websites', {
      ...websiteContent,
    })
    .then(({ data }) => {
      dispatch({
        type: ADD_WEBSITE_SUCCESS,
        payload: {
          data,
        },
      });
    })
    .catch((err) => {
      console.log(err);
      dispatch({ type: ADD_WEBSITE_FAILURE });
    });
};
export const editWebsite = (id, websiteContent) => async (dispatch) => {
  dispatch({ type: EDIT_WEBSITE_REQUEST });
  return axios
    .patch(`https://kom-data-api.herokuapp.com/websites/${id}`, {
      ...websiteContent,
    })
    .then(({ data }) => {
      dispatch({
        type: EDIT_WEBSITE_SUCCESS,
        payload: {
          data,
        },
      });
    })
    .catch((err) => {
      console.log(err);
      dispatch({ type: EDIT_WEBSITE_FAILURE });
    });
};

export const removeWebsite = (id) => (dispatch) => {
  dispatch({ type: REMOVE_WEBSITE_REQUEST });

  axios
    .delete(`https://kom-data-api.herokuapp.com/websites/${id}`)
    .then(() => {
      dispatch({
        type: REMOVE_WEBSITE_SUCCESS,
        payload: {
          id,
        },
      });
    })
    .catch((err) => {
      console.log(err);
      dispatch({ type: REMOVE_WEBSITE_FAILURE });
    });
};
