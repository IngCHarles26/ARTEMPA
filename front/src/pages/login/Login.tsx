import { ChangeEvent, FormEvent, useState } from "react";
import { convertAlert, setMessages } from "../../contexts/slices/alertsSlice";
import { useDispatch } from "react-redux";

const initialState = {
  userName:'',
  password: '',
}

function Login() {
  const [loginInfo, setLoginInfo] = useState(initialState);
  const noInputs = !loginInfo.password || !loginInfo.userName;
  const dispatch = useDispatch()

  const handleChange = (e:ChangeEvent<HTMLInputElement>)=>{
    const {name,value} = e.target
    setLoginInfo({...loginInfo,[name]:value})
  }

  const handleSubmit = (e:FormEvent)=>{
    e.preventDefault()
    if(noInputs) return

    dispatch(setMessages(convertAlert(['holi','holi'],'error')))
  }


  return (
    <div className="flex-grow flex flex-col justify-center items-center">
      <h1 className="mb-3 text-lg">Inicia Sesión</h1>
      <form action="" onSubmit={handleSubmit} className="bg-white flex flex-col px-8 py-6 space-y-4 items-center rounded-xl shadow">
        <div className="flex flex-col w-full space-y-2">
          <label className="text-neutral-800 font-bold text-sm">USUARIO</label>
          <input type="text" name="userName" value={loginInfo.userName} onChange={handleChange} className="px-2 py-1 rounded text-xl border-2" />
        </div>
        <div className="flex flex-col w-full space-y-2">
          <label className="text-neutral-800 font-bold text-sm">CONTRASEÑA</label>
          <input type="password" name="password" value={loginInfo.password} onChange={handleChange} className="px-2 py-1 rounded text-xl border-2" />
        </div>

        <input type="submit" value="INGRESA" className={"text-white bg-cyan-800 text-center text-xl w-40 p-2 rounded-md font-bold transition-all " + (noInputs ? 'cursor-default opacity-50 ' : ' cursor-pointer hover:scale-105 hover:bg-yellow-300 hover:text-neutral-800 ')} />
      </form>
    </div>

  );
}

export default Login;