import { LOG_OUT_USER, LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS } from "../actionTypes/loginType";


const initialState = {
  isAuthenticated: false,
  user: null,
  error: null,
  loading: false,
}
const loginReducer =(state=initialState,action)=>{
      console.log("action,",action)

   switch (action.type) {
     case LOGIN_REQUEST:
       return {
         ...state,
         loading: true,
         error: null,
       }
     case LOGIN_SUCCESS:
       return {
         ...state,
         loading: false,
         error: null,
         isAuthenticated: true,
         user: action.payload,
       }
     case LOGIN_FAILURE:
       return {
         ...state,
         loading: false,
         error: action.payload,
       }
     case LOG_OUT_USER:
       return {
         ...initialState
       }

     default:
       return state
   }
}
export default loginReducer