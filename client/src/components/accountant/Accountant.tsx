import { Outlet, useLocation } from "react-router-dom";
import Header from "../mini-components/Header";
import ButtonHome from "../mini-components/ButtonHome";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setCurrentNav, setNameUser, setTypeUser } from "../../redux/slices/userInfoSlice";

function Accountant() {
  const dispatch = useDispatch();
  const {pathname} = useLocation()

  useEffect(() => {
    dispatch(setTypeUser('contador'))
    dispatch(setCurrentNav('home'))
    dispatch(setNameUser('Violeta'))
  }, []);

  return (
    <>
      <Header />
      <Outlet />
      {!pathname.includes('home') && <ButtonHome />}
    </>
  );
}

export default Accountant;