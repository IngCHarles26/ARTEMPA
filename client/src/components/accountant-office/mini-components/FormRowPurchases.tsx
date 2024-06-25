import { ChangeEvent, FormEvent, useState } from "react";
import { PurchasesData } from "../../../types";
import useRowFocusForm from "../../../hooks/useRowFocusForm";
import { rowFormTable, rowFormTableColor } from "../../../assets/styles";



interface Props {
  purchase: PurchasesData,
  widths: string[],
  align: string[],
}


function FormRowPurchases(props:Props) {
  const {purchase,widths:w,align:al} = props
  const [purchaseInfo, setPurchaseInfo] = useState({...purchase});
  const [editHover, setEditHover] = useState(false);
  const [rowHover, setRowHover] = useState(false);
  const {rowRef,editable,setEditable} = useRowFocusForm()

  const bg = editable 
              ? rowFormTableColor.selected 
              : rowHover 
                ? rowFormTableColor.hover 
                : rowFormTableColor.unselected

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
      onMouseEnter={()=>setRowHover(true)}
      onMouseLeave={()=>setRowHover(false)}
      className={`${rowFormTable.form} ${bg}`}>
        
        <button
          onClick={handleEdit}
          onMouseEnter={()=>setEditHover(true)}
          onMouseLeave={()=>setEditHover(false)}
          className={`${rowFormTable.input} ${w[0]} ${al[0]} ${bg}`}>

            <p className={`${rowFormTable.button} ${w[0]} `}>
              {editable ? '💾' : '✏'}
            </p>

            {editHover && <p className={`${rowFormTable.popUp}`}>{editable ? 'guardar' : 'editar'}</p>}
        </button>
        
        <input 
          type="text"
          name='company'
          value={purchaseInfo.company}
          disabled={!editable}
          onChange={handleChange}
          className={`${rowFormTable.input} uppercase
            ${w[1]} ${al[1]} ${bg} `}
          />
        
        <input 
          type="text"
          name='date'
          ref={rowRef}
          value={purchaseInfo.date}
          disabled={!editable}
          onChange={handleChange}
          className={`${rowFormTable.input}
            ${w[2]} ${al[2]} ${bg} `}
          />
        
        <input 
          type="text"
          name='ruc'
          value={purchaseInfo.ruc}
          disabled={!editable}
          onChange={handleChange}
          className={`${rowFormTable.input} 
            ${w[3]} ${al[3]} ${bg} `}
          />
        
        <input 
          type="string"
          name='name'
          value={purchaseInfo.name}
          disabled={!editable}
          onChange={handleChange}
          className={`${rowFormTable.input} 
            ${w[4]} ${al[4]} ${bg} `}
          />
        
        <input 
          type="string"
          name='serial'
          value={purchaseInfo.serial}
          disabled={!editable}
          onChange={handleChange}
          className={`${rowFormTable.input} 
            ${w[5]} ${al[5]} ${bg} `}
          />
        
        <input 
          type="string"
          name='number'
          value={purchaseInfo.number}
          disabled={!editable}
          onChange={handleChange}
          className={`${rowFormTable.input} 
            ${w[6]} ${al[6]} ${bg} `}
          />
        
        <input 
          type="string"
          name='amount'
          value={purchaseInfo.amount}
          disabled={!editable}
          onChange={handleChange}
          className={`${rowFormTable.input} 
            ${w[7]} ${al[7]} ${bg} `}
          />
        
        <input 
          type="string"
          name='paid'
          value={purchaseInfo.paid ? 'X' : ''}
          disabled={!editable}
          onChange={handleChange}
          className={`${rowFormTable.input}
            ${w[8]} ${al[8]} ${bg} `}
          />
        
        <input 
          type="text"
          name='paidMethod'
          value={purchaseInfo.paidMethod}
          disabled={!editable}
          onChange={handleChange}
          className={`${rowFormTable.input} uppercase
            ${w[9]} ${al[9]} ${bg} `}
          />
        
        <input 
          type="text"
          name='detraction'
          value={purchaseInfo.detraction}
          disabled={!editable}
          onChange={handleChange}
          className={`${rowFormTable.input} 
            ${w[10]} ${al[10]} ${bg} `}
          />

    </form>
  );
}

export default FormRowPurchases;