import { useState } from "react";
import { StockData } from "../../../types";
import { rowFormTable, rowFormTableColor } from "../../../assets/styles";

interface Props {
  inventory: StockData,
  widths: string[],
  align: string[],
}

function RowInventory(props:Props) {
  const {inventory,widths:w,align:al} = props
  const [rowHover, setRowHover] = useState(false);

  const bg = rowHover 
              ? rowFormTableColor.hover 
              : rowFormTableColor.unselected

  return (
    <div 
      onMouseEnter={()=>setRowHover(true)}
      onMouseLeave={()=>setRowHover(false)}
      className={`${rowFormTable.form} ${bg}`}>
        
      <p className={`${rowFormTable.input} ${bg} ${w[0]} ${al[0]}`}>{inventory.id}</p>
      <p className={`${rowFormTable.input} ${bg} ${w[1]} ${al[1]}`}>{inventory.type}</p>
      <p className={`${rowFormTable.input} ${bg} ${w[2]} ${al[2]}`}>{inventory.quantity}</p>
      <p className={`${rowFormTable.input} ${bg} ${w[3]} ${al[3]}`}>{inventory.brand}</p>
      <p className={`${rowFormTable.input} ${bg} ${w[4]} ${al[4]}`}>{inventory.detail}</p>

    </div>
  );
}

export default RowInventory;