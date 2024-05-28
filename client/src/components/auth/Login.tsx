import { ChangeEvent, FormEvent, useState } from "react";
import { routes } from "../../routes";

const initialState = {
  userName:'',
  password: '',
}

function Login() {
  const [errors, setErrors] = useState({...initialState});
  const [formInfo, setFormInfo] = useState(initialState);

  const handleChange = (e:ChangeEvent<HTMLInputElement>)=>{
    const {name,value} = e.target
    setFormInfo({...formInfo,[name]:value})
    setErrors(initialState)
  }

  const handleSubmit = (e:FormEvent)=>{
    e.preventDefault()

    let userName = !formInfo.userName ? 'El usuario no puede estar vacío' : ''
    let password = !formInfo.password ? 'La contraseña no puede estar vacía' : ''
    if (userName || password) return setErrors({userName,password})
  }

  return (
    <div  className="w-80 px-8 py-4 rounded-3xl bg-white border-gray-300 shadow border flex flex-col">
        <form onSubmit={handleSubmit}  className="my-6">
          <input onChange={handleChange} name="userName" placeholder="Usuario" type="text"  className="p-2 my-2 rounded w-full focus:outline-blue-600 border-slate-800 border" />
          {errors.userName && <p className="text-red-600 text-sm w-full text-right">{errors.userName}</p>}
          <input onChange={handleChange} name="password" placeholder="Password" type="password"  className="p-2 my-2 rounded w-full focus:outline-blue-600 border-slate-800 border" />
          {errors.password && <p className="text-red-600 text-sm w-full text-right">{errors.password}</p>}
          <input type="submit"  value={'LOGIN'} className="bg-green-600 hover:bg-green-500 uppercase text-white font-semibold p-2 mt-3 rounded w-full"/>
        </form>
        <a href={routes.register}  className="text-center text-sm underline text-blue-600">Registrate</a>
    </div>

  );
}

export default Login;