import useWindowSize from "../../hooks/useWindowSize";
import { FormEvent, useState } from "react";
import { suppliersData } from "../../assets/dataHelp";
import FormRow from "../mini-components/FormRow";
import PageNav from "../mini-components/PageNav";
import { fDiv } from "../../assets/helpers";


export interface SupplierData {
  ruc: string,
  name: string,
  address: string,
  phone: string,
  email: string,
  bank: string,
}

function SuppliersData() {

  const widths = ['1/24','3/24','4/24','5/24','3/24','4/24','4/24']
  const minWidths = [12,32,52,64,32,52,52]
  const aligns = ['center','center','left','left','center','left','center']
  const {height} =  useWindowSize()


  const [suppliersInfo, setSuppliersInfo] = useState([...suppliersData]);

  const handleClick = (e:FormEvent)=>{
    e.preventDefault()
    const newClient = {ruc:'',name:'',address:'',phone:'',email:'',bank:''}
    // const newList = [newClient,...clientsData]
    // console.log(newList)

    setSuppliersInfo([...suppliersInfo,newClient])
  }

  return (
    <div className="flex-grow flex flex-col justify-start overflow-x-scroll px-4 pt-4">
      <form 
        className="flex justify-start items-center border-b-2 rounded-t-xl border-stone-950 bg-neutral-700">
        <button 
            onClick={handleClick}
          className="bg-transparent text-neutral-300 text-center text-xl rounded-tl-xl hover:scale-125 transition-all w-1/24 min-w-12">➕</button>
        <input 
          type="text" 
          placeholder="RUC"
          className="text-center p-2 bg-neutral-700 placeholder:text-neutral-00 outline-none border-l-2 text-white font-bold w-3/24 min-w-32"/>
        <input 
          type="text" 
          placeholder="RAZON SOCIAL"
          className=" text-center p-2 bg-neutral-700 placeholder:text-neutral-00 outline-none border-l-2 text-white font-bold w-4/24 min-w-52"/>
        <input 
          type="text" 
          placeholder="DIRECCIÓN"
          className="text-center p-2 bg-neutral-700 placeholder:text-neutral-00 outline-none border-l-2 text-white font-bold w-5/24 min-w-64"/>
        <input 
          type="text" 
          placeholder="TELÉFONO"
          className=" text-center p-2 bg-neutral-700 placeholder:text-neutral-00 outline-none border-l-2 text-white font-bold w-3/24 min-w-32"/>
        <input 
          type="text" 
          placeholder="EMAIL"
          className="text-center p-2 bg-neutral-700 placeholder:text-neutral-00 outline-none border-l-2 text-white font-bold w-4/24 min-w-52"/>
        <input 
          type="text" 
          placeholder="PAGO"
          className="text-center p-2 bg-neutral-700 placeholder:text-neutral-00 outline-none border-l-2 text-white font-bold rounded-tr-xl w-4/24 min-w-52"/>
      </form>
      <div>{
        suppliersInfo.slice(0,fDiv(height,32)-6).map((client,ix)=>
          <FormRow 
            key={ix+'_formRow'}
            value={client}
            widths={widths}
            minWidths={minWidths}
            align={aligns}
          />
        )}
      </div>
      <div className="flex-grow flex items-end justify-center mb-4" >
        <PageNav 
            pages={10}
          />  
      </div>
    </div>
  );
}

export default SuppliersData;