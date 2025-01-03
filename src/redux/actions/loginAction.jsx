import {
  LOG_OUT_FAILURE,
  LOG_OUT_REQUEST,
  LOG_OUT_SECCESS,
  LOGIN_FAILURE,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
} from "../actionTypes/loginType"

export const loginRequst = ({ emailId, password, navigate }) => ({
  type: LOGIN_REQUEST,
  payload: { emailId, password, navigate },
})

export const loginSuccess = (userData) => ({
  type: LOGIN_SUCCESS,
  payload: userData,
})

export const loginFailure = (error) => ({
  type: LOGIN_FAILURE,
  payload: error,
})

export const logOutRequest = ({navigate}) => ({
  type: LOG_OUT_REQUEST,
  payload: {navigate},
})
export const logOutSuccess = (data) => ({
  type: LOG_OUT_SECCESS,
  payload: data,
})
export const logOutFailure = (err) => ({
  type: LOG_OUT_FAILURE,
  payload: err,
})
