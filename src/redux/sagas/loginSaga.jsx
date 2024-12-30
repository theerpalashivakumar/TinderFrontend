import { put, takeEvery, call } from "redux-saga/effects" // Import `call` from redux-saga/effect
import { LOGIN_REQUEST } from "../actionTypes/loginType"
import { loginFailure, loginSuccess } from "../actions/loginAction"
import axios from "axios"

const apiUrl = import.meta.env.VITE_BACKEND_URL
console.log(apiUrl)

const fetchLoginRequest = async (loginData) => {
  console.log("Login payload:", loginData) // Debug the payload
  try {
    const response = await axios.post(`${apiUrl}/login`, loginData,{withCredentials:true}, {
      headers: { "Content-Type": "application/json" },
    })
    console.log(response)
    return response.data
  } catch (err) {
    const errorMessage = err.response?.data?.message || "Login Failed!"
    console.error("Error during login:", errorMessage)
    throw new Error(errorMessage)
  }
}


function* watchLogin(action) {
  try {
    console.log("Trigger the saga-1")
    const data = yield call(fetchLoginRequest, action.payload)
    yield put(loginSuccess(data.message))
  } catch (err) {
    yield put(loginFailure(err.message))
  }
}

export default function* loginSaga() {
  yield takeEvery(LOGIN_REQUEST, watchLogin)
}
