import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { TypeStore } from "../../redux/store";



function AlertMessage() {
  const { message , time, color} = useSelector((st:TypeStore)=>st.not)
  const [vislble, setVislble] = useState(false);

  useEffect(() => {
    if (message) {
      setVislble(true)
      const timer = setTimeout(()=>{
        setVislble(false)
      },time)
  
      return () => clearTimeout(timer)
    }
    
  }, [message,time]);

  return ( 
    <div className={`${vislble ? '' : 'hidden'} ${color} fixed bottom-1 right-1 px-2 py-1 rounded text-white uppercase font-bold w-64 text-center text-sm tracking-wider opacity-80  `}>
      <p className="">{message}</p>
    </div>
   );
}



export default AlertMessage;