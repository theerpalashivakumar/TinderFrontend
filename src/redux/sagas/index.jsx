import { all, call } from "redux-saga/effects"
// import exampleSaga from "./exampleSaga"
// import userSaga from "./userSaga"
// import registerSaga from "./registerSaga"
import loginSaga from "./loginSaga"

export default function* rootSaga() {
  yield all([
    // call(exampleSaga),
    // call(userSaga),
    // call(registerSaga),
    call(loginSaga),
  ])
}
