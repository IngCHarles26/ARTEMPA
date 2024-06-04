import { Outlet } from "react-router-dom";

function Accountant() {
  return (
    <section>
      <p>Contador</p>
      <Outlet />
    </section>
  );
}

export default Accountant;