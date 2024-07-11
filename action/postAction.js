import axios from 'axios';
import { GET_POSTS, CREATE_POST, LIKE_POST, COMMENT_POST } from './types';

export const getPosts = () => async dispatch => {
  try {
    const res = await axios.get('/api/posts');
    dispatch({ type: GET_POSTS, payload: res.data });
  } catch (err) {
    console.error(err.message);
  }
};

export const createPost = (content, mediaUrl) => async dispatch => {
  try {
    const res = await axios.post('/api/posts', { content, mediaUrl });
    dispatch({ type: CREATE_POST, payload: res.data });
  } catch (err) {
    console.error(err.message);
  }
};

export const likePost = id => async dispatch => {
  try {
    const res = await axios.put(`/api/posts/like/${id}`);
    dispatch({ type: LIKE_POST, payload: { id, likes: res.data } });
  } catch (err) {
    console.error(err.message);
  }
};

export const commentOnPost = (id, content) => async dispatch => {
  try {
    const res = await axios.post(`/api/posts/comment/${id}`, { content });
    dispatch({ type: COMMENT_POST, payload: { id, comments: res.data } });
  } catch (err) {
    console.error(err.message);
  }
};
