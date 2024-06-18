import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Outlet, useLocation } from "react-router-dom";
import ButtonHome from "../mini-components/ButtonHome";
import Header from "../mini-components/Header";
import { setCurrentNav, setNameUser, setTypeUser } from "../../redux/slices/userInfoSlice";
import Navbar from "../mini-components/NavBar";
import { AdmMenu } from ".";

function Admin() {
  const dispatch = useDispatch();
  const {pathname} = useLocation()

  useEffect(() => {
    dispatch(setTypeUser('admin'))
    dispatch(setCurrentNav('home'))
    dispatch(setNameUser('Carlos'))
  }, []);

  return (
    <>
      <Navbar
        menuOptions = { AdmMenu }
        userName = "carlos"

      />
      {/* <Header /> */}
      <Outlet />
      {/* {!pathname.includes('home') && <ButtonHome />} */}
    </>
  );
}

export default Admin;