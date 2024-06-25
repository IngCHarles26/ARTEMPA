import { useState } from "react";
import { tableComponent } from "../../assets/styles";
import { monthToText } from "../../assets/helpers";

const initialState = {
  company: 'abm',
  month: 6,
  year: 2024,
}


function Results() {
  const [info, setInfo] = useState({...initialState});

  
  return (
    <div className={`${tableComponent.div}`}>
      <div className="w-full flex justify-start py-2 px-4 md:py-5 md:px-8 gap-2 md:text-xl">

        <button className="bg-neutral-500 rounded px-5 py-1 text-white uppercase font-bold">
          {info.company}
        </button>

        <select className="bg-neutral-500 rounded px-2 py-1 text-white uppercase font-bold cursor-pointer">
          <option value=""> - mes - </option>
          {
            monthToText.map((month,ix)=>
              <option value={ix} key={ix+'_optMonth'} className="text-sm">{month}</option>
            )
          }
        </select>

        <select className="bg-neutral-500 rounded px-2 py-1 text-white uppercase font-bold cursor-pointer">
          <option value=""> - año - </option>
          {
            [2024,2023,2022,2021,2020].map((year,ix)=>
              <option value={ix} key={ix+'_optYear'} className="text-sm">{year}</option>
            )
          }
        </select>

        <button className="bg-yellow-500 rounded px-2 py-1  uppercase font-bold hover:scale-110 transition-all">
          reset
        </button>

      </div>
    </div>
  );
}

export default Results;


/*
  elegir el mes y el año (por defecto son los actuales)
  elegir la empresa (por defecto es abm)
  
  eleccion mensual
    diagrama de dona con el monto de ventas como 100% y el monto de compras rellenando el porcentaje correspondiente
    diagrama de dona con el monto de ventas con los % de venta a cada cliente
    diagrama de dona con el monto de compras con los % de compra a cada proveedor
    tabla de porcentajes de ventas ordenadas de mayor a menor 
    tabla de porcentajes de compras ordenadas de mayor a menor
      de estos 2 ultimos solo muestra los 10 primeros, siendo el décimo otros y debe tener un boton para acceder al detalle de todos los elementos

  eleccion anual
    diagrama de barras por mes con el monto de ventas como el 100% y las compras segun el porcentaje correspondiente
    monto total de compras y monto total de ventas por mes y por año, solo muestra hasta el mes actual
    los 5 primeros clientes con mas ventas y el porcentaje de venta total del año
    
  

*/