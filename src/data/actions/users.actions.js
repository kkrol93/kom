import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT } from '../constans';
// import { alertActions } from './';
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
      // login successful if there's a jwt token in the response
      if (data.message) {
        dispatch({ type: LOGIN_FAILURE });

        // Here you should have logic to handle invalid login credentials.
        // This assumes your Rails API will return a JSON object with a key of
        // 'message' if there is an error
      } else {
        sessionStorage.setItem('token', data.accessToken);

        dispatch({
          type: LOGIN_SUCCESS,
          payload: {
            data,
          },
        });
        history.push('/admin');
      }
    });
};

export const logOut = () => (dispatch) => {
  dispatch({ type: LOGOUT });

  sessionStorage.removeItem('token');

  history.push('/');
};
