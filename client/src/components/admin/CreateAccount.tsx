import { FormEvent } from "react";
import { notSlConvert, setMessage } from "../../redux/slices/notSlice";
import { useSelector } from "react-redux";
import { TypeStore } from "../../redux/store";
import { useDispatch } from "react-redux";

function CreateAccount() {
  const dispatch = useDispatch();

  const handleSubmit = (e:FormEvent)=>{
    e.preventDefault()
    dispatch(setMessage(notSlConvert(['Pruebna','Pruebnita'],'alert')))
    
  }

  return (
    <div className={`flex-grow flex justify-center items-center`}>
      <form action=""
        onSubmit={handleSubmit}
        className="bg-white rounded px-6 py-4 flex flex-col items-center gap-2 w-80">
        <p 
          className="text-neutral-800 uppercase font-bold mb-4 text-2xl text-center tracking-normal">
          nuevo usuario </p>

        <select name="" id="" className="w-full text-center border bg-transparent rounded uppercase p-1 text-lg text-neutral-500">
          <option value="" className="text-sm text-left"> - tipo -</option>
          <option value="" className="text-sm text-left"> Técnico </option>
          <option value="" className="text-sm text-left"> Oficina </option>
          <option value="" className="text-sm text-left"> Contador </option>
        </select>

        <input type="text" placeholder="User Name" className="block border text-lg py-1 px-2 w-full text-neutral-500 " />

        <input type="text" placeholder="Email" className="block border text-lg py-1 px-2 w-full text-neutral-500 " />

        <input type="submit" value='generar' className="transition-all hover:scale-105 bg-neutral-700 text-white uppercase py-2 rounded cursor-pointer px-3 mt-3"/>
      </form>
    </div>
  );
}

export default CreateAccount;