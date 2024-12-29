import { combineReducers } from "redux"
// import exampleReducer from "./exampleReducer"
// import userReducer from "./userReducer"
// import registerReducer from "./registerReducer"
import loginReducer from "./loginReducer"

const rootReducer = combineReducers({
  // example: exampleReducer,
//   user: userReducer,
//   register: registerReducer,
  login: loginReducer,
})

export default rootReducer
