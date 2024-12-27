import React, { useState } from "react"

const Login = () => {
  const [loginData,setLoginData] = useState({
    email:"",
    password:""
  })

  const handleChange =(e)=>{
    const { value, name } = e.target
    setLoginData({ ...loginData, [name]: value })
    

  }

//   console.log(loginData)
  const handleSubmit =(e)=>{
  e.preventDefault()
  console.log(loginData)
  }

  return (
    <div className="flex justify-center items-center mt-10 p-3 ">
      <div className="card bg-neutral text-neutral-content w-96 p-3">
        <div className="card-body items-center text-center">
          <h2 className="card-title">Login..🤷‍♂️</h2>
          <form action="" onSubmit={ handleSubmit}>
            <input
              type="email"
              placeholder="Enter your Email"
              className="rounded-md py-1 px-2 mb-3"
              value={loginData.email}
              onChange={handleChange}
              name="email"
            />
            <input
              type="password"
              placeholder="Enter your Password"
              className="rounded-md py-1 px-2 mb-3"
              value={loginData.password}
              name="password"
              onChange={handleChange}
            />
            <div>
              <button className="bg-blue-700 px-8 py-2 rounded-md font-semibold hover:bg-slate-500">
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
