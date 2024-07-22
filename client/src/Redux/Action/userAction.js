import axios from "axios";

export const FETCH_USERS_REQUEST = "FETCH_USERS_REQUEST";
export const FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS";
export const FETCH_USERS_FAIL = "FETCH_USERS_FAIL";

export const getUsersAction = () => async (dispatch) => {
  dispatch({ type: FETCH_USERS_REQUEST });
  try {
    const data = await (await axios.get("http://localhost:8000/alldata")).data;
    if (data.success === true) {
      return dispatch({ type: FETCH_USERS_SUCCESS, payload: data });
    }
  } catch (error) {
    dispatch({ type: FETCH_USERS_FAIL, payload: error.response.data });
  }
};

export const SUBMIT_USERS_REQUEST = "SUBMIT_USERS_REQUEST";
export const SUBMIT_USERS_SUCCESS = "SUBMIT_USERS_SUCCESS";
export const SUBMIT_USERS_FAIL = "SUBMIT_USERS_FAIL";
