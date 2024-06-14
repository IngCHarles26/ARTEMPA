// import { useSelector } from "react-redux";
// import { TypeStore } from "../../redux/store";

import { useSelector } from "react-redux";
import { TypeStore } from "../../redux/store";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { setCurrentNav } from "../../redux/slices/userInfoSlice";
import appRoutes from "../../assets/routesAll";
import { useState } from "react";

function Header() {
  const {home} = appRoutes
  const {typeUser,currentNav,nameUser} = useSelector((st:TypeStore)=>st.userInfo)
  const [visible, setVisible] = useState(false);
  const dispatch = useDispatch()
  const nav = useNavigate()
  const {pathname} = useLocation()
  const homeVisible = !pathname.includes('home')

  const handleClick = ()=>{
    dispatch(setCurrentNav('home'))
    nav(home,{relative:'path'})
  }

  return (
    <header className="flex justify-between bg-cyan-800 h-11 p-2">

      <div className="w-1/3 flex justify-start items-center p-1">{

          homeVisible &&
          <button 
            onClick={handleClick}
            onMouseEnter={()=>setVisible(true)}
            onMouseLeave={()=>setVisible(false)}
            className="transition-all hover:scale-110">
            
            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-category stroke-yellow-400 hover:stroke-2" width="35" height="35" viewBox="0 0 24 24" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
              <path d="M4 4h6v6h-6z" />
              <path d="M14 4h6v6h-6z" />
              <path d="M4 14h6v6h-6z" />
              <path d="M17 17m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
            </svg>

          </button>
        }
        <p className="pl-2 text-white font-bold">{(visible && homeVisible) ? 'HOME' : ''}</p>

      </div>
      
      <p className="text-white font-extrabold tracking-widest uppercase w-1/3 text-center text-xl ">{currentNav}</p>
      
      <p className="text-md text-neutral-300 w-1/3 text-right">{typeUser}: <span className="text-xl font-bold text-yellow-300">{nameUser}</span></p>

    </header>
  );
}

export default Header;