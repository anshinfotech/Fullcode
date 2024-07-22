import {
  FETCH_USERS_FAIL,
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESS,
} from "../Action/userAction";

const initalUserState = {
  users: [],
  loading: "",
  error: "",
  message: "",
};

export const userReducer = (state = initalUserState, action) => {
  switch (action.type) {
    case FETCH_USERS_REQUEST:
      return { ...state, loading: true };
    case FETCH_USERS_SUCCESS:
      return {
        ...state,
        loading: false,
        users: action.payload.alldata,
        message: action.payload.message,
      };
    case FETCH_USERS_FAIL:
      return {
        ...state,
        loading: false,
        message: action.payload.message,
        error: action.payload.error,
      };
    default:
      return state;
  }
};
