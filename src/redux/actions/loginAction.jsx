import { LOG_OUT_USER, LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS } from "../actionTypes/loginType"

export const loginRequst = ({ emailId, password }) => ({
  type: LOGIN_REQUEST,
  payload: { emailId, password },
})

export const loginSuccess = (userData) => ({
  type: LOGIN_SUCCESS,
  payload: userData,
})

export const loginFailure = (error) => ({
  type: LOGIN_FAILURE,
  payload: error,
})

export const logOutUser= (error) => ({
  type:LOG_OUT_USER,
  payload: error,
})
