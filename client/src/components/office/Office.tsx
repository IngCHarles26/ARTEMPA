import { Outlet } from "react-router-dom";

function Office() {
  return (
    <section>
      <p>Offie</p>
      <Outlet />
    </section>
  );
}

export default Office;