/* ! FUNCIONAMIENTO
  1. Tiene un select que indica el año
  2. Muestra la lista de estados bancarios por mes dependiendo del ao
  3. Abm está a la izquierda y megaman a la derecha
  4. Al hacer click en cada nos lleva al enlace del estado bancario
  5. debe haver la opcion de agregar un estado bancario

*/

import { ChangeEvent, useEffect, useState } from "react";
import { dataStatementsAbm, dataStatementsMega } from "../../assets/dataHelp";

const meses = [ "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",  "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

function Statements() {
  const [statesAbm, setStatesAbm] = useState<typeof dataStatementsAbm>([]);
  const [statesMega, setStatesMega] = useState<typeof dataStatementsAbm>([]);



  const years = [2024,2023,2022]
  const nowYear = (new Date()).getFullYear()
  const allDataAbm = dataStatementsAbm
  const allDataMega = dataStatementsMega

  const filterYear = (year:number)=>{
    const filtAbm = allDataAbm.filter((el)=>el.year == year)
    const filtMega = allDataMega.filter((el)=>el.year == year)
    setStatesAbm(filtAbm)
    setStatesMega(filtMega)
  }


  const handleChange = (e:ChangeEvent<HTMLSelectElement>)=>{
    const {value} = e.target
    filterYear(+value)
  }

  useEffect(() => {
    filterYear(nowYear)
  }, []);

  return (
    <div className="flex-grow flex flex-col">

      <div className="w-full p-4 flex justify-center">

        <select name="year_statement" 
            onChange={handleChange}
            className="p-2 rounded-lg text-neutral-500 font-extrabold text-lg md:text-2xl">{

            years.map((el,ix)=>
              <option 
                  key={ix+'_year_value_statements'} 
                  value={el} 
                  defaultValue={nowYear}
                >
                {el}
              </option>
            )
          }
        </select>

      </div>

      <div className="w-full flex-grow flex justify-center items-start mt-2 gap-20">

        <div className="flex flex-col justify- items-center w-1/3 gap-10 md:gap-24 ">

          <p>logo ABM</p>

          <div className="flex flex-wrap gap-3 md:gap-5 justify-center" >{

              statesAbm.map((el,ix)=> 
                <a key={ix+'_statement_'+el.company} href="" 
                  className="transition-all block p-2 border rounded-lg w-28 text-center bg-blue-600 text-white hover:scale-110 hover:font-extrabold hover:bg-blue-700 hover:tracking-wide">
                  {meses[el.month-1]}
                </a>
              )
            }
          </div>

        </div>

        <div className="flex flex-col justify-center items-center w-1/3 gap-10 md:gap-24">

          <p>logo MEGAMAN</p>

          <div className="flex flex-wrap gap-3 md:gap-5 justify-center" >{

              statesMega.map((el,ix)=> 
                <a key={ix+'_statement_'+el.company} href="" 
                  className="transition-all block p-2 border rounded-lg w-28 text-center bg-red-600 text-white hover:scale-110 hover:font-extrabold hover:bg-red-700 hover:tracking-wide">
                  {meses[el.month-1]}
                </a>
              )
            }
          </div>

        </div>

      </div>
      
    </div>
  );
}

export default Statements;