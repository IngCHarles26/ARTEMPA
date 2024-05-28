import { createBrowserRouter } from "react-router-dom";
import App from "./components/App";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import Auth from "./components/auth/Auth";


export const routes = {
  auth: (rt:string)=>`auth/${rt}`,
  login: 'login',
  register: 'register',

}


export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children:[
      {
        path: 'auth/',
        element: <Auth />,
        children:[
          {
            path: 'login',
            element: <Login />,
          },
          {
            path: 'register',
            element: <Register />,
          },
        ]
      }
    ],
    errorElement: <p>holi</p>
  }
])