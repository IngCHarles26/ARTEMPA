import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Login from "../pages/login/Login";
import Error from "../pages/error/Error";

export const router = createBrowserRouter([
  {
    path:'/',
    element: <App />,
    children:[
      {
        path:'login',
        element: <Login />, 
      }
    ],
    errorElement: <Error />
  }
])