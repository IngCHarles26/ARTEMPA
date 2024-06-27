import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Outlet } from "react-router-dom";
import { setCurrentNav, setNameUser, setTypeUser } from "../../redux/slices/userInfoSlice";
import Navbar from "../mini-components/NavBar";
import { AdmMenu } from ".";
import appRoutes from "../../assets/routesAll";

function Admin() {
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(setTypeUser('admin'))
    dispatch(setCurrentNav('home'))
    dispatch(setNameUser('Carlos'))
  }, []);

  return (
    <>
      <Navbar
        routeUser={appRoutes.admin}
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