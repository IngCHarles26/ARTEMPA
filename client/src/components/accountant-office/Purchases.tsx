/*
  datos a mostrar en la tabla
    fecha
    ruc -> F
    nombre -> F
    numero -> F
    serie -> F
    costo 
    estado -> F
    pagado -> F
    detraccion -> F
    descripcion
    empresa (abm o mega) -> F

  funciones visibles
    agregar una compra
    editar una compra
    buscar una compra
    filtros
      ruc
      nombre
      estado
      empresa (abm o mega)


  funciones ocultas
    guardar un array de cambios
    adaptar la tabla segun el alto de la pantalla
*/


/*
  1. Crear un slice que guarda una lista de cambios de valores en las filas
  2. 


*/
function Purchases() {
  return (
    <div className="flex-grow bg-red-200">
      <form action="">
        <div>
          <p>FECHA</p>
          <div>
            <input type="text" placeholder="RUC" />
            <button></button>
          </div>
        </div>
      </form>

      <div>

      </div>
    </div>
  );
}


export default Purchases;