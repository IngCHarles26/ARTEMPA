import { Outlet } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setCurrentNav, setNameUser, setTypeUser } from "../../redux/slices/userInfoSlice";
import Navbar from "../mini-components/NavBar";
import { AccMenu } from ".";
import appRoutes from "../../assets/routesAll";

function Accountant() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setTypeUser('contador'))
    dispatch(setCurrentNav('home'))
    dispatch(setNameUser('Violeta'))
  }, []);

  return (
    <>
      <Navbar 
          routeUser={appRoutes.accountant}
          menuOptions = { AccMenu }
          userName = "violeta"
        />

      <Outlet />

    </>
  );
}

export default Accountant;