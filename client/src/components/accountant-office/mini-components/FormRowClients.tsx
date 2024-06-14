import { ChangeEvent, FormEvent, useEffect, useRef, useState } from "react";
import { ClientsData } from "../../../types";

interface Props {
  client: ClientsData,
  widths: string[],
  minWidths: string[],
  align: string[],
}

function FormRowClients(props:Props) {
  const {client,widths:w,minWidths:mW,align:al} = props
  const [editable, setEditable] = useState(false);
  const [clientInfo, setClientInfo] = useState({...client});
  const rowRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (editable && rowRef.current) {
      rowRef.current.focus();
    }
  }, [editable]);

  const handleEdit = (e:FormEvent)=>{
    e.preventDefault();
    setEditable(!editable)
  }

  const handleChange = (e:ChangeEvent<HTMLInputElement>)=>{
    const {name,value} = e.target
    setClientInfo((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }

  return (
    <form 
      className={`border-gray-200 border-b-2 flex
        ${(!editable?'bg-neutral-300':'bg-neutral-50')}`}>
        
        <button
          onClick={handleEdit}
          className={`
            ${w[0]} ${mW[0]} ${al[0]} ${(!editable?'bg-neutral-300':'bg-neutral-50')}`}>

            <p className={`hover:scale-125 transition-all`}>
              {editable ? '💾' : '✏'}
            </p>
        </button>
        
        <input 
          type="text"
          name='ruc'
          ref={rowRef}
          value={clientInfo.ruc}
          disabled={!editable}
          onChange={handleChange}
          className={`py-1 px-3 cursor-text input-no-spinner
            ${w[1]} ${mW[1]} ${al[1]} ${(!editable?'bg-neutral-300':'bg-neutral-50')} `}
          />
        
        <input 
          type="string"
          name='name'
          value={clientInfo.name}
          disabled={!editable}
          onChange={handleChange}
          className={`py-1 px-3 cursor-text 
            ${w[2]} ${mW[2]} ${al[2]} ${(!editable?'bg-neutral-300':'bg-neutral-50')} `}
          />
        
        <input 
          type="string"
          name='address'
          value={clientInfo.address}
          disabled={!editable}
          onChange={handleChange}
          className={`py-1 px-3 cursor-text
            ${w[3]} ${mW[3]} ${al[3]} ${(!editable?'bg-neutral-300':'bg-neutral-50')} `}
          />

    </form>
  );
}

export default FormRowClients;