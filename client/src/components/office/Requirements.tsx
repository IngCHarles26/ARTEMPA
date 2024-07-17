import { tableComponent } from "../../assets/styles";

function Requirements() {
  const wR = [
    'w-10/48'   , // ot
    'w-11/48'   , // sub-ot
    'w-6/48'    , // compañia
    'w-10/48'   , // cliente
    'w-11/48'   , // descripcion
  ]


  return (
    <div className="flex-grow flex flex-col md:flex-row">
      <div className="h-1/2 md:h-full w-full md:w-1/2 bg-green-200">
        <p className="text-center w-full bg-teal-600 text-sm md:text-lg text-white font-bold uppercase py-1 border-b-2">Requerimientos</p>

        <div className="flex">
          {/* <p className={`${tableComponent.msg}   ${wHistorial[0]}`}>id</p>
          <p className={`${tableComponent.input} ${wHistorial[1]}`}>fecha</p>
          <p className={`${tableComponent.input} ${wHistorial[2]}`}>#</p>
          <p className={`${tableComponent.input} ${wHistorial[3]}`}>usuario</p>
          <p className={`${tableComponent.input} ${wHistorial[4]}`}>ot</p> */}
        </div>
      </div>

      <div className="h-1/2 md:h-full w-full md:w-1/2 bg-red-200">
        <p className="text-center w-full bg-sky-600 text-sm md:text-lg text-white font-bold uppercase py-1 border-b-2">Detalle</p>
            
      </div>
    </div>
  );
}

export default Requirements;

/*
  Funcionamiento
    Muestra el resumen de todos los requerimientos
    Al hacer click muestra el detalle de los requerimientos indicando ot y demas
    Tiene la opcion de marcar todo como adquirido o recogido o individualmente en la tabla de detalle

*/



/*
  ! guardar este contenido para el cuaderno de datos de trabajo y su componente detail
  Funcionamiento
  Muestra una tabla con los elementos (ot sub-ot compañia cliente descripcion)
    Al hacer clicn en una fila va a mostrar el detalle de los requerimientos  en el elemento siguiente

  Muestra a la derecha un detalle de todos los requerimientos de ese servicio
    Muestra la OT cliente solicitante 
    Muestra una tabla de peticiones
      numero: 1,2 3 etc
      tipo: servicio insumo repuesto
      cantidad ...
      detalle embocinado polea, sello mecanico,  
      atendido si o no
    Con un boton de validar stock de repuestos, va a mostrar una notificacion con la comparacion de stocks
    Con un boton de generar la salida solo de repuestos y generar el tareo de requerimientos

*/