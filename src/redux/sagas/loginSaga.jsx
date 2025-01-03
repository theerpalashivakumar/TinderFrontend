import { put, takeEvery, call } from "redux-saga/effects" // Import `call` from redux-saga/effect
import { LOG_OUT_REQUEST, LOGIN_REQUEST } from "../actionTypes/loginType"
import { loginFailure, loginSuccess, logOutFailure, logOutSuccess } from "../actions/loginAction"
import axios from "axios"
import { toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"



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

const fechLogOutRequest =async()=>{
  try{
   const response = await axios.post(`${apiUrl}/logout`)
   return response.data
  }catch(err){
    const errorMessage = err.response?.data?.message
   console.error("Error during logout:", errorMessage)
   throw new Error(errorMessage)
  }
}


function* watchLogOut(action){
  try{
  const data = yield call(fechLogOutRequest)
    yield put(logOutSuccess(data))
    toast.success("LogOut Successful!", {
      position: "top-right",
      autoClose: 3000, // Auto close after 3 seconds
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    })
    action.payload.navigate("/login")

  }catch (err){
   yield put(logOutFailure(err.message))
   toast.error(err.message, {
     position: "top-right",
     autoClose: 3000,
     hideProgressBar: false,
     closeOnClick: true,
     pauseOnHover: true,
     draggable: true,
     progress: undefined,
   })
  }
}



function* watchLogin(action) {
  try {
    console.log("Trigger the saga-1")
    const data = yield call(fetchLoginRequest, action.payload)
    yield put(loginSuccess(data))

    // Show a success toast message
    toast.success("Login Successful!", {
      position: "top-right",
      autoClose: 3000, // Auto close after 3 seconds
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    })

    action.payload.navigate("/feed")

  } catch (err) {
    yield put(loginFailure(err.message))

    // Show an error toast message
    toast.error(err.message, {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    })
  }
}

// function* watchLogin(action) {
//   try {
//     console.log("Trigger the saga-1")
//     const data = yield call(fetchLoginRequest, action.payload)
//     yield put(loginSuccess(data.message))
//   } catch (err) {
//     yield put(loginFailure(err.message))
//   }
// }

export default function* loginSaga() {
  yield takeEvery(LOGIN_REQUEST, watchLogin)
  yield takeEvery(LOG_OUT_REQUEST,watchLogOut)
}
