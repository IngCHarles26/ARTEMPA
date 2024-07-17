function ServicesStatus() {
  const widths = [
      'w-1/48', //ot
      'w-1/48', //servicio
      'w-1/48', //cliente
      'w-1/48', //% avance
      'w-1/48', //desmontaje
      'w-1/48', //presupuesto
      'w-1/48', //limpieza inicial
      'w-1/48', //repuestos
      'w-1/48', //correctivos
      'w-1/48', //extraccion de alambre
      'w-1/48', //insercion de aislamiento
      'w-1/48', //insercion de bobinas
      'w-1/48', //union de salidas
      'w-1/48', //amarre
      'w-1/48', //barnizado
      'w-1/48', //limpieza final
      'w-1/48', //montaje
      'w-1/48', //pruebas
      'w-1/48', //pintado  
    ]

  return (
    <div className="flex-grow flex-col ">
        <p className="text-center w-full bg-sky-600 text-sm md:text-lg text-white font-bold uppercase py-1 border-b-2">Avance</p>

        <div className="flex gap-1">
          <p className="writing-mode-vertical-rl text-orientation-mixed rotate-180">ot</p>
          <p className="">tipo</p>
          <p className="">cliente</p>
          <p className="">%</p>
          <p className="">desmontaje</p>
          <p className="">presupuesto</p>
          <p className="">limpieza inicial</p>
          <p className="">repuestos</p>
          <p className="">correctivos</p>
          <p className="">extraccion de alambre</p>
          <p className="">insercion de aislamiento</p>
          <p className="">insercion de bobinas</p>
          <p className="">union de salidas</p>
          <p className="">amarre</p>
          <p className="">barnizado</p>
          <p className="">limpieza final</p>
          <p className="">montaje</p>
          <p className="">pruebas</p>
          <p className="">pintado  </p>
        </div>
    </div>
   );
}

export default ServicesStatus;

/*
  Funcionamiento
    Solo debe mostrar los motores que estan en servicio, los terminados o antiguos no
    Muestra una tabla comparativa donde se pinta de color si la etapa se ha superado
      eje y: 
        ot 
        servicio
        cliente 
        % avance
      eje x: 
        desmontaje 
        presupuesto 
        limpieza inicial
        repuestos 
        coorectivos 
        extraccion de alambre
        insercion de aislamiento
        insercion de bobinas
        union de salidas
        amarre
        barnizado
        limpieza final
        montaje
        pruebas
        pintado
*/