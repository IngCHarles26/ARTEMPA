import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Outlet, useLocation } from "react-router-dom";
import { setCurrentNav, setNameUser, setTypeUser } from "../../redux/slices/userInfoSlice";
import Navbar from "../mini-components/NavBar";
import { OffMenu } from ".";
import appRoutes from "../../assets/routesAll";

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
      <Navbar 
          routeUser={appRoutes.office}
          menuOptions = { OffMenu }
          userName = "Milton"
        />

      <Outlet />

    </>
  );
}

export default Office;