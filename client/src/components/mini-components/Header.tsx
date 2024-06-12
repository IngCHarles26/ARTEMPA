// import { useSelector } from "react-redux";
// import { TypeStore } from "../../redux/store";

import { useSelector } from "react-redux";
import { TypeStore } from "../../redux/store";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setCurrentNav } from "../../redux/slices/userInfoSlice";
import appRoutes from "../../assets/routesAll";

function Header() {
  const {home} = appRoutes
  const {typeUser,currentNav,nameUser} = useSelector((st:TypeStore)=>st.userInfo)
  const dispatch = useDispatch()
  const nav = useNavigate()

  const handleClick = ()=>{
    dispatch(setCurrentNav('home'))
    nav(home,{relative:'path'})
  }

  return (
    <header className="flex justify-between bg-cyan-800 h-11 p-2">
      <div className="w-1/3 flex justify-start items-center p-1">
        <button 
          onClick={handleClick}
          className="transition-all hover:scale-110 ">
            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-home-2 stroke-yellow-400 " width="35" height="35" viewBox="0 0 24 24" strokeWidth="1" fill="none" strokeLinecap="round" strokeLinejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
              <path d="M5 12l-2 0l9 -9l9 9l-2 0" />
              <path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7" />
              <path d="M10 12h4v4h-4z" />
            </svg>
          </button>
      </div>
      <p className="text-white font-extrabold tracking-widest uppercase w-1/3 text-center text-xl ">{currentNav}</p>
      <p className="text-md text-neutral-300 w-1/3 text-right">{typeUser}: <span className="text-xl font-bold text-yellow-300">{nameUser}</span></p>
    </header>
  );
}

export default Header;