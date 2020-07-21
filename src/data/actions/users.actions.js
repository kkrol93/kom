import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT } from '../constans';
import history from '../../helpers/history';

export const login = (email, password) => async (dispatch) => {
  dispatch({ type: LOGIN_REQUEST });
  return fetch('https://kom-api.herokuapp.com/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({ email, password }),
  })
    .then((resp) => resp.json())

    .then((data) => {
      if (data) {
        dispatch({
          type: LOGIN_SUCCESS,
          payload: {
            data,
          },
        });
        sessionStorage.setItem('token', data.accessToken);
        history.push('/admin');
      }
    })
    .catch((error) => {
      dispatch({ type: LOGIN_FAILURE });
    });
};

export const logOut = () => (dispatch) => {
  dispatch({ type: LOGOUT });
  sessionStorage.removeItem('token');

  history.push('/');
};
