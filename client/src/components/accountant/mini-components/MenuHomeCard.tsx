import { useState } from "react";
import { useNavigate } from "react-router-dom";

interface Props {
  Image: (h:boolean)=>JSX.Element,
  name: string,
  route: string,
}

function MenuHomeCard(props:Props) {
  const {Image,name,route} = props
  const [hover, setHover] = useState(false);

  const nav = useNavigate()
  
  return (
    <div  
      onMouseEnter={()=>setHover(true)}
      onMouseLeave={()=>setHover(false)}
      onClick={()=>nav(route,{replace:true})}
      // onClick={()=>nav('sales',{relative:'path'})}
      className="border-2 text-cyan-900 border-neutral-600 cursor-pointer w-36 p-4 rounded-xl transition-all hover:border-cyan-500 hover:shadow-lg hover:text-cyan-500 hover:stroke-cyan-500">
      {Image(hover)}
      <p className="text-center text-sm font-bold uppercase">{name}</p>
    </div>
  );
}

export default MenuHomeCard;