import { FormEvent } from "react";
import { fDiv } from "../../assets/helpers";
import useWindowSize from "../../hooks/useWindowSize";
import PageNav from "../mini-components/PageNav";
import { useSelector } from "react-redux";
import { TypeStore } from "../../redux/store";
import { useDispatch } from "react-redux";
import { addNewClient } from "../../redux/slices/clientsSlice";
import FormRowClients from "./mini-components/FormRowClients";
import { tableComponent } from "../../assets/styles";

export interface ClientData {
  ruc: string,
  name: string,
  address: string,
}

function ClientsData() {
  //                  +                   RUC                 RAZON               DIRECCION           ABM               MEGA
  const widths    = [ 
    'min-w-10 md:w-1/48'  , // +
    'min-w-32 md:w-5/48'  , // RUC
    'min-w-72 md:w-18/48' , // RAZON
    'min-w-80 md:w-16/48' , // DIRECCION
    'min-w-14 md:w-4/48'  , // ABM
    'min-w-14 md:w-4/48'  , // MEGA
  ]
  const aligns    = [ 
    'text-center' , // + 
    'text-center' , // RUC
    'text-left'   , // RAZON
    'text-left'   , // DIRECCION 
    'text-center' , // ABM 
    'text-center' , // MEGA
  ]
  const minWidths = [ 'min--10'    ,'min--32'     ,'min--52'   ,'min--64'  , 'min--14'     , 'min--14'    ]
  const {height} =  useWindowSize()

  const clientsInfo = useSelector((st:TypeStore)=>st.clients);
  const dispatch = useDispatch();


  const handleClick = (e:FormEvent)=>{
    e.preventDefault()
    const newClient = {ruc:' ',name:' ',address:' '}
    dispatch(addNewClient(newClient))
  }

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
          placeholder="RUC"
          className={`${tableComponent.input} 
            ${widths[1]} ${minWidths[1]} `}/>
        
        <input 
          type="text" 
          placeholder="RAZON SOCIAL"
          className={`${tableComponent.input}  
            ${widths[2]} ${minWidths[2]} `}/>

        <input 
          type="text" 
          placeholder="DIRECCIÓN"
          className={`${tableComponent.input} 
            ${widths[3]} ${minWidths[3]} `}/>
        <input 
          type="text" 
          placeholder="ABM"
          className={`${tableComponent.input} 
            ${widths[4]} ${minWidths[4]} `}/>
        <input 
          type="text" 
          placeholder="MEGA"
          className={`${tableComponent.input}
            ${widths[5]} ${minWidths[5]} `}/>

      </form>

    {/* _______________ TABLE CONTENT  */}

      <div className="flex flex-col">{

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