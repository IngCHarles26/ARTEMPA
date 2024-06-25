import {  useState } from "react";
import { MonthStatements } from "../../../types";
import { rowFormTable, rowFormTableColor } from "../../../assets/styles";
import { monthToText } from "../../../assets/helpers";

interface Props {
  statement:  MonthStatements,
  widths:     string[],
  align:      string[],
}

function FormRowStatements(props:Props) {
  const {statement,widths:w,align:al} = props
  const [rowHover, setRowHover] = useState(false);
  
  const bg = rowHover 
              ? rowFormTableColor.hover 
              : rowFormTableColor.unselected


  return (
    <div 
      onMouseEnter={()=>setRowHover(true)}  
      onMouseLeave={()=>setRowHover(false)} 
      className={`${rowFormTable.form} ${bg}`}>

        <p
            className={`${rowFormTable.input} ${w[0]} ${al[0]} ${bg} uppercase `}
          >
          {statement.company}
        </p>

        <p
            className={`${rowFormTable.input} ${w[1]} ${al[1]} ${bg} `}
          >
          {monthToText[statement.month-1]}
        </p>

        <p
            className={`${rowFormTable.input} ${w[2]} ${al[2]} ${bg} `}
          >
          {statement.year}
        </p>

        <p
            className={`${rowFormTable.input} ${w[3]} ${al[3]} ${bg} `}
          >
          <a href={`#`} target="_blank">link</a>
        </p>

    </div>
  );
}

export default FormRowStatements;