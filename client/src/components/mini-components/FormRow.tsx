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
  minWidths: number[],
  align: string[],
  endPoint?: string,
}

function FormRow(props:Props) {
  const {value,widths:w,minWidths:mW,align:al} = props
  const [editable, setEditable] = useState(false);
  const [rowInfo, setRowInfo] = useState({...value});
  const [prueba, setPrueba] = useState({...value});
  const [otraPrueba, setOtraPrueba] = useState();
  const firstRef = useRef<HTMLInputElement>(null)
  
  const handleEdit = (e:FormEvent)=>{
    e.preventDefault();
    setEditable(!editable)
  }

  console.log(value['ruc'],rowInfo['ruc'],prueba['ruc'])

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

  return (
    <form action=""
      className={" border-gray-200 flex border-b-2"}
    >
      <button
          onClick={handleEdit}
          className={infToTail(w[0],mW[0],al[0])+(!editable?'bg-zinc-300':'bg-slate-100') }>
            <p className=' hover:scale-125 transition-all'>
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
                className={infToTail(w[+ix+1],mW[+ix+1],al[+ix+1])+'py-1 px-3 '+(!editable?'bg-zinc-300':'bg-slate-100')}/>
            )
          }
          )
        }
    </form>
  );
}

export default FormRow;




//_____________________________________

function infToTail(w:string,mW:number,al:string){
  return `w-${w} min-w-${mW} text-${al} `
}