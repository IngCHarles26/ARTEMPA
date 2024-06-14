import { FormEvent, useRef, useState } from "react";
import { clientsDirection } from "../../assets/dataHelp";
import { fDiv } from "../../assets/helpers";
import useWindowSize from "../../hooks/useWindowSize";
import FormRow from "../mini-components/FormRow";
import PageNav from "../mini-components/PageNav";
import { useSelector } from "react-redux";
import { TypeStore } from "../../redux/store";
import { useDispatch } from "react-redux";
import { addNewClient } from "../../redux/slices/clientsSlice";
import FormRowClients from "./mini-components/FormRowClients";

export interface ClientData {
  ruc: string,
  name: string,
  address: string,
}

function ClientsData() {
  //                  +               RUC             RAZON         DIRECCION
  const widths    = [ 'w-1/12'      ,'w-2/12'       ,'w-3/12'     ,'w-6/12'     ]
  const minWidths = [ 'min-w-14'    ,'min-w-32'     ,'min-w-52'   ,'min-w-64'   ]
  const aligns    = [ 'text-center' ,'text-center'  ,'text-left'  ,'text-left'  ]
  const {height} =  useWindowSize()

  const clientsInfo = useSelector((st:TypeStore)=>st.clients);
  const dispatch = useDispatch();


  const handleClick = (e:FormEvent)=>{
    e.preventDefault()
    const newClient = {ruc:' ',name:' ',address:' '}
    dispatch(addNewClient(newClient))
  }

  return (
    <div className="flex-grow flex flex-col justify-start overflow-x-scroll px-4 pt-4 ">

    {/* _______________ TABLE HEADER */}

      <form 
        className={`flex justify-start items-center w-auto`}>
        
        <button 
          onClick={handleClick}
          className={`transition-all bg-neutral-700 flex items-center justify-center  rounded-tl-lg
            ${widths[0]} ${minWidths[0]} `}>

            <p className={`text-center text-white text-3xl font-extrabold mb-1 hover:scale-125 `}>+</p>

          </button>

        <input 
          type="text" 
          placeholder="RUC"
          className={`text-center text-white placeholder:text-neutral-100 font-bold p-2 bg-neutral-700  outline-none border-l-2
            ${widths[1]} ${minWidths[1]} `}/>
        
        <input 
          type="text" 
          placeholder="RAZON SOCIAL"
          className={`text-center text-white placeholder:text-neutral-100 font-bold p-2 bg-neutral-700  outline-none border-l-2  
            ${widths[2]} ${minWidths[2]} `}/>

        <input 
          type="text" 
          placeholder="DIRECCIÓN"
          className={`text-center text-white placeholder:text-neutral-100 font-bold p-2 bg-neutral-700  outline-none border-l-2 rounded-tr-lg
            ${widths[3]} ${minWidths[3]} `}/>

      </form>

    {/* _______________ TABLE CONTENT  */}

      <div className="rounded-b-md mt-1">{

        clientsInfo.slice(0,fDiv(height,32)-6).map((client,ix)=>
          <FormRowClients 
            key={ix+'_formRowClient'}
            client={client}
            widths={widths}
            minWidths={minWidths}
            align={aligns}
          />

        )}
      </div>

    {/* _______________ PAGINATION  */}

      <div className="flex-grow flex items-end justify-center mb-4" >

        <PageNav 
            pages={10}
          />  

      </div>

    </div>
  );
}

export default ClientsData;

/*
  heigh => 32
  header => 28 + 16 => 44
  paddigtable => 16 => 16
  title => 24 + 16  => 40

                  5   6   7   8
  hd        703   16  
  phone     938   24
  2k        1279  34
  fhd       917   23  

  5   hd
  6   2k phone fhd


*/