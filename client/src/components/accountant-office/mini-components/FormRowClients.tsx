import { ChangeEvent, FormEvent, useEffect, useRef, useState } from "react";
import { ClientsData } from "../../../types";
import useRowFocusForm from "../../../hooks/useRowFocusForm";
import useHandleChange from "../../../hooks/useHandleChange";
import { rowFormTable, rowFormTableColor } from "../../../assets/styles";

interface Props {
  client: ClientsData,
  widths: string[],
  minWidths: string[],
  align: string[],
}


function FormRowClients(props:Props) {
  const {client,widths:w,minWidths:mW,align:al} = props
  const {rowRef,editable, setEditable} = useRowFocusForm()
  const [editHover, setEditHover] = useState(false);
  const [rowHover, setRowHover] = useState(false);
  const [clientInfo,handleChange] = useHandleChange<ClientsData>({...client})

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
          className={`${rowFormTable.input} ${w[0]} ${mW[0]} ${al[0]} ${bg}`}>

            <p className={`${rowFormTable.button} ${w[0]}`}>
              {editable ? '💾' : '✏'}
            </p>

            {editHover && <p className={`${rowFormTable.popUp}`}>{editable ? 'guardar' : 'editar'}</p>}
        </button>
        
        <input 
          type="text"
          name='ruc'
          ref={rowRef}
          value={clientInfo.ruc}
          disabled={!editable}
          onChange={handleChange}
          className={`${rowFormTable.input} ${w[1]} ${mW[1]} ${al[1]} ${bg} `}
          />
        
        <input 
          type="string"
          name='name'
          value={clientInfo.name}
          disabled={!editable}
          onChange={handleChange}
          className={`${rowFormTable.input} 
            ${w[2]} ${mW[2]} ${al[2]} ${bg} `}
          />
        
        <input 
          type="string"
          name='address'
          value={clientInfo.address}
          disabled={!editable}
          onChange={handleChange}
          className={`${rowFormTable.input}
            ${w[3]} ${mW[3]} ${al[3]} ${bg} `}
          />

        <input 
          type="string"
          name='abm'
          value={clientInfo.abm ? 'X' : ''}
          disabled={!editable}
          onChange={handleChange}
          className={`${rowFormTable.input}
            ${w[4]} ${mW[4]} ${al[4]} ${bg} `}
          />

        <input 
          type="string"
          name='mega'
          value={clientInfo.mega ? 'X' : ''}
          disabled={!editable}
          onChange={handleChange}
          className={`${rowFormTable.input}
            ${w[5]} ${mW[5]} ${al[5]} ${bg} `}
          />

    </form>
  );
}

export default FormRowClients;