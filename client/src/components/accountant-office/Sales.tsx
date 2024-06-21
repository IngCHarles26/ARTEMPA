import { FormEvent } from "react";
import PageNav from "../mini-components/PageNav";
import useWindowSize from "../../hooks/useWindowSize";
import { tableComponent } from "../../assets/styles";

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
    <div className={`${tableComponent.div} `}>

    {/* _______________ TABLE HEADER */}

      <form 
        className={`${tableComponent.form}`}>
        
        <button 
          onClick={handleClick}
          className={`${tableComponent.button}
            ${widths[0]} ${minWidths[0]} `}>

            <p className={`text-center text-white text-3xl font-extrabold hover:scale-125 `}>+</p>

          </button>

        <input 
          type="text" 
          placeholder="SERIE"
          className={`${tableComponent.input} 
            ${widths[1]} ${minWidths[1]} `}/>
        
        <input 
          type="text" 
          placeholder="NUMERO"
          className={`${tableComponent.input}  
            ${widths[2]} ${minWidths[2]} `}/>

        <input 
          type="text" 
          placeholder="FECHA"
          className={`${tableComponent.input} 
            ${widths[3]} ${minWidths[3]} `}/>
        <input 
          type="text" 
          placeholder="OT"
          className={`${tableComponent.input} 
            ${widths[4]} ${minWidths[4]} `}/>
        <input 
          type="text" 
          placeholder="CLIENTE"
          className={`${tableComponent.input} 
            ${widths[5]} ${minWidths[5]} `}/>
        <input 
          type="text" 
          placeholder="OS"
          className={`${tableComponent.input}
            ${widths[6]} ${minWidths[6]} `}/>
        <input 
          type="text" 
          placeholder="IMPORTE"
          className={`${tableComponent.input}
            ${widths[7]} ${minWidths[7]} `}/>
        <input 
          type="text" 
          placeholder="CREDITO"
          className={`${tableComponent.input}
            ${widths[8]} ${minWidths[8]} `}/>
        <input 
          type="text" 
          placeholder="VENCIMIENTO"
          className={`${tableComponent.input}
            ${widths[9]} ${minWidths[9]} `}/>
        <input 
          type="text" 
          placeholder="MONTO"
          className={`${tableComponent.input}
            ${widths[10]} ${minWidths[10]} `}/>
        <input 
          type="text" 
          placeholder="N° OP"
          className={`${tableComponent.input}
            ${widths[11]} ${minWidths[11]} `}/>
        <input 
          type="text" 
          placeholder="DET."
          className={`${tableComponent.input}
            ${widths[12]} ${minWidths[12]} `}/>
        <input 
          type="text" 
          placeholder="N° OP"
          className={`${tableComponent.input}
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