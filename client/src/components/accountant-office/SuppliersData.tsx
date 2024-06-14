import useWindowSize from "../../hooks/useWindowSize";
import { FormEvent, useState } from "react";
import { dataSuppliers } from "../../assets/dataHelp";
import PageNav from "../mini-components/PageNav";
import { fDiv } from "../../assets/helpers";
import FormRowSuppliers from "./mini-components/FormRowSuppliers";


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
  const widths    = [ 'w-1/24'        ,'w-3/24'       ,'w-5/24'     ,'w-5/24'     ,'w-2/24'       ,'w-4/24'     ,'w-4/24'       ]
  const minWidths = [ 'min-w-14'      ,'min-w-32'     ,'min-w-52'   ,'min-w-64'   ,'min-w-32'     ,'min-w-52'   ,'min-w-52'     ]
  const aligns    = [ 'text-center'   ,'text-center'  ,'text-left'  ,'text-left'  ,'text-center'  ,'text-left'  ,'text-center'  ]
  const {height} =  useWindowSize()


  const [suppliersInfo, setSuppliersInfo] = useState([...dataSuppliers]);

  const handleClick = (e:FormEvent)=>{
    e.preventDefault()
    const newClient =  { ruc: 0, name: '', address: '',  phone: 0, email: '', bankAccount: ''}

    setSuppliersInfo([...suppliersInfo,newClient])
  }

  return (
    <div className="flex-grow flex flex-col justify-start overflow-x-scroll px-4 pt-4 min-w-16">

    {/* __________________ TABLE HEADER */}

      <form 
        className="flex justify-start items-center border-b-2 rounded-t-xl border-stone-950 bg-neutral-700">

        <button 
          onClick={handleClick}
          className={`transition-all bg-transparent flex items-center justify-center 
            ${widths[0]} ${minWidths[0]}`}>

            <p className={`text-center text-white text-4xl font-extrabold mb-1 hover:scale-125 h-full  `}>+</p>

        </button>

        <input 
          type="text" 
          placeholder="RUC"
          className={`text-center p-2 bg-transparent placeholder:text-white outline-none border-l-2 text-neutral-200 uppercase font-bold
            ${widths[1]} ${minWidths[1]}`}/>
        
        <input 
          type="text" 
          placeholder="RAZON SOCIAL"
          className={`text-center p-2 bg-transparent placeholder:text-white outline-none border-l-2 text-neutral-200 uppercase font-bold 
            ${widths[2]} ${minWidths[2]}`}/>
        
        <input 
          type="text" 
          placeholder="DIRECCIÓN"
          className={`text-center p-2 bg-transparent placeholder:text-white outline-none border-l-2 text-neutral-200 uppercase font-bold 
            ${widths[3]} ${minWidths[3]}`}/>
        
        <input 
          type="text" 
          placeholder="TELÉFONO"
          className={`text-center p-2 bg-transparent placeholder:text-white outline-none border-l-2 text-neutral-200 uppercase font-bold 
            ${widths[4]} ${minWidths[4]}`}/>
        
        <input 
          type="text" 
          placeholder="EMAIL"
          className={`text-center p-2 bg-transparent placeholder:text-white outline-none border-l-2 text-neutral-200 uppercase font-bold 
            ${widths[5]} ${minWidths[5]}`}/>
        
        <input 
          type="text" 
          placeholder="CUENTA BANCO"
          className={`text-center p-2 bg-transparent placeholder:text-white outline-none border-l-2 text-white font-bold rounded-tr-xl 
            ${widths[6]} ${minWidths[6]}`}/>
      
      </form>
      

    {/*__________________ TABLE INFO  */}

      <div>{

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

      <div className="flex-grow flex items-end justify-center mb-4" >

        <PageNav pages={10}/>  

      </div>

    </div>
  );
}

export default SuppliersData;