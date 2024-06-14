/*
  datos a mostrar en la tabla
    agregar
    fecha
    ruc -> F
    nombre -> F
    numero -> F
    serie -> F
    costo 
    estado -> F
    pagado -> F
    detraccion -> F
    descripcion
    empresa (abm o mega) -> F

  funciones visibles
    agregar una compra
    editar una compra
    buscar una compra
    filtros
      ruc
      nombre
      estado
      empresa (abm o mega)


  funciones ocultas
    guardar un array de cambios
    adaptar la tabla segun el alto de la pantalla
*/

import { FormEvent, useState } from "react";
import useWindowSize from "../../hooks/useWindowSize";
import PageNav from "../mini-components/PageNav";
import { dataPurchases } from "../../assets/dataHelp";
import { fDiv } from "../../assets/helpers";
import FormRowPurchases from "./mini-components/FormRowPurchases";


/*
  1. Crear un slice que guarda una lista de cambios de valores en las filas
  2. 


*/

export interface PurchasesData {
  company: string,
  fecha: string,
  ruc: string,
  name: string,
  serie: string,
  numero: number,
  costo: number,
  pagado: string,
  opearcion: number,
  detraccion: string,
}

function Purchases() {
  //                 +                ABM/MEGA         FECHA        RUC           NOMBRE          SERIE         NUMERO          COSTO           ESTADO          OPERACION       DETRACCION
  const widths    = ['w-1/36'       ,'w-2/36'       ,'w-4/36'     ,'w-4/36'     ,'w-6/36'       ,'w-3/36'     ,'w-4/36'       ,'w-3/36'       ,'w-3/36'       ,'w-3/36'       ,'w-3/36'       ]
  const minWidths = ['min-w-12'     ,'min-w-12'     ,'min-w-12'   ,'min-w-12'   ,'min-w-12'     ,'min-w-12'   ,'min-w-12'     ,'min-w-12'     ,'min-w-12'     ,'min-w-12'     ,'min-w-12'     ]
  const aligns    = ['text-center'  ,'text-center'  ,'text-left'  ,'text-center','text-left'    ,'text-center','text-center'  ,'text-center'  ,'text-center'  ,'text-center'  ,'text-center'  ]
  const {height} =  useWindowSize()

  const [purchaseInfo, setPurchaseInfo] = useState([...dataPurchases]);

  const handleClick = (e:FormEvent) => {
    e.preventDefault()

  }

  return (
    <div className="flex-grow flex flex-col justify-start overflow-x-scroll px-4 pt-4 w-full">

    {/* __________________ TABLE HEADER  */}

      <form action=""
        className="flex justify-start items-center border-b-2 rounded-t-xl border-stone-950 bg-neutral-700">
        
        <button 
          onClick={handleClick}
          className={`transition-all bg-transparent flex items-center justify-center w-1/36
            ${widths[0]} ${minWidths[0]}`}>

            <p className={`text-center text-white text-3xl font-extrabold mb-1 hover:scale-125 h-full`}>+</p>

        </button>
        
        <input 
          type="EMPRESA"
          placeholder="ABM"
          className={`text-center p-1 bg-transparent placeholder:text-neutral-100 outline-none border-l-2 text-white font-bold   
            ${widths[1]} ${minWidths[1]}`}/>
        
        <input 
          type="text"
          placeholder="FECHA"
          className={`text-center p-1 bg-transparent placeholder:text-neutral-100 outline-none border-l-2 text-white font-bold   
            ${widths[2]} ${minWidths[2]}`}/>
        
        <input 
          type="text"
          placeholder="RUC"
          className={`text-center p-1 bg-transparent placeholder:text-neutral-100 outline-none border-l-2 text-white font-bold   
            ${widths[3]} ${minWidths[3]}`}/>
        
        <input 
          type="text"
          placeholder="NOMBRE"
          className={`text-center p-1 bg-transparent placeholder:text-neutral-100 outline-none border-l-2 text-white font-bold   
            ${widths[4]} ${minWidths[4]}`}/>
        
        <input 
          type="text"
          placeholder="SERIE"
          className={`text-center p-1 bg-transparent placeholder:text-neutral-100 outline-none border-l-2 text-white font-bold   
            ${widths[5]} ${minWidths[5]}`}/>
        
        <input 
          type="text"
          placeholder="NÚMERO"
          className={`text-center p-1 bg-transparent placeholder:text-neutral-100 outline-none border-l-2 text-white font-bold   
            ${widths[6]} ${minWidths[6]}`}/>
        
        <input 
          type="text"
          placeholder="COSTO"
          className={`text-center p-1 bg-transparent placeholder:text-neutral-100 outline-none border-l-2 text-white font-bold   
            ${widths[7]} ${minWidths[7]}`}/>
        
        <input 
          type="text"
          placeholder="ESTADO"
          className={`text-center p-1 bg-transparent placeholder:text-neutral-100 outline-none border-l-2 text-white font-bold   
            ${widths[8]} ${minWidths[8]}`}/>
        
        <input 
          type="text"
          placeholder="OPERACIÓN"
          className={`text-center p-1 bg-transparent placeholder:text-neutral-100 outline-none border-l-2 text-white font-bold   
            ${widths[9]} ${minWidths[9]}`}/>
        
        <input 
          type="text"
          placeholder="DETRACCIÓN"
          className={`text-center p-1 bg-transparent placeholder:text-neutral-100 outline-none border-l-2 text-white font-bold   
            ${widths[10]} ${minWidths[10]}`}/>

      </form>

    {/* __________________ TABLE INFO */}

    <div>{

      purchaseInfo.slice(0,fDiv(height,32)-6).map((purchase,ix)=>
        <FormRowPurchases
          key={ix+'_formRow'}
          purchase={purchase}
          widths={widths}
          minWidths={minWidths}
          align={aligns}
          />
        )

      }
    </div>
    
    {/* __________________ TABLE PAGINATION */}
    
      <div className="flex-grow flex items-end justify-center mb-4" >

        <PageNav pages={10}/>  

      </div>
    </div>
  );
}


export default Purchases;
/*
    fecha
    ruc -> F
    nombre -> F
    numero -> F
    serie -> F
    costo 
    estado -> F
    pagado -> F
    detraccion -> F
    descripcion
    empresa (abm o mega) -> F
*/