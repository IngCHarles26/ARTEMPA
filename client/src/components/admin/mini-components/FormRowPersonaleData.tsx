import { FormEvent, useState } from "react";
import useRowFocusForm from "../../../hooks/useRowFocusForm";
import { PersonelData } from "../../../types";
import useHandleChange from "../../../hooks/useHandleChange";
import { rowFormTable, rowFormTableColor } from "../../../assets/styles";

interface Props {
  personal:   PersonelData,
  widths:     string[],
  align:      string[]
}

function FormRowDataPersonel(props:Props) {
  const {personal,widths:w,align:al} = props
  const {rowRef,editable,setEditable} = useRowFocusForm()
  const [editHover, setEditHover] = useState(false);
  const [rowHover, setRowHover] = useState(false);
  const [personalInfo,handleChange] = useHandleChange<PersonelData>({...personal})

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
        name='valid'
        ref={rowRef}
        value={personalInfo.valid ? 'X' : ''}
        disabled={!editable}
        onChange={handleChange}
        className={`${rowFormTable.input} uppercase
          ${w[1]} ${al[1]} ${bg} `}
        />

              
      <input 
        type="string"
        name='id'
        value={personalInfo.id}
        disabled={!editable}
        onChange={handleChange}
        className={`${rowFormTable.input} 
          ${w[2]} ${al[2]} ${bg} `}
        />
              
      <input 
        type="string"
        name='userName'
        value={personalInfo.userName}
        disabled={!editable}
        onChange={handleChange}
        className={`${rowFormTable.input} 
          ${w[3]} ${al[3]} ${bg} `}
        />
              
      <input 
        type="string"
        name='name'
        value={personalInfo.name}
        disabled={!editable}
        onChange={handleChange}
        className={`${rowFormTable.input} 
          ${w[4]} ${al[4]} ${bg} `}
        />
              
      <input 
        type="string"
        name='type'
        value={personalInfo.type}
        disabled={!editable}
        onChange={handleChange}
        className={`${rowFormTable.input} 
          ${w[5]} ${al[5]} ${bg} `}
        />
              
      <input 
        type="string"
        name='lastSesion'
        value={personalInfo.lastSesion}
        disabled={!editable}
        onChange={handleChange}
        className={`${rowFormTable.input} 
          ${w[6]} ${al[6]} ${bg} `}
        />
              
      <input 
        type="string"
        name='phone'
        value={personalInfo.phone}
        disabled={!editable}
        onChange={handleChange}
        className={`${rowFormTable.input} 
          ${w[7]} ${al[7]} ${bg} `}
        />
              
      <input 
        type="string"
        name='email'
        value={personalInfo.email}
        disabled={!editable}
        onChange={handleChange}
        className={`${rowFormTable.input} 
          ${w[8]} ${al[8]} ${bg} `}
        />
              
      <input 
        type="string"
        name='address'
        value={personalInfo.address}
        disabled={!editable}
        onChange={handleChange}
        className={`${rowFormTable.input} 
          ${w[9]} ${al[9]} ${bg} `}
        />
              
      <input 
        type="string"
        name='PC'
        value={personalInfo.PC}
        disabled={!editable}
        onChange={handleChange}
        className={`${rowFormTable.input} 
          ${w[10]} ${al[10]} ${bg} `}
        />
              
      <input 
        type="string"
        name='phonePC'
        value={personalInfo.phonePC}
        disabled={!editable}
        onChange={handleChange}
        className={`${rowFormTable.input} 
          ${w[11]} ${al[11]} ${bg} `}
        />
    </form>
  );
}

export default FormRowDataPersonel;