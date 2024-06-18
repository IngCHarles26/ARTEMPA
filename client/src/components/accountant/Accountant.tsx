import { Outlet } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setCurrentNav, setNameUser, setTypeUser } from "../../redux/slices/userInfoSlice";
import Navbar from "../mini-components/NavBar";
import { AccMenu } from ".";

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
          menuOptions = { AccMenu }
          userName = "violeta"
        />

      <Outlet />

    </>
  );
}

export default Accountant;