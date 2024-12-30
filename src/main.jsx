// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import { RouterProvider } from 'react-router-dom'
// import router from './routers/router.jsx'
// import { Provider } from 'react-redux'
// import store from './redux/store/index.jsx'

// createRoot(document.getElementById("root")).render(
//   <StrictMode>
//     <Provider store={store}>
//       <RouterProvider router={router} />
//     </Provider>
//   </StrictMode>
// )

import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import "./index.css"
import { RouterProvider } from "react-router-dom"
import router from "./routers/router.jsx"
import { Provider } from "react-redux"
import store from "./redux/store/index.jsx"
import { ToastContainer } from "react-toastify" // Import ToastContainer
import "react-toastify/dist/ReactToastify.css" // Import toast styles

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
      <ToastContainer 
      className="pt-2 py-2 "// Add the ToastContainer here
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light" // You can switch this to "dark" if needed
      />
    </Provider>
  </StrictMode>
)
