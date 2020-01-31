import * as types from '../types'; // types can be used as 'types.<YOUR-TYPE>'
import { axiosWithAuth } from '../../utils/axiosWithAuth';

// ACTIONS LIVE HERE

export const register = creds => dispatch => {
  dispatch({ type: types.REGISTER_START });
  return axiosWithAuth()
    .post('/auth/register', creds)
    .then(res => {
      console.log(res);
      dispatch({ type: types.REGISTER_SUCCESS, payload: res.data.username });
    })
    .catch(err => {
      console.log(err);
      dispatch({ type: types.REGISTER_FAIL, payload: err.data });
    });
};

export const login = credentials => dispatch => {
  dispatch({ type: types.LOGIN_START });
  return axiosWithAuth()
    .post(`/auth/login`, credentials)
    .then(res => {
      localStorage.setItem('token', res.data.token);
      localStorage.setItem('id', res.data.id);
      dispatch({
        type: types.LOGIN_SUCCESS,
        payload: res.data.token,
        message: res.data.message
      });
    })
    .catch(err => {
      dispatch({ type: types.LOGIN_FAIL, payload: err.data });
    });
};
