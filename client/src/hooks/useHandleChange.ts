import { ChangeEvent, useState } from "react";


function useHandleChange<T>(initialState:T){
  const [rowData, setRowData] = useState(initialState);

  const handleChange = (e:ChangeEvent<HTMLInputElement>)=>{
    const {name,value} = e.target
    setRowData((prevState)=>({
      ...prevState,
      [name]:value
    }))
  }

  return [rowData, handleChange] as const
}


export default useHandleChange;