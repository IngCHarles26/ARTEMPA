import { Outlet } from "react-router-dom";

function Admin() {
  return (
    <section>
      <p>Admin</p>
      <Outlet />
    </section>
  );
}

export default Admin;