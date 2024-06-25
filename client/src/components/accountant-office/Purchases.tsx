import { FormEvent, useState } from "react";
import useWindowSize from "../../hooks/useWindowSize";
import PageNav from "../mini-components/PageNav";
import { dataPurchases } from "../../assets/dataHelp";
import { fDiv } from "../../assets/helpers";
import FormRowPurchases from "./mini-components/FormRowPurchases";
import { tableComponent } from "../../assets/styles";

function Purchases() {
  const widths    = [
    'min-w-10 md:w-1/48' ,  //  0 + 
    'min-w-20 md:w-3/48' ,  //  1 COMPANY
    'min-w-32 md:w-4/48' ,  //  2 FECHA
    'min-w-36 md:w-5/48' ,  //  3 RUC
    'min-w-60 md:w-11/48',  //  4 NOMBRE
    'min-w-16 md:w-3/48' ,  //  5 SERIE
    'min-w-28 md:w-5/48' ,  //  6 NUMERO
    'min-w-24 md:w-4/48' ,  //  7 MONTO
    'min-w-16 md:w-3/48' ,  //  8 PAGO
    'min-w-28 md:w-5/48' ,  //  9 OPERACION
    'min-w-32 md:w-4/48' ,  // 10 DETRACCION
  ]
  const aligns    = [
    'text-center'    ,  //  0 +
    'text-center'    ,  //  1 COMPANY
    'text-center'    ,  //  2 FECHA
    'text-center'    ,  //  3 RUC
    'text-left'      ,  //  4 NOMBRE
    'text-center'    ,  //  5 SERIE
    'text-center'    ,  //  6 NUMERO
    'text-right'     ,  //  7 MONTO
    'text-center'    ,  //  8 PAGO
    'text-center'    ,  //  9 OPERACION
    'text-center'    ,  // 10 DETRACCION
  ]
  const {height} =  useWindowSize()

  const [purchaseInfo, setPurchaseInfo] = useState([...dataPurchases]);

  const handleClick = (e:FormEvent) => {
    e.preventDefault()

  }

  return (
    <div className={`${tableComponent.div}`}>

    {/* __________________ TABLE HEADER  */}

      <form action=""
        className={`${tableComponent.form}`}>
        
        <input 
          type="text"
          placeholder=""
          disabled={true}
          className={`${tableComponent.msg}    
            ${widths[0]}`}/>
        
        <input 
          type="text"
          placeholder="ABM"
          className={`${tableComponent.input}    
            ${widths[1]}`}/>
        
        <input 
          type="text"
          placeholder="FECHA"
          className={`${tableComponent.input}    
            ${widths[2]}`}/>
        
        <input 
          type="text"
          placeholder="RUC"
          className={`${tableComponent.input}    
            ${widths[3]}`}/>
        
        <input 
          type="text"
          placeholder="NOMBRE"
          className={`${tableComponent.input}    
          ${widths[4]}`}/>
        
        <input 
          type="text"
          placeholder="SERIE"
          className={`${tableComponent.input}    
            ${widths[5]}`}/>
        
        <input 
          type="text"
          placeholder="NÚMERO"
          className={`${tableComponent.input}    
            ${widths[6]}`}/>
        
        <input 
          type="text"
          placeholder="COSTO"
          className={`${tableComponent.input}    
            ${widths[7]}`}/>
        
        <input 
          type="text"
          placeholder="PAGO"
          className={`${tableComponent.input}    
            ${widths[8]}`}/>
        
        <input 
          type="text"
          placeholder="OPERACIÓN"
          className={`${tableComponent.input}    
            ${widths[9]}`}/>
        
        <input 
          type="text"
          placeholder="DETRACCIÓN"
          className={`${tableComponent.input}    
            ${widths[10]}`}/>

      </form>

    {/* __________________ TABLE INFO */}

      <div className={`${tableComponent.formContainer}`}>{

        purchaseInfo.slice(0,fDiv(height,32)-6).map((purchase,ix)=>
          <FormRowPurchases
            key={ix+'_formRow'}
            purchase={purchase}
            widths={widths}
            align={aligns}
            />
          )

        }
      </div>
    
    {/* __________________ TABLE PAGINATION */}
    
      <div className="fixed bottom-4 right-1/4 md:right-1/2" >

        <PageNav pages={10}/>  

      </div>

    </div>
  );
}


export default Purchases;
