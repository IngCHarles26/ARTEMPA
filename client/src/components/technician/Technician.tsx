import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Outlet, useLocation } from "react-router-dom";
import ButtonHome from "../mini-components/ButtonHome";
import Header from "../mini-components/Header";
import { setCurrentNav, setNameUser, setTypeUser } from "../../redux/slices/userInfoSlice";


function Technician() {
  const dispatch = useDispatch();
  const {pathname} = useLocation()

  useEffect(() => {
    dispatch(setTypeUser('tecnico'))
    dispatch(setCurrentNav('home'))
    dispatch(setNameUser('Delford'))
  }, []);

  return (
    <>
      <Header />
      <Outlet />
      {!pathname.includes('home') && <ButtonHome />}
    </>
  );
}

export default Technician;