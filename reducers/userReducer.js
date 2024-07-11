import { GET_PROFILE, UPDATE_PROFILE } from '../actions/types';

const initialState = {
  user: null,
  loading: true
};

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_PROFILE:
    case UPDATE_PROFILE:
      return {
        ...state,
        user: payload,
        loading: false
      };
    default:
      return state;
  }
};
