import { Outlet } from "react-router-dom";

function Auth() {
  return (
    <div className="flex flex-col justify-center items-center pt-20 mb-10">
      <h1 className="text-3xl mb-8 uppercase font-extrabold text-gray-900">Artempa PROJECT</h1>
      <Outlet />
    </div>
  );
}

export default Auth;