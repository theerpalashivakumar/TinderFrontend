import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { logOutUser } from '../redux/actions/loginAction'

const Navbar = () => {
  const dispatch = useDispatch()

  const { user, isAuthenticated } = useSelector((state) => state.login)
  console.log(user)

  const handleLogOut =()=>{
    dispatch(logOutUser())
  }

  return (
    <div>
      <div className="navbar bg-gray-500">
        <div className="flex-1">
          <a className="btn btn-ghost text-xl text-white">👨‍💻 devTinder</a>
        </div>
        <div className="flex-none gap-2">
          {/* <div className="form-control">
            <input
              type="text"
              placeholder="Search"
              className="input input-bordered w-24 md:w-auto"
            />
          </div> */}
          {user && (
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar mr-4">
                <div className="w-10 rounded-full">
                  <img
                    alt="Tailwind CSS Navbar component"
                    // src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                    src={user?.photoUrl}
                  />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                <li>
                  <a className="justify-between">
                    Profile
                    <span className="badge">New</span>
                  </a>
                </li>
                <li>
                  <a>Settings</a>
                </li>
                <li onClick={handleLogOut}>
                  <a>Logout</a>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Navbar
