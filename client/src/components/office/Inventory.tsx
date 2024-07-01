import { useState } from "react";
import { tableComponent } from "../../assets/styles";

function Inventory() {
  const [saveHover, setSaveHover] = useState(false);
  const [registerHover, setRegisterHover] = useState(false);
  const [company, setCompany] = useState(true);

  const wInventario = [
    'w-10/48'  , // id
    'w-11/48' , // tipo : rodamiento reten etc
    'w-6/48'  , // cantidad
    'w-10/48' , // marca
    'w-11/48' , // codigo
  ]
  const wHistorial = [
    'w-11/48'  , // fecha
    'w-11/48' , // id
    'w-6/48'  , // cantidad
    'w-10/48' , // usuario
    'w-10/48' , // ot
  ]
  const aligns = [
    'text-center'    ,
  ]
  return (
    <div className="flex-grow flex flex-col ">

      <div className=" ">
        <p 
          className="text-center w-full bg-lime-600 text-lg text-white font-bold uppercase py-1">
            PETICION</p>

        <form action=""
          className="w-full p-2 flex gap-1 text-sm md:text-base justify-between items-center bg-slate-100 flex-wrap">
          <button 
            onMouseEnter={()=>setSaveHover(true)}
            onMouseLeave={()=>setSaveHover(false)}
            className="transition-all hover:scale-110 relative">
            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-circle-plus w-9 stroke-indigo-600" viewBox="0 0 24 24" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round"> 
              <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" /> <path d="M9 12h6" /> <path d="M12 9v6" />
            </svg>

            {saveHover && <span className="absolute bottom-10 left-5 text-sm bg-indigo-100 rounded text-indigo-700 py-1 px-2 uppercase font-bold w-40">Nuevo repuesto</span>}
          </button>

          <div className="">
            <label className="text-neutral-700 font-bold uppercase ">código: </label>
            <input type="text" className="rounded py-1 px-2 text-neutral-500 uppercase bg-yellow-300 border-black border w-28 font-bold "  />
          </div>

          <div className="">
            <label className="text-neutral-700 font-bold uppercase ">cantidad: </label>
            <input type="text" className="rounded py-1 px-2 text-neutral-700 bg-neutral-100 border-black border w-10"  />
          </div>

          <button
            onClick={(e)=>{e.preventDefault();setCompany(!company)}}
            className={`${company ? 'bg-blue-600' : 'bg-red-600'} transition-all hover:scale-110 px-2 py-1 rounded text-white font-bold w-20`}>{company ? 'ABM' : 'MEGA'}
          </button>

          <div>
            <label className="text-neutral-700 font-bold uppercase ">ot: </label>
            <input type="text" className="rounded py-1 px-2 text-neutral-700 bg-neutral-100 border-black border w-16"  />
          </div>

          <div className="">
            <label className="text-neutral-700 font-bold uppercase ">id: </label>
            <input type="text" className="rounded py-1 px-2 text-neutral-700 bg-neutral-100 border-black border w-20"  />
          </div>

          <select className="rounded py-1 px-2 text-neutral-700 bg-neutral-100 border-black border w-32 uppercase font-bold">
            <option value=""> - usuario - </option>
            <option value=""> Delford</option>
            <option value=""> Christian </option>
            <option value=""> Paul </option>
            <option value=""> Yuder </option>
          </select>

          <button 
            onMouseEnter={()=>setRegisterHover(true)}
            onMouseLeave={()=>setRegisterHover(false)}
            className="transition-all hover:scale-110 relative">
            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-device-floppy w-9 stroke-emerald-600"  viewBox="0 0 24 24" stroke-width="1.5" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M6 4h10l4 4v10a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2" /><path d="M12 14m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" /><path d="M14 4l0 4l-6 0l0 -4" />
            </svg>

            {registerHover && <span className="absolute bottom-10 right-5 text-sm bg-emerald-100 rounded text-emerald-700 py-1 px-2 uppercase font-bold">Registrar</span>}
          </button>
        </form>
      </div>

      <div className="flex flex-grow ">
        <div className=" w-1/2 border-r-4 flex-col flex min-w-96">
          <p className="text-center w-full bg-orange-600 text-lg text-white font-bold border-b-2 uppercase py-1 ">Inventario</p>

          <div className="flex">
            <p className={`${tableComponent.msg}   ${wInventario[0]}`}>id</p>
            <p className={`${tableComponent.input} ${wInventario[1]}`}>tipo</p>
            <p className={`${tableComponent.input} ${wInventario[2]}`}>#</p>
            <p className={`${tableComponent.input} ${wInventario[3]}`}>marca</p>
            <p className={`${tableComponent.input} ${wInventario[4]}`}>codigo</p>
          </div>
        </div>

        <div className="w-1/2 bg-slate-100 min-w-96">
          <p className="text-center w-full bg-teal-600 text-lg text-white font-bold uppercase py-1 border-b-2">Historial</p>

          <div className="flex">
            <p className={`${tableComponent.msg}   ${wHistorial[0]}`}>fecha</p>
            <p className={`${tableComponent.input} ${wHistorial[1]}`}>id</p>
            <p className={`${tableComponent.input} ${wHistorial[2]}`}>#</p>
            <p className={`${tableComponent.input} ${wHistorial[3]}`}>usuario</p>
            <p className={`${tableComponent.input} ${wHistorial[4]}`}>ot</p>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Inventory;