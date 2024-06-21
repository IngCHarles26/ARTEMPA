import { FormEvent } from "react";
import useHandleChange from "../../../hooks/useHandleChange";
import useRowFocusForm from "../../../hooks/useRowFocusForm";
import { SalesData } from "../../../types";

interface Props {
  sale:       SalesData,
  widths:     string[],
  minWidths:  string[],
  align:      string[]
}

const selectedColor = 'bg-gray-300'
const unSelectedColor = 'bg-transparent'

function FormRowSales(props:Props) {
  const {sale,widths:w,minWidths:mW,align:al} = props
  const {rowRef,editable, setEditable} = useRowFocusForm()  
  const [saleInfo, handleChange] = useHandleChange<SalesData>({...sale})

  const handleEdit = (e:FormEvent)=>{
    e.preventDefault()
  }

  return ( 
    <form 
      className={`border-gray-500 border-b-2 flex hover:bg-slate-400
        ${(!editable? unSelectedColor : selectedColor)}`}>
        
        <button
          onClick={handleEdit}
          className={`
            ${w[0]} ${mW[0]} ${al[0]} ${(!editable? unSelectedColor : selectedColor)}`}>

            <p className={`hover:scale-125 transition-all`}>
              {editable ? '💾' : '✏'}
            </p>
        </button>
        
        <input 
          type="text"
          name='ruc'
          ref={rowRef}
          value={saleInfo.serie}
          disabled={!editable}
          onChange={handleChange}
          className={`py-1 px-3 input-no-spinner
            ${w[1]} ${mW[1]} ${al[1]} ${(!editable? unSelectedColor : selectedColor)} `}
          />
        
        <input 
          type="string"
          name='name'
          value={saleInfo.number}
          disabled={!editable}
          onChange={handleChange}
          className={`py-1 px-3 
            ${w[2]} ${mW[2]} ${al[2]} ${(!editable? unSelectedColor : selectedColor)} `}
          />
        
        <input 
          type="string"
          name='address'
          value={saleInfo.date}
          disabled={!editable}
          onChange={handleChange}
          className={`py-1 px-3
            ${w[3]} ${mW[3]} ${al[3]} ${(!editable? unSelectedColor : selectedColor)} `}
          />
        
        <input 
          type="string"
          name='phone'
          value={saleInfo.ot}
          disabled={!editable}
          onChange={handleChange}
          className={`py-1 px-3
            ${w[4]} ${mW[4]} ${al[4]} ${(!editable? unSelectedColor : selectedColor)} `}
          />
        
        <input 
          type="string"
          name='email'
          value={saleInfo.client}
          disabled={!editable}
          onChange={handleChange}
          className={`py-1 px-3
            ${w[5]} ${mW[5]} ${al[5]} ${(!editable? unSelectedColor : selectedColor)} `}
          />
        
        <input 
          type="string"
          name='bankAccount'
          value={saleInfo.os}
          disabled={!editable}
          onChange={handleChange}
          className={`py-1 px-3
            ${w[6]} ${mW[6]} ${al[6]} ${(!editable? unSelectedColor : selectedColor)} `}
          />
        
        <input 
          type="string"
          name='bankAccount'
          value={saleInfo.import}
          disabled={!editable}
          onChange={handleChange}
          className={`py-1 px-3
            ${w[7]} ${mW[7]} ${al[7]} ${(!editable? unSelectedColor : selectedColor)} `}
          />
        
        <input 
          type="string"
          name='bankAccount'
          value={saleInfo.days}
          disabled={!editable}
          onChange={handleChange}
          className={`py-1 px-3
            ${w[8]} ${mW[8]} ${al[8]} ${(!editable? unSelectedColor : selectedColor)} `}
          />
        
        <input 
          type="string"
          name='bankAccount'
          value={saleInfo.expiration}
          disabled={!editable}
          onChange={handleChange}
          className={`py-1 px-3
            ${w[9]} ${mW[9]} ${al[9]} ${(!editable? unSelectedColor : selectedColor)} `}
          />
        
        <input 
          type="string"
          name='bankAccount'
          value={saleInfo.netAmount}
          disabled={!editable}
          onChange={handleChange}
          className={`py-1 px-3
            ${w[10]} ${mW[10]} ${al[10]} ${(!editable? unSelectedColor : selectedColor)} `}
          />
        
        <input 
          type="string"
          name='bankAccount'
          value={saleInfo.netOP}
          disabled={!editable}
          onChange={handleChange}
          className={`py-1 px-3
            ${w[11]} ${mW[11]} ${al[11]} ${(!editable? unSelectedColor : selectedColor)} `}
          />
        
        <input 
          type="string"
          name='bankAccount'
          value={saleInfo.detraction}
          disabled={!editable}
          onChange={handleChange}
          className={`py-1 px-3
            ${w[12]} ${mW[12]} ${al[12]} ${(!editable? unSelectedColor : selectedColor)} `}
          />
        
        <input 
          type="checkbox"
          name='bankAccount'
          checked={saleInfo.detOP}
          disabled={!editable}
          onChange={handleChange}
          className={`py-1 px-3 h-4 mt-2
            ${w[13]} ${mW[13]} ${al[13]} ${(!editable? unSelectedColor : selectedColor)} `}
          />

    </form>
  );
}

export default FormRowSales;