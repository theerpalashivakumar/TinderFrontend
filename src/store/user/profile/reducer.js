import { GET_PROFILE_FAILURE, GET_PROFILE_REQUEST, GET_PROFILE_SUCCESS } from "./actionType";

const initialState = {
  user: {},
  loading: null,
  error: null,
};
const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PROFILE_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case GET_PROFILE_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        user:action.payload
      };
    case GET_PROFILE_FAILURE:
      return {
        ...state,
        loading: fasle,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default profileReducer;