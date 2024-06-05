import { Outlet } from "react-router-dom";


function Auth() {
  return (
    <div className="absolute right-0 left-0 bottom-0 top-0 flex flex-col justify-center items-center">
      <div className="absolute top-0 left-0 right-0  flex justify-between px-10 py-3">
        <p>logo ABM</p>
        <p>logo MEGA</p>
      </div>
      <Outlet />
    </div>
  );
}

export default Auth;