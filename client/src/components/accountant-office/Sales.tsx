import { FormEvent } from "react";
import PageNav from "../mini-components/PageNav";
import useWindowSize from "../../hooks/useWindowSize";
import { fDiv } from "../../assets/helpers";
import FormRowClients from "./mini-components/FormRowClients";

function Sales() {
  //                   +              SERIE          NUMERO         FECHA         OT            CLIENTE           OS/OC          IMPORTE        CREDITO       VENCIMIENTO   MONTO       N° OPERACION    DETRACCCION      PAGO DETRACCION
  const widths    = [ 'w-1/36'      ,'w-2/36'      ,'w-3/36'       ,'w-3/36'     ,'w-2/36'    , 'w-6/36'       , 'w-3/36'      ,'w-3/36'      ,'w-2/36'       ,'w-3/36'     ,'w-2/36'    , 'w-2/36'       , 'w-2/36'      ,  'w-2/36'    ]
  const minWidths = [ 'min-w-1'     ,'min-w-1'      ,'min-w-1'     ,'min-w-1'    ,'min-w-1'   , 'min-w-1'      , 'min-w-1'     ,'min-w-1'     ,'min-w-1'      ,'min-w-1'    ,'min-w-1'   , 'min-w-1'      , 'min-w-1'     , 'min-w-1'    ]
  const aligns    = [ 'text-center' ,'text-center' ,'text-center'  ,'text-left'  ,'text-left' , 'text-center'  , 'text-center' ,'text-center' ,'text-center'  ,'text-left'  ,'text-left' , 'text-center'  , 'text-center' , 'text-center']
  const {height} =  useWindowSize()
  

  const handleClick = (e:FormEvent) => {
    e.preventDefault()
    
  }
  
  return (
    <div className="flex-grow flex flex-col justify-start  overflow-x-scroll md:overflow-x-auto ">

    {/* _______________ TABLE HEADER */}

      <form 
        className={`flex justify-start items-center md:border-b-2 border-stone-100`}>
        
        <button 
          onClick={handleClick}
          className={`transition-all bg-neutral-700 flex items-start justify-center hover:opacity-90
            ${widths[0]} ${minWidths[0]} `}>

            <p className={`text-center text-white text-3xl font-extrabold mb-1 hover:scale-125 `}>+</p>

          </button>

        <input 
          type="text" 
          placeholder="SERIE"
          className={`text-center p-2 bg-neutral-700 placeholder:text-white outline-none border-l-2 text-neutral-200 uppercase font-bold h-full hover:opacity-90 
            ${widths[1]} ${minWidths[1]} `}/>
        
        <input 
          type="text" 
          placeholder="NUMERO"
          className={`text-center p-2 bg-neutral-700 placeholder:text-white outline-none border-l-2 text-neutral-200 uppercase font-bold h-full hover:opacity-90  
            ${widths[2]} ${minWidths[2]} `}/>

        <input 
          type="text" 
          placeholder="FECHA"
          className={`text-center p-2 bg-neutral-700 placeholder:text-white outline-none border-l-2 text-neutral-200 uppercase font-bold h-full hover:opacity-90 
            ${widths[3]} ${minWidths[3]} `}/>
        <input 
          type="text" 
          placeholder="OT"
          className={`text-center p-2 bg-neutral-700 placeholder:text-white outline-none border-l-2 text-neutral-200 uppercase font-bold h-full hover:opacity-90 
            ${widths[4]} ${minWidths[4]} `}/>
        <input 
          type="text" 
          placeholder="CLIENTE"
          className={`text-center p-2 bg-neutral-700 placeholder:text-white outline-none border-l-2 text-neutral-200 uppercase font-bold h-full hover:opacity-90 
            ${widths[5]} ${minWidths[5]} `}/>
        <input 
          type="text" 
          placeholder="OS"
          className={`text-center p-2 bg-neutral-700 placeholder:text-white outline-none border-l-2 text-neutral-200 uppercase font-bold h-full hover:opacity-90
            ${widths[6]} ${minWidths[6]} `}/>
        <input 
          type="text" 
          placeholder="IMPORTE"
          className={`text-center p-2 bg-neutral-700 placeholder:text-white outline-none border-l-2 text-neutral-200 uppercase font-bold h-full hover:opacity-90
            ${widths[7]} ${minWidths[7]} `}/>
        <input 
          type="text" 
          placeholder="CREDITO"
          className={`text-center p-2 bg-neutral-700 placeholder:text-white outline-none border-l-2 text-neutral-200 uppercase font-bold h-full hover:opacity-90
            ${widths[8]} ${minWidths[8]} `}/>
        <input 
          type="text" 
          placeholder="VENCIMIENTO"
          className={`text-center p-2 bg-neutral-700 placeholder:text-white outline-none border-l-2 text-neutral-200 uppercase font-bold h-full hover:opacity-90
            ${widths[9]} ${minWidths[9]} `}/>
        <input 
          type="text" 
          placeholder="MONTO"
          className={`text-center p-2 bg-neutral-700 placeholder:text-white outline-none border-l-2 text-neutral-200 uppercase font-bold h-full hover:opacity-90
            ${widths[10]} ${minWidths[10]} `}/>
        <input 
          type="text" 
          placeholder="N° OP"
          className={`text-center p-2 bg-neutral-700 placeholder:text-white outline-none border-l-2 text-neutral-200 uppercase font-bold h-full hover:opacity-90
            ${widths[11]} ${minWidths[11]} `}/>
        <input 
          type="text" 
          placeholder="DET."
          className={`text-center p-2 bg-neutral-700 placeholder:text-white outline-none border-l-2 text-neutral-200 uppercase font-bold h-full hover:opacity-90
            ${widths[12]} ${minWidths[12]} `}/>
        <input 
          type="text" 
          placeholder="N° OP"
          className={`text-center p-2 bg-neutral-700 placeholder:text-white outline-none border-l-2 text-neutral-200 uppercase font-bold h-full hover:opacity-90
            ${widths[13]} ${minWidths[13]} `}/>

      </form>

    {/* _______________ TABLE CONTENT  */}

      {/* <div className="">{

        clientsInfo.slice(0,fDiv(height,32)-6).map((client,ix)=>
          <FormRowClients 
            key={ix+'_formRowClient'}
            client={client}
            widths={widths}
            minWidths={minWidths}
            align={aligns}
          />

        )}
      </div> */}

    {/* _______________ PAGINATION  */}

      <div className="fixed bottom-4 right-1/4 md:right-1/2" >

        <PageNav 
            pages={10}
          />  

      </div>

    </div>
  );
}

export default Sales;