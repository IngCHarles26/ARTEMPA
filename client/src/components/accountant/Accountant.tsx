import { Outlet } from "react-router-dom";
import Header from "../mini-components/Header";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setCurrentNav, setNameUser, setTypeUser } from "../../redux/slices/userInfoSlice";

function Accountant() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setTypeUser('contador'))
    dispatch(setCurrentNav('home'))
    dispatch(setNameUser('Violeta'))
  }, []);

  return (
    <>

      <Header />

      <Outlet />

    </>
  );
}

export default Accountant;