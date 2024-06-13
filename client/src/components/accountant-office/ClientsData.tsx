import { FormEvent, useState } from "react";
import { clientsDirection } from "../../assets/dataHelp";
import { fDiv } from "../../assets/helpers";
import useWindowSize from "../../hooks/useWindowSize";
import FormRow from "../mini-components/FormRow";
import PageNav from "../mini-components/PageNav";
import { useSelector } from "react-redux";
import { TypeStore } from "../../redux/store";
import { useDispatch } from "react-redux";
import { addNewClient } from "../../redux/slices/clientsSlice";

export interface ClientData {
  ruc: string,
  name: string,
  address: string,
}

function ClientsData() {
  const widths = ['1/12','2/12','3/12','6/12']
  const minWidths = [12,32,80,96]
  const aligns = ['center','center','left','left']
  const {height} =  useWindowSize()

  const clientsInfo = useSelector((st:TypeStore)=>st.clients);
  const dispatch = useDispatch();

  const [clientsData, setClientsData] = useState([...clientsDirection]);

  const handleClick = (e:FormEvent)=>{
    e.preventDefault()
    const newClient = {ruc:' ',name:' ',address:' '}
    // const newList = [newClient,...clientsData]
    // console.log(newList)

    dispatch(addNewClient(newClient))
    setClientsData([...clientsData,newClient])
  }

  // console.log(clientsInfo)

  return (
    <div className="flex-grow flex flex-col justify-start overflow-x-scroll px-4 pt-4">
      <form 
        className="flex justify-start items-center  border-b-2 rounded-t-xl border-stone-950 bg-neutral-700">
        <button 
            onClick={handleClick}
          className="w-1/12 min-w-12 bg-transparent text-neutral-300 text-center text-xl rounded-tl-xl hover:scale-125 transition-all">➕</button>
        <input 
          type="text" 
          placeholder="RUC"
          className="w-2/12 text-center p-2 min-w-32 bg-neutral-700 placeholder:text-neutral-00 outline-none border-l-2 text-white font-bold"/>
        <input 
          type="text" 
          placeholder="RAZON SOCIAL"
          className="w-3/12 text-center p-2 min-w-80 bg-neutral-700 placeholder:text-neutral-00 outline-none border-l-2 text-white font-bold"/>
        <input 
          type="text" 
          placeholder="DIRECCIÓN"
          className="w-6/12 text-center p-2 min-w-96 bg-neutral-700 placeholder:text-neutral-00 outline-none border-l-2 text-white font-bold rounded-tr-xl"/>
      </form>
      <div>{
        clientsInfo.slice(0,fDiv(height,32)-6).map((client,ix)=>
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