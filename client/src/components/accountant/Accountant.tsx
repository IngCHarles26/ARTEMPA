import { Outlet, useLocation } from "react-router-dom";
import ButtonHome from "./mini-components/ButtonHome";
import Header from "../mini-components/Header";

function Accountant() {
  
  const {pathname} = useLocation()


  return (
    <section className="">
      <Header />
      <Outlet />
      {/* componente de regreso a home */}
      {!pathname.includes('home') && <ButtonHome />}
    </section>
  );
}

export default Accountant;