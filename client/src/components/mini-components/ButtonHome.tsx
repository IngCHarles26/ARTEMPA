import { useState } from "react";
import { useNavigate } from "react-router-dom";
import appRoutes from "../../assets/routesAll";
import { useDispatch } from "react-redux";
import { setCurrentNav } from "../../redux/slices/userInfoSlice";


function ButtonHome() {
  const {home} = appRoutes
  const [visible, setVisible] = useState(false);
  const dispatch = useDispatch()
  const nav = useNavigate()


  const handleClick = ()=>{
    dispatch(setCurrentNav('home'))
    nav(home,{relative:'path'})
  }

  return (
    <div className="fixed bottom-2 left-2 md:bottom-4 md:left-4 flex items-center space-x-3">
        <div 
          onMouseEnter={()=>setVisible(true)}
          onMouseLeave={()=>setVisible(false)}
          onClick={handleClick}
          className="bg-yellow-300 p-2 rounded-full hover:scale-110 transition-all cursor-pointer">
          <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-category" width="35" height="35" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#1B4F72" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <path d="M4 4h6v6h-6z" />
            <path d="M14 4h6v6h-6z" />
            <path d="M4 14h6v6h-6z" />
            <path d="M17 17m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
          </svg>
        </div>
        {
          visible && 
          <div  className="bg-neutral-500 text-white px-2 py-1 rounded">
            Home
          </div>
        }
    </div>
  );
}

export default ButtonHome;