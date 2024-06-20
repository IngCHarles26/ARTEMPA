import { useState } from "react";

interface Props {
  userName: string,
}

function UserOpt(props:Props) {
  const {userName} = props
  const [hover, setHover] = useState(false);


  return (
    <div
      onMouseEnter={()=>setHover(true)}
      onMouseLeave={()=>setHover(false)}
      className="transition-all h-12 flex items-center justify-start gap-3 cursor-pointer hover:scale-110 hover:font-bold"
    >
      <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-user-circle w-10 stroke-neutral-800" viewBox="0 0 24 24" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" /><path d="M12 10m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" /><path d="M6.168 18.849a4 4 0 0 1 3.832 -2.849h4a4 4 0 0 1 3.834 2.855" />
      </svg>

      {
        hover &&  <p className="uppercase absolute left-14 bg-yellow-300 text-neutral-800 px-2 py-1 rounded text-xl">{userName}</p>
      }
    </div>
  );
}

export default UserOpt;