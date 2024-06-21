import { ChangeEvent, FormEvent, useEffect, useRef, useState } from "react";
import { SuppliersData } from "../../../types";
import useRowFocusForm from "../../../hooks/useRowFocusForm";
import useHandleChange from "../../../hooks/useHandleChange";

interface Props {
  supplier: SuppliersData,
  widths: string[],
  minWidths: string[],
  align: string[],
}

const selectedColor = 'bg-gray-300'
const unSelectedColor = 'bg-transparent'


function FormRowSuppliers(props:Props) {
  const {supplier,widths:w,minWidths:mW,align:al} = props
  const {rowRef,editable, setEditable} = useRowFocusForm()  
  const [hover, setHover] = useState(false);
  const [supplierInfo, handleChange] = useHandleChange<SuppliersData>({...supplier})

  const handleEdit = (e:FormEvent)=>{
    e.preventDefault();
    setEditable(!editable)
  }

  return (
    <form 
      className={`border-gray-500 border-b-2 flex hover:bg-slate-400
        ${(!editable? unSelectedColor : selectedColor)}`}>
        
        <button
          onClick={handleEdit}
          onMouseEnter={()=>setHover(true)}
          onMouseLeave={()=>setHover(false)}
          className={`relative 
            ${w[0]} ${mW[0]} ${al[0]} ${(!editable? unSelectedColor : selectedColor)}`}>

            <p className={`hover:scale-125 transition-all z-0`}>
              {editable ? '💾' : '✏'}
            </p>

            {hover && <p className="uppercase absolute left-3 -bottom-8 bg-slate-500 text-white px-2 py-1 rounded text-sm w-auto text-nowrap font-bold z-50">{editable ? 'guardar' : 'editar'}</p>}
        </button>
        
        <input 
          type="text"
          name='ruc'
          ref={rowRef}
          value={supplierInfo.ruc}
          disabled={!editable}
          onChange={handleChange}
          className={`py-1 px-3 input-no-spinner
            ${w[1]} ${mW[1]} ${al[1]} ${(!editable? unSelectedColor : selectedColor)} `}
          />
        
        <input 
          type="string"
          name='name'
          value={supplierInfo.name}
          disabled={!editable}
          onChange={handleChange}
          className={`py-1 px-3 
            ${w[2]} ${mW[2]} ${al[2]} ${(!editable? unSelectedColor : selectedColor)} `}
          />
        
        <input 
          type="string"
          name='address'
          value={supplierInfo.address}
          disabled={!editable}
          onChange={handleChange}
          className={`py-1 px-3
            ${w[3]} ${mW[3]} ${al[3]} ${(!editable? unSelectedColor : selectedColor)} `}
          />
        
        <input 
          type="string"
          name='phone'
          value={supplierInfo.phone}
          disabled={!editable}
          onChange={handleChange}
          className={`py-1 px-3
            ${w[4]} ${mW[4]} ${al[4]} ${(!editable? unSelectedColor : selectedColor)} `}
          />
        
        <input 
          type="string"
          name='email'
          value={supplierInfo.email}
          disabled={!editable}
          onChange={handleChange}
          className={`py-1 px-3
            ${w[5]} ${mW[5]} ${al[5]} ${(!editable? unSelectedColor : selectedColor)} `}
          />
        
        <input 
          type="string"
          name='bankAccount'
          value={supplierInfo.bankAccount}
          disabled={!editable}
          onChange={handleChange}
          className={`py-1 px-3
            ${w[6]} ${mW[6]} ${al[6]} ${(!editable? unSelectedColor : selectedColor)} `}
          />

    </form>
  );
}


export default FormRowSuppliers;