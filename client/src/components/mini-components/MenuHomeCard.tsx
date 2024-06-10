import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setCurrentNav } from "../../redux/slices/userInfoSlice";

interface Props {
  Image: (h:boolean)=>JSX.Element,
  name: string,
  route: string,
}

function MenuHomeCard(props:Props) {
  const {Image,name,route} = props
  const [hover, setHover] = useState(false);
  const nav = useNavigate()
  const dispatch = useDispatch()

  
  const handleClick = ()=>{
    dispatch(setCurrentNav(name))
    nav(route,{replace:true})
  }

  return (
    <div  
      onMouseEnter={()=>setHover(true)}
      onMouseLeave={()=>setHover(false)}
      onClick={handleClick}
      className="border-2 text-cyan-900 border-neutral-600 cursor-pointer w-32 md:w-36 h-44 p-2 md:p-3 rounded-xl transition-all hover:border-cyan-500 hover:shadow-lg hover:text-cyan-500 hover:stroke-cyan-500 hover:font-extrabold">
      {Image(hover)}
      <p className="text-center text-xs md:text-sm font-bold uppercase">{name}</p>
    </div>
  );
}

export default MenuHomeCard;