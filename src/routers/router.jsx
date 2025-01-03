import App from "../App";
import {createBrowserRouter} from "react-router-dom"
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import Feed from "../pages/auth/Feed";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/login",
        element: <Login />,
      },
      { path: "/register", element: <Register /> },
      {
        path: "/Feed",
        element: <Feed />,
      },
    ],
  },
])

export default router

