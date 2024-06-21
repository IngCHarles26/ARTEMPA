import { FormEvent } from "react";
import { fDiv } from "../../assets/helpers";
import useWindowSize from "../../hooks/useWindowSize";
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
  //                  +               RUC             RAZON         DIRECCION       ABM             MEGA
  const widths    = [ 'w-1/12'      ,'w-2/12'       ,'w-3/12'     ,'w-4/12'    , 'w-1/12'       , 'w-1/12'      ]
  const minWidths = [ 'min-w-14'    ,'min-w-32'     ,'min-w-52'   ,'min-w-64'  , 'min-w-14'     , 'min-w-14'    ]
  const aligns    = [ 'text-center' ,'text-center'  ,'text-left'  ,'text-left' , 'text-center'  , 'text-center' ]
  const {height} =  useWindowSize()

  const clientsInfo = useSelector((st:TypeStore)=>st.clients);
  const dispatch = useDispatch();


  const handleClick = (e:FormEvent)=>{
    e.preventDefault()
    const newClient = {ruc:' ',name:' ',address:' '}
    dispatch(addNewClient(newClient))
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
          placeholder="RUC"
          className={`text-center p-2 bg-neutral-700 placeholder:text-white outline-none border-l-2 text-neutral-200 uppercase font-bold h-full hover:opacity-90 
            ${widths[1]} ${minWidths[1]} `}/>
        
        <input 
          type="text" 
          placeholder="RAZON SOCIAL"
          className={`text-center p-2 bg-neutral-700 placeholder:text-white outline-none border-l-2 text-neutral-200 uppercase font-bold h-full hover:opacity-90  
            ${widths[2]} ${minWidths[2]} `}/>

        <input 
          type="text" 
          placeholder="DIRECCIÓN"
          className={`text-center p-2 bg-neutral-700 placeholder:text-white outline-none border-l-2 text-neutral-200 uppercase font-bold h-full hover:opacity-90 
            ${widths[3]} ${minWidths[3]} `}/>
        <input 
          type="text" 
          placeholder="ABM"
          className={`text-center p-2 bg-neutral-700 placeholder:text-white outline-none border-l-2 text-neutral-200 uppercase font-bold h-full hover:opacity-90 
            ${widths[4]} ${minWidths[4]} `}/>
        <input 
          type="text" 
          placeholder="MEGA"
          className={`text-center p-2 bg-neutral-700 placeholder:text-white outline-none border-l-2 text-neutral-200 uppercase font-bold h-full hover:opacity-90
            ${widths[5]} ${minWidths[5]} `}/>

      </form>

    {/* _______________ TABLE CONTENT  */}

      <div className="">{

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

      <div className="fixed bottom-4 right-1/4 md:right-1/2" >

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