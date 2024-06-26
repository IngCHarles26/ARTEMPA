import { useState } from "react";
import { tableComponent } from "../../assets/styles";
import { monthToText } from "../../assets/helpers";

const company = ['abm','mega','ambos']
const bgCompany = ['bg-blue-600','bg-red-600','bg-green-700']

const initialState = {
  company: 0,
  month: -1,
  year: -1,
  monthSt: true,
}


function Results() {
  const [info, setInfo] = useState({...initialState});

  
  return (
    <div className={`${tableComponent.div}`}>
      <div className="w-full mt-3 flex justify-center">

        <div className="flex gap-1 md:gap-2 ">

          <button 
            className="leading-4 w-24 md:w-32 text-xs md:text-base md:leading-5 px-3 py-2 bg-neutral-500 rounded text-red-100 tracking-widest uppercase font-bold hover:scale-105 transition-all hover:font-extrabold"
            onClick={()=>setInfo({...info,monthSt:!info.monthSt})}
            >
            {info.monthSt ? 'Mensual' : 'Anual'}
          </button>

          <select className="leading-4 w-20 md:w-28 text-xs md:text-base md:leading-5 px-3 py-2 bg-neutral-500 rounded text-blue-100 bg-gre uppercase font-bold cursor-pointer">
            <option value=""> - año - </option>
            {
              [2024,2023,2022,2021,2020].map((year,ix)=>
                <option value={ix} key={ix+'_optYear'} className="text-sm">{year}</option>
              )
            }
          </select>

          { info.monthSt && 
          <select className="leading-4 w-28 md:w-32 text-xs md:text-base md:leading-5 px-3 py-2 bg-neutral-500 rounded text-green-100 uppercase font-bold cursor-pointer">
              <option value="" > - mes - </option>
              {
                monthToText.map((month,ix)=>
                  <option value={ix} key={ix+'_optMonth'} className="text-xs">{month}</option>
                )
              }
          </select>}

          <button className={`leading-4 w-16 md:w-24 text-xs md:text-base md:leading-5 px-3 py-2 text-white rounded uppercase font-bold hover:scale-105 hover:font-extrabold transition-all ${bgCompany[info.company]}`}
            onClick={()=>setInfo({...info,company:(info.company+1)%3})}>
            {company[info.company]}
          </button>

          <button className="leading-4 w-24 md:w-32 text-xs md:text-base md:leading-5 px-3 py-2 bg-yellow-500 rounded text-cyan-800 uppercase font-bold ml-5 md:ml-10 hover:text-yellow-500 hover:bg-cyan-800 hover:font-extrabold hover:scale-110 transition-all">
            generar
          </button>
          
        </div>


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