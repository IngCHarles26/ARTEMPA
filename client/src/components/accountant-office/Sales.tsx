import { FormEvent } from "react";
import PageNav from "../mini-components/PageNav";
import { tableComponent } from "../../assets/styles";
import useWindowSize from "../../hooks/useWindowSize";
import { useSelector } from "react-redux";
import { TypeStore } from "../../redux/store";
import FormRowSales from "./mini-components/FormRowSales";
import { fDiv } from "../../assets/helpers";

function Sales() {
  //                   +                  ABM/MEGA        FECHA              SERIE             NUMERO            OT                 CLIENTE            OS/OC              IMPORTE             CREDITO           VENCIMIENTO         MONTO             N° OPERACION    DETRACCCION         PAGO DETRACCION
  const widths    = [ 
    'min-w-10 md:w-1/48' ,  // +
    'min-w-16 md:w-3/48' ,  // COMPANY
    'min-w-32 md:w-4/48' ,  // FECHA
    'min-w-16 md:w-3/48' ,  // SERIE
    'min-w-28 md:w-4/48' ,  // NUMERO
    'min-w-24 md:w-2/48' ,  // OT
    'min-w-52 md:w-7/48' ,  // CLIENTE
    'min-w-28 md:w-3/48' ,  // OS
    'min-w-24 md:w-3/48' ,  // IMPORTE
    'min-w-16 md:w-2/48' ,  // CREDITO
    'min-w-32 md:w-4/48' ,  // VENCIMIENTO
    'min-w-24 md:w-3/48' ,  // MONTO
    'min-w-28 md:w-3/48' ,  // NUMERO OPERACION
    'min-w-24 md:w-3/48' ,  // DETRACCION
    'min-w-24 md:w-3/48' ,  // NUMERO OPERACION DETR
  ]
  const aligns    = [
    'text-center'    ,  // +
    'text-center'    ,  // COMPANY
    'text-center'    ,  // FECHA
    'text-center'    ,  // SERIE
    'text-center'    ,  // NUMERO
    'text-center'    ,  // OT
    'text-left'      ,  // CLIENTE
    'text-center'    ,  // OS
    'text-right'     ,  // IMPORTE
    'text-center'    ,  // CREDITO
    'text-center'    ,  // VENCIMIENTO
    'text-right'     ,  // MONTO
    'text-center'    ,  // NUMERO OPERACION
    'text-right'     ,  // DETRACCION
    'text-center'    ,  // NUMERO OPERACION DETR
  ]

  const {height} = useWindowSize()
  const salesInfo = useSelector( (st:TypeStore) => st.sales)
  

  const handleClick = (e:FormEvent) => {
    e.preventDefault()
    
  }

  /*
  const aligns = [
    'text-center', // habilitado
    'text-center', // dni
    'text-center', // user name
    'text-center', // name
    'text-center', // tipo
    'text-center', // ultima sesion
    'text-center', // telefono
    'text-center', // email
    'text-center', // direccion
    'text-center', // persona contacto
    'text-center', // telefono pc
  ]

  */
  
  return (
    <div className={`${tableComponent.div} `}>

    {/* _______________ TABLE HEADER */}

      <form 
        className={`${tableComponent.form}`}>
        
        <input 
          type="string"
          placeholder=""
          disabled={true}
          className={`${tableComponent.msg}    
            ${widths[0]}`}/>

        <input 
          type="text" 
          placeholder="ABM"
          className={`${tableComponent.input} 
            ${widths[1]} `}/>

        <input 
          type="text" 
          placeholder="FECHA"
          className={`${tableComponent.input} 
            ${widths[2]} `}/>
        
        <input 
          type="text" 
          placeholder="SERIE"
          className={`${tableComponent.input}  
            ${widths[3]} `}/>

        <input 
          type="text" 
          placeholder="NUMERO"
          className={`${tableComponent.input} 
            ${widths[4]} `}/>
        <input 
          type="text" 
          placeholder="OT"
          className={`${tableComponent.input} 
            ${widths[5]} `}/>
        <input 
          type="text" 
          placeholder="CLIENTE"
          className={`${tableComponent.input} 
            ${widths[6]} `}/>
        <input 
          type="text" 
          placeholder="OS"
          className={`${tableComponent.input}
            ${widths[7]} `}/>
        <input 
          type="text" 
          placeholder="IMPORTE"
          className={`${tableComponent.input}
            ${widths[8]} `}/>
        <input 
          type="text" 
          placeholder="DIAS"
          className={`${tableComponent.input}
            ${widths[9]} `}/>
        <input 
          type="text" 
          placeholder="LIMITE"
          className={`${tableComponent.input}
            ${widths[10]} `}/>
        <input 
          type="text" 
          placeholder="MONTO"
          className={`${tableComponent.input}
            ${widths[11]} `}/>
        <input 
          type="text" 
          placeholder="N° OP"
          className={`${tableComponent.input}
            ${widths[12]} `}/>
        <input 
          type="text" 
          placeholder="DET."
          className={`${tableComponent.input}
            ${widths[13]} `}/>
        <input 
          type="text" 
          placeholder="N° OP"
          className={`${tableComponent.input}
            ${widths[14]} `}/>

      </form>

    {/* _______________ TABLE CONTENT  */}

      <div className={`${tableComponent.formContainer}`}>{

        salesInfo.slice(0,fDiv(height,32)-6).map((sale,ix)=>
          <FormRowSales 
            key={ix+'_formRowsales'}
            sale={sale}
            widths={widths}
            align={aligns}
          />)
          
        }
      </div>

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