import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Outlet, useLocation } from "react-router-dom";
import ButtonHome from "../mini-components/ButtonHome";
import Header from "../mini-components/Header";
import { setCurrentNav, setNameUser, setTypeUser } from "../../redux/slices/userInfoSlice";

function Admin() {
  const dispatch = useDispatch();
  const {pathname} = useLocation()

  useEffect(() => {
    dispatch(setTypeUser('admin'))
    dispatch(setCurrentNav('home'))
    dispatch(setNameUser('Carlos'))
  }, []);

  return (
    <section className="">
      <Header />
      <Outlet />
      {!pathname.includes('home') && <ButtonHome />}
    </section>
  );
}

export default Admin;