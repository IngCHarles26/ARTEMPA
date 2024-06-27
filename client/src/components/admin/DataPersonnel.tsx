/*
  id
  user name
  email
  habilitado
  tipo
  telefono
  persona contacto
  telefono persona contato
  direccion
  ultima sesion
*/

import { useSelector } from "react-redux";
import { tableComponent } from "../../assets/styles";
import useWindowSize from "../../hooks/useWindowSize";
import PageNav from "../mini-components/PageNav";
import { TypeStore } from "../../redux/store";
import { fDiv } from "../../assets/helpers";
import FormRowDataPersonel from "./mini-components/FormRowPersonaleData";

function DataPersonnel() {

  const widths = [
    'min-w-10 md:w-1/48', //      
    'min-w-20 md:w-3/48', // habilitado     
    'min-w-28 md:w-4/48', // dni            7
    'min-w-36 md:w-4/48', // user name
    'min-w-60 md:w-5/48', // name
    'min-w-28 md:w-3/48', // tipo
    'min-w-32 md:w-4/48', // ultima sesion
    'min-w-28 md:w-4/48', // telefono
    'min-w-48 md:w-5/48', // email
    'min-w-60 md:w-5/48', // direccion
    'min-w-60 md:w-5/48', // persona contacto
    'min-w-28 md:w-5/48 ', // telefono pc
  ]
  const aligns = [
    'text-center', // 
    'text-center', // habilitado
    'text-center', // dni
    'text-center', // user name
    'text-left', // name
    'text-center', // tipo
    'text-center', // ultima sesion
    'text-center', // telefono
    'text-left', // email
    'text-left', // direccion
    'text-left', // persona contacto
    'text-center', // telefono pc
  ]

  const {height} = useWindowSize()
  const personelInfo = useSelector( (st:TypeStore) => st.personel)

  return (
    <div className={`${tableComponent.div}`}>
      <form 
        className={`${tableComponent.form}`}>
        
        <input 
          type="string"
          placeholder=""
          disabled={true}
          className={`${tableComponent.msg}    
            ${widths[0]}`}/>
        
        <input 
          type="string"
          placeholder="ACTIVO"
          className={`${tableComponent.input}    
            ${widths[1]}`}/>
        
        <input 
          type="string"
          placeholder="DNI"
          className={`${tableComponent.input}    
            ${widths[2]}`}/>
        
        <input 
          type="string"
          placeholder="USER"
          className={`${tableComponent.input}    
            ${widths[3]}`}/>
        
        <input 
          type="string"
          placeholder="NOMBRE"
          className={`${tableComponent.input}    
            ${widths[4]}`}/>
        
        <input 
          type="string"
          placeholder="TIPO"
          className={`${tableComponent.input}    
            ${widths[5]}`}/>
        
        <input 
          type="string"
          placeholder="ULT. SESION"
          className={`${tableComponent.input}    
            ${widths[6]}`}/>
        
        <input 
          type="string"
          placeholder="TELEFONO"
          className={`${tableComponent.input}    
            ${widths[7]}`}/>
        
        <input 
          type="string"
          placeholder="EMAIL"
          className={`${tableComponent.input}    
            ${widths[8]}`}/>
        
        <input 
          type="string"
          placeholder="DIRECCION"
          className={`${tableComponent.input}    
            ${widths[9]}`}/>
        
        <input 
          type="string"
          placeholder="P.C."
          className={`${tableComponent.input}    
            ${widths[10]}`}/>
        
        <input 
          type="string"
          placeholder="TELEFONO P.C."
          className={`${tableComponent.input}    
            ${widths[11]}`}/>

      </form>
      
      <div className={`${tableComponent.formContainer}`}>{

        personelInfo.slice(0,fDiv(height,32)-6).map((personel,ix)=>
          <FormRowDataPersonel 
            key={ix+'_formRowPersonel'}
            personal={personel}
            widths={widths}
            align={aligns}
          />)
        }
      </div>

      <div className="fixed bottom-4 right-1/4 md:right-1/2">
        <PageNav
          pages={10}
        />
      </div>

    </div>
  );
}

export default DataPersonnel;