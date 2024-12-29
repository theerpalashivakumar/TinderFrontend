import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS } from "../actionTypes/loginType"

export const loginRequst = ({ emailId, password }) => ({
  type: LOGIN_REQUEST,
  payload: { emailId, password },
})

export const loginSuccess = (message) => ({
  type: LOGIN_SUCCESS,
  payload: message,
})

export const loginFailure = (error) => ({
  type: LOGIN_FAILURE,
  payload: error,
})
