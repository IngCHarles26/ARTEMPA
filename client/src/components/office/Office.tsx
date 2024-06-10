import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Outlet, useLocation } from "react-router-dom";
import { setCurrentNav, setNameUser, setTypeUser } from "../../redux/slices/userInfoSlice";
import Header from "../mini-components/Header";
import ButtonHome from "../mini-components/ButtonHome";

function Office() {
  const dispatch = useDispatch();
  const {pathname} = useLocation()

  useEffect(() => {
    dispatch(setTypeUser('Office'))
    dispatch(setCurrentNav('home'))
    dispatch(setNameUser('Milton'))
  }, []);

  return (
    <>
      <Header />
      <Outlet />
      {!pathname.includes('home') && <ButtonHome />}
    </>
  );
}

export default Office;