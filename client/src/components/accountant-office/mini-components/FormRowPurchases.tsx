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

function FormRowPurchases(props:Props) {
  const {purchase,widths:w,minWidths:mW,align:al} = props
  const [purchaseInfo, setPurchaseInfo] = useState({...purchase});
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
          name='company'
          value={purchaseInfo.company}
          disabled={!editable}
          onChange={handleChange}
          className={`py-1 px-3 cursor-text input-no-spinner
            ${w[1]} ${mW[1]} ${al[1]} ${(!editable?'bg-neutral-300':'bg-neutral-50')} `}
          />
        
        <input 
          type="text"
          name='date'
          ref={rowRef}
          value={purchaseInfo.date}
          disabled={!editable}
          onChange={handleChange}
          className={`py-1 px-3 cursor-text input-no-spinner
            ${w[2]} ${mW[2]} ${al[2]} ${(!editable?'bg-neutral-300':'bg-neutral-50')} `}
          />
        
        <input 
          type="text"
          name='ruc'
          value={purchaseInfo.ruc}
          disabled={!editable}
          onChange={handleChange}
          className={`py-1 px-3 cursor-text input-no-spinner
            ${w[3]} ${mW[3]} ${al[3]} ${(!editable?'bg-neutral-300':'bg-neutral-50')} `}
          />
        
        <input 
          type="string"
          name='name'
          value={purchaseInfo.name}
          disabled={!editable}
          onChange={handleChange}
          className={`py-1 px-3 cursor-text 
            ${w[4]} ${mW[4]} ${al[4]} ${(!editable?'bg-neutral-300':'bg-neutral-50')} `}
          />
        
        <input 
          type="string"
          name='serial'
          value={purchaseInfo.serial}
          disabled={!editable}
          onChange={handleChange}
          className={`py-1 px-3 cursor-text
            ${w[5]} ${mW[5]} ${al[5]} ${(!editable?'bg-neutral-300':'bg-neutral-50')} `}
          />
        
        <input 
          type="string"
          name='number'
          value={purchaseInfo.number}
          disabled={!editable}
          onChange={handleChange}
          className={`py-1 px-3 cursor-text
            ${w[6]} ${mW[6]} ${al[6]} ${(!editable?'bg-neutral-300':'bg-neutral-50')} `}
          />
        
        <input 
          type="string"
          name='amount'
          value={purchaseInfo.amount}
          disabled={!editable}
          onChange={handleChange}
          className={`py-1 px-3 cursor-text
            ${w[7]} ${mW[7]} ${al[7]} ${(!editable?'bg-neutral-300':'bg-neutral-50')} `}
          />
        
        <input 
          type="checkbox"
          name='paid'
          checked={purchaseInfo.paid}
          disabled={!editable}
          onChange={handleChange}
          className={`py-1 px-3 cursor-text h-4 mt-2
            ${w[8]} ${mW[8]} ${al[8]} ${(!editable?'bg-neutral-300':'bg-neutral-50')} `}
          />
        
        <input 
          type="text"
          name='paidMethod'
          value={purchaseInfo.paidMethod}
          disabled={!editable}
          onChange={handleChange}
          className={`py-1 px-3 cursor-text uppercase
            ${w[9]} ${mW[9]} ${al[9]} ${(!editable?'bg-neutral-300':'bg-neutral-50')} `}
          />
        
        <input 
          type="text"
          name='detraction'
          value={purchaseInfo.detraction}
          disabled={!editable}
          onChange={handleChange}
          className={`py-1 px-3 cursor-text uppercase
            ${w[10]} ${mW[10]} ${al[10]} ${(!editable?'bg-neutral-300':'bg-neutral-50')} `}
          />

    </form>
  );
}

export default FormRowPurchases;