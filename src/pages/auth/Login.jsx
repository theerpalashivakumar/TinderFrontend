import React, { useState } from "react"
// import axios from "axios"
import { useDispatch } from "react-redux"
import { loginRequst } from "../../redux/actions/loginAction"

const Login = () => {
  const [emailId, setEmailId] = useState("")
  const [password, setPassword] = useState("")
  const dispatch = useDispatch()

  const handleLogin = (e) => {
    e.preventDefault()
    if (emailId && password) {
      dispatch(loginRequst({ emailId, password }))
    } else {
      console.log("Please fill in both fields.")
    }
  }

  return (
    <div className="flex justify-center items-center mt-10 p-3 ">
      <div className="card bg-neutral text-neutral-content w-96 p-3">
        <div className="card-body items-center text-center">
          <h2 className="card-title">Login..🤷‍♂️</h2>
          <form action="" onSubmit={handleLogin}>
            <input
              type="emailId"
              placeholder="Enter your Email"
              className="rounded-md py-1 px-2 mb-3 text-black"
              value={emailId}
              onChange={(e) => setEmailId(e.target.value)}
              name="emailId"
            />
            <input
              type="password"
              placeholder="Enter your Password"
              className="rounded-md py-1 px-2 mb-3"
              value={password}
              name="password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <div>
              <button
                className="bg-blue-700 px-8 py-2 rounded-md font-semibold hover:bg-slate-500"
                onClick={handleLogin}>
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login
