import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Outlet, useLocation } from "react-router-dom";
import { setCurrentNav, setNameUser, setTypeUser } from "../../redux/slices/userInfoSlice";
import Header from "../mini-components/Header";
import ButtonHome from "../mini-components/ButtonHome";
import Navbar from "../mini-components/NavBar";
import { OffMenu } from ".";

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
          menuOptions = { OffMenu }
          userName = "Milton"
        />

      <Outlet />

    </>
  );
}

export default Office;