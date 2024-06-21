import { ChangeEvent, FormEvent, useEffect, useRef, useState } from "react";
import { PurchasesData } from "../../../types";
import useRowFocusForm from "../../../hooks/useRowFocusForm";
import useHandleChange from "../../../hooks/useHandleChange";



interface Props {
  purchase: PurchasesData,
  widths: string[],
  minWidths: string[],
  align: string[],
}


const selectedColor = 'bg-gray-300'
const unSelectedColor = 'bg-transparent'

function FormRowPurchases(props:Props) {
  const {purchase,widths:w,minWidths:mW,align:al} = props
  const [purchaseInfo, setPurchaseInfo] = useState({...purchase});
  const [hover, setHover] = useState(false);
  const {rowRef,editable,setEditable} = useRowFocusForm()

  // const [purchasesInfo, handleChange] = useHandleChange<PurchasesData>({...purchase})

  const handleEdit = (e:FormEvent)=>{
    e.preventDefault();
    setEditable(!editable)
  }

  const handleChange = (e:ChangeEvent<HTMLInputElement>)=>{
    const {name,value} = e.target
    setPurchaseInfo((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }

  return (
    <form 
      className={`border-gray-500 border-b-2 flex 
        ${(!editable? unSelectedColor : selectedColor)} ${!editable && 'hover:bg-slate-400'}`}>
        
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
          name='company'
          value={purchaseInfo.company}
          disabled={!editable}
          onChange={handleChange}
          className={`py-0.5 px-1
            ${w[1]} ${mW[1]} ${al[1]} ${(!editable? unSelectedColor : selectedColor)} `}
          />
        
        <input 
          type="text"
          name='date'
          ref={rowRef}
          value={purchaseInfo.date}
          disabled={!editable}
          onChange={handleChange}
          className={`py-0.5 px-1 input-no-spinner
            ${w[2]} ${mW[2]} ${al[2]} ${(!editable? unSelectedColor : selectedColor)} `}
          />
        
        <input 
          type="text"
          name='ruc'
          value={purchaseInfo.ruc}
          disabled={!editable}
          onChange={handleChange}
          className={`py-0.5 px-1 
            ${w[3]} ${mW[3]} ${al[3]} ${(!editable? unSelectedColor : selectedColor)} `}
          />
        
        <input 
          type="string"
          name='name'
          value={purchaseInfo.name}
          disabled={!editable}
          onChange={handleChange}
          className={`py-0.5 px-1 
            ${w[4]} ${mW[4]} ${al[4]} ${(!editable? unSelectedColor : selectedColor)} `}
          />
        
        <input 
          type="string"
          name='serial'
          value={purchaseInfo.serial}
          disabled={!editable}
          onChange={handleChange}
          className={`py-0.5 px-1 cursor-text
            ${w[5]} ${mW[5]} ${al[5]} ${(!editable? unSelectedColor : selectedColor)} `}
          />
        
        <input 
          type="string"
          name='number'
          value={purchaseInfo.number}
          disabled={!editable}
          onChange={handleChange}
          className={`py-0.5 px-1 cursor-text
            ${w[6]} ${mW[6]} ${al[6]} ${(!editable? unSelectedColor : selectedColor)} `}
          />
        
        <input 
          type="string"
          name='amount'
          value={purchaseInfo.amount}
          disabled={!editable}
          onChange={handleChange}
          className={`py-0.5 px-1 cursor-text
            ${w[7]} ${mW[7]} ${al[7]} ${(!editable? unSelectedColor : selectedColor)} `}
          />
        
        <input 
          type="checkbox"
          name='paid'
          checked={purchaseInfo.paid}
          disabled={!editable}
          onChange={handleChange}
          className={`py-0.5 px-1 h-4 mt-1
            ${w[8]} ${mW[8]} ${al[8]} ${(!editable? unSelectedColor : selectedColor)} `}
          />
        
        <input 
          type="text"
          name='paidMethod'
          value={purchaseInfo.paidMethod}
          disabled={!editable}
          onChange={handleChange}
          className={`py-0.5 px-1 uppercase
            ${w[9]} ${mW[9]} ${al[9]} ${(!editable? unSelectedColor : selectedColor)} `}
          />
        
        <input 
          type="text"
          name='detraction'
          value={purchaseInfo.detraction}
          disabled={!editable}
          onChange={handleChange}
          className={`py-0.5 px-1 
            ${w[10]} ${mW[10]} ${al[10]} ${(!editable? unSelectedColor : selectedColor)} `}
          />

    </form>
  );
}

export default FormRowPurchases;