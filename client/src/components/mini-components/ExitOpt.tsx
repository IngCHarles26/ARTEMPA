import { useState } from "react";

function ExitOpt() {
  const [hover, setHover] = useState(false);

  
  
  return (
    <div
      onMouseEnter={()=>setHover(true)}
      onMouseLeave={()=>setHover(false)}
      className="transition-all h-12 flex items-center justify-center gap-3 cursor-pointer hover:scale-105 hover:font-bold"
    >
      <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-door-exit w-8 stroke-yellow-500" viewBox="0 0 24 24" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <path d="M13 12v.01" /> <path d="M3 21h18" /> <path d="M5 21v-16a2 2 0 0 1 2 -2h7.5m2.5 10.5v7.5" /> <path d="M14 7h7m-3 -3l3 3l-3 3" />
      </svg>
      {
        hover &&  <p className="uppercase absolute left-14 bg-red-400 text-white px-2 py-1 rounded opacity-95 text-sm">SALIR</p>
      }
    </div>
  );
}

export default ExitOpt;