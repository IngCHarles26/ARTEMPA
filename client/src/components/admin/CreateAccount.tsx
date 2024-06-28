
function CreateAccount() {
  return (
    <div className={`flex-grow flex justify-center items-center`}>
      <form action=""
        className="bg-white rounded px-6 py-4 flex flex-col items-center gap-2 w-80">
        <p 
          className="text-neutral-800 uppercase font-bold mb-4 text-2xl text-center tracking-normal">
          nuevo usuario </p>

        <select name="" id="" className="w-full text-center border bg-transparent rounded uppercase p-1 text-lg text-neutral-500">
          <option value="" className="text-sm "> - tipo -</option>
          <option value="" className="text-sm "> Técnico </option>
          <option value="" className="text-sm "> Oficina </option>
          <option value="" className="text-sm "> Contador </option>
        </select>

        <input type="text" placeholder="User Name" className="block border text-lg py-1 px-2 w-full text-neutral-500 " />

        <input type="text" placeholder="Email" className="block border text-lg py-1 px-2 w-full text-neutral-500 " />

        <input type="submit" value='generar' className="transition-all hover:scale-110 hover:font-extrabold hover:tracking-wider bg-neutral-700 text-white uppercase py-2 rounded cursor-pointer px-3 mt-3"/>
      </form>
    </div>
  );
}

export default CreateAccount;