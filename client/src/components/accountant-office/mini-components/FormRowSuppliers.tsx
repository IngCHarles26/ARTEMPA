import { ChangeEvent, FormEvent, useEffect, useRef, useState } from "react";
import { SuppliersData } from "../../../types";



interface Props {
  supplier: SuppliersData,
  widths: string[],
  minWidths: string[],
  align: string[],
}

function FormRowSuppliers(props:Props) {
  const {supplier,widths:w,minWidths:mW,align:al} = props
  const [editable, setEditable] = useState(false);
  const [supplierInfo, setSupplierInfo] = useState({...supplier});
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
    setSupplierInfo((prevState) => ({
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
          value={supplierInfo.ruc}
          disabled={!editable}
          onChange={handleChange}
          className={`py-1 px-3 cursor-text input-no-spinner
            ${w[1]} ${mW[1]} ${al[1]} ${(!editable?'bg-neutral-300':'bg-neutral-50')} `}
          />
        
        <input 
          type="string"
          name='name'
          value={supplierInfo.name}
          disabled={!editable}
          onChange={handleChange}
          className={`py-1 px-3 cursor-text 
            ${w[2]} ${mW[2]} ${al[2]} ${(!editable?'bg-neutral-300':'bg-neutral-50')} `}
          />
        
        <input 
          type="string"
          name='address'
          value={supplierInfo.address}
          disabled={!editable}
          onChange={handleChange}
          className={`py-1 px-3 cursor-text
            ${w[3]} ${mW[3]} ${al[3]} ${(!editable?'bg-neutral-300':'bg-neutral-50')} `}
          />
        
        <input 
          type="string"
          name='phone'
          value={supplierInfo.phone}
          disabled={!editable}
          onChange={handleChange}
          className={`py-1 px-3 cursor-text
            ${w[4]} ${mW[4]} ${al[4]} ${(!editable?'bg-neutral-300':'bg-neutral-50')} `}
          />
        
        <input 
          type="string"
          name='email'
          value={supplierInfo.email}
          disabled={!editable}
          onChange={handleChange}
          className={`py-1 px-3 cursor-text
            ${w[5]} ${mW[5]} ${al[5]} ${(!editable?'bg-neutral-300':'bg-neutral-50')} `}
          />
        
        <input 
          type="string"
          name='bankAccount'
          value={supplierInfo.bankAccount}
          disabled={!editable}
          onChange={handleChange}
          className={`py-1 px-3 cursor-text
            ${w[6]} ${mW[6]} ${al[6]} ${(!editable?'bg-neutral-300':'bg-neutral-50')} `}
          />

    </form>
  );
}


export default FormRowSuppliers;