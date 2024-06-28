function EditPassword() {
  return (
    <div className={`flex-grow flex justify-center items-center`}>
      <form action=""
        className="bg-white rounded px-6 py-4 flex flex-col items-center gap-2 w-80">
        <p 
          className="text-neutral-800 uppercase font-bold mb-4 text-2xl text-center tracking-normal">
          Cambiar contraseña </p>

        <select name="" id="" className="w-full text-center border bg-transparent rounded uppercase p-1 text-lg text-neutral-500">
          <option value="" className="text-sm "> - usuario -</option>
          <option value="" className="text-sm "> Delford </option>
          <option value="" className="text-sm "> Christian </option>
          <option value="" className="text-sm "> Paul </option>
        </select>

        <input type="submit" value='Enviar' className="transition-all hover:scale-110 hover:font-extrabold hover:tracking-wider bg-neutral-700 text-white uppercase py-2 rounded cursor-pointer px-3 mt-3"/>
      </form>
    </div>
  );
}

export default EditPassword;