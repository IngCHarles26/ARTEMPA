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
import { tableComponent } from "../../assets/styles";


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

/*
  notas
    cambiar la detraccion a tipo booleano y na
    
*/

function Purchases() {
  //                 +             ABM/MEGA       FECHA        RUC           NOMBRE       SERIE         NUMERO          COSTO           PAGO          OPERACION       DETRACCION
  const widths    = ['w-1/48'     ,'w-3/48'     ,'w-4/48'     ,'w-5/48'     ,'w-9/48'   ,'w-3/48'     ,'w-5/48'       ,'w-4/48'       ,'w-3/48'       ,'w-5/48'       ,'w-5/48'       ]
  const minWidths = ['min-w-10'   ,'min-w-16'   ,'min-w-32'   ,'min-w-36'   ,'min-w-60' ,'min-w-16'   ,'min-w-28'     ,'min-w-24'     ,'min-w-16'     ,'min-w-28'     ,'min-w-32'     ]
  const aligns    = ['text-center','text-center','text-center','text-center','text-left','text-center','text-center'  ,'text-right'  ,'text-center'  ,'text-center'  ,'text-center'  ]
  const {height} =  useWindowSize()

  const [purchaseInfo, setPurchaseInfo] = useState([...dataPurchases]);

  const handleClick = (e:FormEvent) => {
    e.preventDefault()

  }

  return (
    <div className={`${tableComponent.div} `}>

    {/* __________________ TABLE HEADER  */}

      <form action=""
        className={`${tableComponent.form}`}>
        
        <button 
          onClick={handleClick}
          className={`${tableComponent.button}
            ${widths[0]} ${minWidths[0]}`}>

            <p className={`text-center text-white text-3xl hover:font-extrabold h-full `}>+</p>

        </button>
        
        <input 
          type="EMPRESA"
          placeholder="ABM"
          className={`${tableComponent.input}    
            ${widths[1]} ${minWidths[1]}`}/>
        
        <input 
          type="text"
          placeholder="FECHA"
          className={`${tableComponent.input}    
            ${widths[2]} ${minWidths[2]}`}/>
        
        <input 
          type="text"
          placeholder="RUC"
          className={`${tableComponent.input}    
            ${widths[3]} ${minWidths[3]}`}/>
        
        <input 
          type="text"
          placeholder="NOMBRE"
          className={`${tableComponent.input}    
            ${widths[4]} ${minWidths[4]}`}/>
        
        <input 
          type="text"
          placeholder="SERIE"
          className={`${tableComponent.input}    
            ${widths[5]} ${minWidths[5]}`}/>
        
        <input 
          type="text"
          placeholder="NÚMERO"
          className={`${tableComponent.input}    
            ${widths[6]} ${minWidths[6]}`}/>
        
        <input 
          type="text"
          placeholder="COSTO"
          className={`${tableComponent.input}    
            ${widths[7]} ${minWidths[7]}`}/>
        
        <input 
          type="text"
          placeholder="PAGO"
          className={`${tableComponent.input}    
            ${widths[8]} ${minWidths[8]}`}/>
        
        <input 
          type="text"
          placeholder="OPERACIÓN"
          className={`${tableComponent.input}    
            ${widths[9]} ${minWidths[9]}`}/>
        
        <input 
          type="text"
          placeholder="DETRACCIÓN"
          className={`${tableComponent.input}    
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
    
      <div className="fixed bottom-4 right-1/4 md:right-1/2" >

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