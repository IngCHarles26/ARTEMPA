import { useState } from "react";
// import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

interface Props {
  image: (h:boolean)=>JSX.Element,
  name: string,
  route: string,
  selected: boolean,
}


function NavBarOpt(props:Props) {
  const {image,name,route,selected} = props
  const [hover, setHover] = useState(false)
  const navigate = useNavigate()
  // const dispatch = useDispatch()

  const handleClick = () => {
    navigate(route,{replace:true})
  }


  return (
    <div
        onMouseEnter={()=>setHover(true)}
        onMouseLeave={()=>setHover(false)}
        onClick={handleClick}
        className={`transition-all flex items-center justify-start cursor-pointer hover:scale-105 hover:font-bold z-50 ${selected && '-order-1 scale-125'}`}
      >
        {image(hover || selected)}

        {
          hover &&  <p className="uppercase absolute left-14 bg-neutral-500 text-white px-2 py-1 rounded opacity-95 text-sm w-auto text-nowrap">{name}</p>
        }
       
    </div>
  );
}

export default NavBarOpt;