import { FormEvent, useState } from "react";
import useHandleChange from "../../../hooks/useHandleChange";
import useRowFocusForm from "../../../hooks/useRowFocusForm";
import { SalesData } from "../../../types";
import { rowFormTable, rowFormTableColor } from "../../../assets/styles";

interface Props {
  sale:       SalesData,
  widths:     string[],
  align:      string[],
}

function FormRowSales(props:Props) {
  const {sale,widths:w,align:al} = props
  const {rowRef,editable, setEditable} = useRowFocusForm() 
  const [editHover, setEditHover] = useState(false);
  const [rowHover, setRowHover] = useState(false);
  const [saleInfo, handleChange] = useHandleChange<SalesData>({...sale})

  const bg = editable 
              ? rowFormTableColor.selected 
              : rowHover 
                ? rowFormTableColor.hover 
                : rowFormTableColor.unselected

  const handleEdit = (e:FormEvent)=>{
    e.preventDefault();
    setEditable(!editable)
  }

  return ( 
    <form 
      onMouseEnter={()=>setRowHover(true)}
      onMouseLeave={()=>setRowHover(false)}
      className={`${rowFormTable.form} ${bg}`}>
        
        <button
          onClick={handleEdit}
          onMouseEnter={()=>setEditHover(true)}
          onMouseLeave={()=>setEditHover(false)}
          className={`${rowFormTable.input} ${w[0]} ${al[0]} ${bg}`}>

            <p className={`${rowFormTable.button} ${w[0]} w-full`}>
              {editable ? '💾' : '✏'}
            </p>

            {editHover && <p className={`${rowFormTable.popUp}`}>{editable ? 'guardar' : 'editar'}</p>}
        </button>
        
        <input 
          type="text"
          name='company'
          ref={rowRef}
          value={saleInfo.company}
          disabled={!editable}
          onChange={handleChange}
          className={`${rowFormTable.input} uppercase
            ${w[1]} ${al[1]} ${bg} `}
          />
        
        <input 
          type="string"
          name='date'
          value={saleInfo.date}
          disabled={!editable}
          onChange={handleChange}
          className={`${rowFormTable.input} 
            ${w[2]} ${al[2]} ${bg} `}
          />
        
        <input 
          type="string"
          name='serie'
          value={saleInfo.serie}
          disabled={!editable}
          onChange={handleChange}
          className={`${rowFormTable.input}
            ${w[3]} ${al[3]} ${bg} `}
          />
        
        <input 
          type="string"
          name='number'
          value={saleInfo.number}
          disabled={!editable}
          onChange={handleChange}
          className={`${rowFormTable.input}
            ${w[4]} ${al[4]} ${bg} `}
          />
        
        <input 
          type="string"
          name='ot'
          value={saleInfo.ot}
          disabled={!editable}
          onChange={handleChange}
          className={`${rowFormTable.input}
            ${w[5]} ${al[5]} ${bg} `}
          />
        
        <input 
          type="string"
          name='client'
          value={saleInfo.client}
          disabled={!editable}
          onChange={handleChange}
          className={`${rowFormTable.input}
            ${w[6]} ${al[6]} ${bg} `}
          />
        
        <input 
          type="string"
          name='os'
          value={saleInfo.os}
          disabled={!editable}
          onChange={handleChange}
          className={`${rowFormTable.input}
            ${w[7]} ${al[7]} ${bg} `}
          />
        
        <input 
          type="string"
          name='import'
          value={saleInfo.import}
          disabled={!editable}
          onChange={handleChange}
          className={`${rowFormTable.input}
            ${w[8]} ${al[8]} ${bg} `}
          />
        
        <input 
          type="string"
          name='days'
          value={saleInfo.days}
          disabled={!editable}
          onChange={handleChange}
          className={`${rowFormTable.input}
            ${w[9]} ${al[9]} ${bg} `}
          />
        
        <input 
          type="string"
          name='expiration'
          value={saleInfo.expiration}
          disabled={!editable}
          onChange={handleChange}
          className={`${rowFormTable.input}
            ${w[10]} ${al[10]} ${bg} `}
          />
        
        <input 
          type="string"
          name='netAmount'
          value={saleInfo.netAmount}
          disabled={!editable}
          onChange={handleChange}
          className={`${rowFormTable.input}
            ${w[11]} ${al[11]} ${bg} `}
          />
        
        <input 
          type="string"
          name='netOP'
          value={saleInfo.netOP}
          disabled={!editable}
          onChange={handleChange}
          className={`${rowFormTable.input}
            ${w[12]} ${al[12]} ${bg} `}
          />
        
        <input 
          type="string"
          name='detraction'
          value={saleInfo.detraction}
          disabled={!editable}
          onChange={handleChange}
          className={`${rowFormTable.input}
            ${w[13]} ${al[13]} ${bg} `}
          />
        
        <input 
          type="string"
          name='detOP'
          value={saleInfo.detOP ? 'X' : ''}
          disabled={!editable}
          onChange={handleChange}
          className={`${rowFormTable.input}
            ${w[14]} ${al[14]} ${bg} `}
          />

    </form>
  );
}

export default FormRowSales;