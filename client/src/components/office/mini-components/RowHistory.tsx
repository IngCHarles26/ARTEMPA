import { useState } from "react";
import { HistoryStockData } from "../../../types";
import { rowFormTable, rowFormTableColor } from "../../../assets/styles";

interface Props {
  history: HistoryStockData,
  widths: string[],
  align: string[],
}

function RowHistory(props:Props) {
  const {history,widths:w,align:al} = props
  const [rowHover, setRowHover] = useState(false);

  const bg = rowHover 
              ? rowFormTableColor.hover 
              : rowFormTableColor.unselected

  return (
    <div 
      onMouseEnter={()=>setRowHover(true)}
      onMouseLeave={()=>setRowHover(false)}
      className={`${rowFormTable.form} ${bg}`}>
        
      <p className={`${rowFormTable.input} ${bg} ${w[0]} ${al[0]}`}>{history.id}</p>
      <p className={`${rowFormTable.input} ${bg} ${w[1]} ${al[1]}`}>{history.date}</p>
      <p className={`${rowFormTable.input} ${bg} ${w[2]} ${al[2]}`}>{history.quantity}</p>
      <p className={`${rowFormTable.input} ${bg} ${w[3]} ${al[3]}`}>{history.user}</p>
      <p className={`${rowFormTable.input} ${bg} ${w[4]} ${al[4]}`}>{history.ot}</p>

    </div>
  );
}

export default RowHistory;