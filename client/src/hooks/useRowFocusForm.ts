import { useEffect, useRef, useState } from "react"



const useRowFocusForm = () =>{
  const [editable, setEditable] = useState(false);
  const rowRef = useRef<HTMLInputElement>(null)


  useEffect(() => {
    if (editable && rowRef.current) {
      rowRef.current.focus();
    }
  }, [editable]);

  return {rowRef,editable,setEditable}
}

export default useRowFocusForm;