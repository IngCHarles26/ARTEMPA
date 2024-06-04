import { Outlet } from "react-router-dom";

function Technician() {
  return (
    <section>
      <p>Tecnico</p>
      <Outlet />
    </section>
  );
}

export default Technician;