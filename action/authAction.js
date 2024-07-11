import axios from 'axios';
import { LOGIN_SUCCESS, LOGIN_FAIL, REGISTER_SUCCESS, REGISTER_FAIL, LOGOUT } from './types';

export const register = (username, password) => async dispatch => {
  try {
    const res = await axios.post('/api/auth/register', { username, password });
    dispatch({ type: REGISTER_SUCCESS, payload: res.data });
  } catch (err) {
    dispatch({ type: REGISTER_FAIL });
  }
};

export const login = (username, password) => async dispatch => {
  try {
    const res = await axios.post('/api/auth/login', { username, password });
    dispatch({ type: LOGIN_SUCCESS, payload: res.data });
  } catch (err) {
    dispatch({ type: LOGIN_FAIL });
  }
};

export const logout = () => dispatch => {
  dispatch({ type: LOGOUT });
};
