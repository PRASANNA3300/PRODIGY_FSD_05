import axios from 'axios';
import { GET_PROFILE, UPDATE_PROFILE } from './types';

export const getProfile = () => async dispatch => {
  try {
    const res = await axios.get('/api/users/me');
    dispatch({ type: GET_PROFILE, payload: res.data });
  } catch (err) {
    console.error(err.message);
  }
};

export const updateProfile = (bio, profilePicture) => async dispatch => {
  try {
    const res = await axios.put('/api/users/me', { bio, profilePicture });
    dispatch({ type: UPDATE_PROFILE, payload: res.data });
  } catch (err) {
    console.error(err.message);
  }
};
