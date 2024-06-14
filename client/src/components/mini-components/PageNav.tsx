import { ChangeEvent, useState } from "react";

interface Props {
  pages: number,
}


function PageNav(props:Props) {
  const {pages} = props
  const {max,min} = Math
  const [current, setCurrent] = useState(1);

  const handleChange = (e:ChangeEvent<HTMLInputElement>)=>{
    const {value} = e.target;
    const val = +value.split('').filter(el=>+el+1).join('')
    const newPage = max(min(pages,val),0)
    setCurrent(newPage)
  }

  return (
    <div className="mt-1 flex justify-center items-center gap-5 ">
      
      <button 
        onClick={()=>{setCurrent(max(1,current-1))}}
        className={"transition-all hover:scale-110 "+(current==1 && '-z-50')}>
        
        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-arrow-badge-left w-10 stroke-cyan-700 hover:stroke-cyan-800 stroke-2" viewBox="0 0 24 24" fill="none" strokeLinecap="round" strokeLinejoin="round">
          <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
          <path d="M11 17h6l-4 -5l4 -5h-6l-4 5z" />
        </svg>

      </button>

      <div className="flex gap-2" >

        <p>Página: </p>

        <input type="text" name="currentPage" value={current} onChange={handleChange} className="w-10 text-center rounded-lg text-neutral-500 font-bold" />
      
      </div>
      
      <button 
        onClick={()=>{setCurrent(min(pages,current+1))}}
        className={"transition-all hover:scale-110 "+(current==pages && '-z-50')}>
        
        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-arrow-badge-right w-10 stroke-cyan-700 hover:stroke-cyan-800 stroke-2" viewBox="0 0 24 24" fill="none" strokeLinecap="round" strokeLinejoin="round">
          <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
          <path d="M13 7h-6l4 5l-4 5h6l4 -5z" />
        </svg>

      </button>
      
    </div>
  );
}

export default PageNav;