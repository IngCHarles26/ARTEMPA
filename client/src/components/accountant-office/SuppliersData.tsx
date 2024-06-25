import useWindowSize from "../../hooks/useWindowSize";
import { FormEvent, useState } from "react";
import { dataSuppliers } from "../../assets/dataHelp";
import PageNav from "../mini-components/PageNav";
import { fDiv } from "../../assets/helpers";
import FormRowSuppliers from "./mini-components/FormRowSuppliers";
import { tableComponent } from "../../assets/styles";


export interface SupplierData {
  ruc: string,
  name: string,
  address: string,
  phone: string,
  email: string,
  bank: string,
}

function SuppliersData() {
  //                  +                 RUC             RAZON         DIRECCION     TELEFONO        EMAIL         PAGO
  const widths    = [ 
    'min-w-10 md:w-1/48'   , // +
    'min-w-36 md:w-5/48'   , // RUC
    'min-w-64 md:w-10/48'  , // RAZON
    'min-w-64 md:w-9/48'   , // DIRECCION
    'min-w-32 md:w-6/48'   , // TELEFONO
    'min-w-64 md:w-9/48'   , // EMAIL
    'min-w-52 md:w-8/48'   , // PAGO
  ]
  const minWidths = [ 'min--10'      ,'min--36'     ,'min--60'   ,'min--64'   ,'min--32'     ,'min--52'   ,'min--52'     ]
  const aligns    = [ 
    'text-center' , // +
    'text-center' , // RUC
    'text-left'   , // RAZON
    'text-left'   , // DIRECCION
    'text-center' , // TELEFONO
    'text-left'   , // EMAIL
    'text-center' , // PAGO
  ]
  const {height} =  useWindowSize()


  const [suppliersInfo, setSuppliersInfo] = useState([...dataSuppliers]);

  const handleClick = (e:FormEvent)=>{
    e.preventDefault()
    const newClient =  { ruc: 0, name: '', address: '',  phone: 0, email: '', bankAccount: ''}

    setSuppliersInfo([...suppliersInfo,newClient])
  }

  return (
    <div className={`${tableComponent.div} `}>

    {/* __________________ TABLE HEADER */}

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
          placeholder="RUC"
          className={`${tableComponent.input}
            ${widths[1]}`}/>
        
        <input 
          type="text" 
          placeholder="RAZON SOCIAL"
          className={`${tableComponent.input}
            ${widths[2]}`}/>
        
        <input 
          type="text" 
          placeholder="DIRECCIÓN"
          className={`${tableComponent.input}
            ${widths[3]}`}/>
        
        <input 
          type="text" 
          placeholder="TELÉFONO"
          className={`${tableComponent.input}
            ${widths[4]}`}/>
        
        <input 
          type="text" 
          placeholder="EMAIL"
          className={`${tableComponent.input}
            ${widths[5]}`}/>
        
        <input 
          type="text" 
          placeholder="CUENTA BANCO"
          className={`${tableComponent.input}
            ${widths[6]}`}/>
      
      </form>
      

    {/*__________________ TABLE INFO  */}

      <div className="flex flex-col">{

        suppliersInfo.slice(0,fDiv(height,32)-6).map((supplier,ix)=>
          <FormRowSuppliers 
            key={ix+'_formRowSupplier'}
            supplier={supplier}
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

export default SuppliersData;