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
        <div className="min-w-0 min-w-1 min-w-2 min-w-3 min-w-4 min-w-5 min-w-6 min-w-7 min-w-8 min-w-9 min-w-10 min-w-11 min-w-12 min-w-14 min-w-16 min-w-20 min-w-24 min-w-28 min-w-32 min-w-36 min-w-40 min-w-44 min-w-48 min-w-52 min-w-56 min-w-60 min-w-64 min-w-72 min-w-80 min-w-96"></div>
        
        <div className="w-1/2	w-1/3	w-2/3	w-1/4	w-2/4	w-3/4	w-1/5	w-2/5	w-3/5	w-4/5	w-1/6	w-2/6	w-3/6	w-4/6	w-5/6	w-1/12 w-2/12	w-3/12 w-4/12	w-5/12	w-6/12	w-7/12	w-8/12	w-9/12	w-10/12	w-11/12 w-1/24 w-2/24 w-3/24 w-4/24 w-5/24 w-6/24 w-7/24 w-8/24 w-9/24 w-10/24 w-11/24 w-12/24 w-13/24 w-14/24 w-15/24 w-16/24 w-17/24 w-18/24 w-19/24 w-20/24 w-21/24 w-22/24 w-23/24 w-1/36 w-2/36 w-3/36 w-4/36 w-5/36 w-6/36 w-7/36 w-8/36 w-9/36 w-10/36 w-11/36 w-12/36 w-13/36 w-14/36 w-15/36 w-16/36 w-17/36 w-18/36 w-19/36 w-20/36 w-21/36 w-22/36 w-23/36 w-24/36 w-25/36 w-26/36 w-27/36 w-28/36 w-29/36 w-30/36 w-31/36 w-32/36 w-33/36 w-34/36 w-35/36	"></div>
    </div>
  );
}

export default ButtonHome;