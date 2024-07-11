import { GET_POSTS, CREATE_POST, LIKE_POST, COMMENT_POST } from '../actions/types';

const initialState = {
  posts: [],
  loading: true
};

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_POSTS:
      return {
        ...state,
        posts: payload,
        loading: false
      };
    case CREATE_POST:
      return {
        ...state,
        posts: [payload, ...state.posts],
        loading: false
      };
    case LIKE_POST:
      return {
        ...state,
        posts: state.posts.map(post =>
          post._id === payload.id ? { ...post, likes: payload.likes } : post
        ),
        loading: false
      };
    case COMMENT_POST:
      return {
        ...state,
        posts: state.posts.map(post =>
          post._id === payload.id ? { ...post, comments: payload.comments } : post
        ),
        loading: false
      };
    default:
      return state;
  }
};
