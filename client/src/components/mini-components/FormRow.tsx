/*
  REQUERIMIENTOS
  1. La cantidad de inputs debe ser variable
  2. los tamaños y sus minimos
*/


import { ChangeEvent, FormEvent, useEffect, useRef, useState } from "react";
import { ClientData } from "../accountant-office/ClientsData";

interface Props {
  value: ClientData,
  widths: string[],
  minWidths: any[],
  align: string[],
  endPoint?: string,
}

function FormRow(props:Props) {
  const {value,widths:w,minWidths:mW,align:al} = props
  const [editable, setEditable] = useState(false);
  const [rowInfo, setRowInfo] = useState({...value});
  const firstRef = useRef<HTMLInputElement>(null)
  
  const handleEdit = (e:FormEvent)=>{
    e.preventDefault();
    setEditable(!editable)
  }

  useEffect(() => {
    if (editable && firstRef.current) {
      firstRef.current.focus();
    }
  }, [editable]);

  const handleChange = (e:ChangeEvent<HTMLInputElement>)=>{
    const {name,value} = e.target
    setRowInfo((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }

  console.log(w,mW)

  return (
    <form action=""
      className={`border-gray-200 flex border-b-2 gap-1
        ${(!editable?'bg-neutral-300':'bg-neutral-50')}`}>

      <button
          onClick={handleEdit}
          className={` bg-transparent 
            ${w[0]} ${mW[0]} ${al[0]} ${(!editable?'bg-neutral-300':'bg-neutral-50')}`}>

            <p className={`hover:scale-125 transition-all`}>
              {editable ? '💾' : '✏'}
            </p>

      </button>

      {
        Object.keys(rowInfo).map((el,ix)=>{
          const val = el as keyof ClientData
          return(
            <input
              type="text"
              key={ix+'_input_type_'+value[val]} 
              name={el}
              value={rowInfo[val]}
              ref={ix==0?firstRef:undefined}
              disabled={!editable}
              onChange={handleChange}
              className={`py-1 px-3 cursor-text
                ${w[ix+1]} ${mW[ix+1]} ${al[ix+1]} ${(!editable?'bg-neutral-300':'bg-neutral-50')} `}
              />
          )})
        }

    </form>
  );
}

export default FormRow;
