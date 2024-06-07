import { ChangeEvent, FormEvent, useState } from "react";
import { routes } from "../../routes";

const initialState = {
  name: '',
  userName: 'User26',
  password: '',
  repeatPassword: '',
  phoneNumber: '',
  address: '',
  email: '',
}

const regM = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
const regN = /^9\d{8}$/
const regP = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#._-])[A-Za-z\d@$!%*?&#._-]{8,}$/

function Register() {
  
  const [formInfo, setFormInfo] = useState(initialState);
  const [msgError, setMsgError] = useState<string[]>([]);
  const noInputs = !Object.values(formInfo).every(el=>el)

  const handleChange = (e:ChangeEvent<HTMLInputElement>) => {
    const {value,name} = e.target;
    setFormInfo({...formInfo,[name]:value})
    setMsgError([])
  }

  const handleSubmit = (e:FormEvent)=>{
    e.preventDefault()

    // data validation
    if(noInputs) return
    let errors = []
    const emailVal = !regM.test(formInfo.email)
    if(emailVal) errors.push('El email ingresado no es válido')
    const phone = formInfo.phoneNumber.split('').filter(el=>el!=' ').join('')
    const phoneVal = !regN.test(phone)
    if(phoneVal) errors.push('El teléfono ingresado no es válido')
    const passVal1 = formInfo.password != formInfo.repeatPassword
    if(passVal1) errors.push('Las contraseñas no son iguales')
    const passVal = !regP.test(formInfo.password)
    if(passVal) errors.push('La contraseña es muy corta, debe incluir una mayuscula, un numero y un caracter especial ($!%*?&.-#_)')
    if(errors.length) return setMsgError(errors)

    
  }


  return (
    <div>
      <h1 className="mb-3 px-3">Confirma tus Datos</h1>
      <form action="" onSubmit={handleSubmit} className="bg-white flex flex-col p-6 mx-5 space-y-4 items-center rounded-xl shadow">
        <div className="flex space-x-3 items-center justify-between w-96">
          <label className="text-neutral-800 font-bold text-sm w-1/5">USUARIO</label>
          <input type="text" name="userName" placeholder={formInfo.userName} disabled  className="px-2 py-1 rounded text-lg border-2 w-2/3" />
        </div>
        <div className="flex space-x-3 items-center justify-between w-96">
          <label className="text-neutral-800 font-bold text-xs w-1/5">NOMBRES Y APELLIDOS:</label>
          <input type="text" name="name" value={formInfo.name} onChange={handleChange} className="px-2 py-1 rounded text-lg border-2 w-2/3" />
        </div>
        <div className="flex space-x-3 items-center justify-between w-96">
          <label className="text-neutral-800 font-bold text-sm w-1/5">CONTRASEÑA</label>
          <input type="password" name="password" value={formInfo.password} onChange={handleChange} className={"px-2 py-1 rounded text-lg border-2 w-2/3 " + (formInfo.password != formInfo.repeatPassword ? 'border-yellow-300' : '')} />
        </div>
        <div className="flex space-x-3 items-center justify-between w-96">
          <label className="text-neutral-800 font-bold text-xs w-1/5">REPITE CONTRASEÑA</label>
          <input type="password" name="repeatPassword" value={formInfo.repeatPassword} onChange={handleChange} className={"px-2 py-1 rounded text-lg border-2 w-2/3 " + (formInfo.password != formInfo.repeatPassword ? 'border-yellow-300' : '')} />
        </div>
        <div className="flex space-x-3 items-center justify-between w-96">
          <label className="text-neutral-800 font-bold text-sm w-1/5">EMAIL</label>
          <input type="email" name="email" value={formInfo.email} onChange={handleChange} className={"px-2 py-1 rounded text-lg border-2 w-2/3 " + (!regM.test(formInfo.email) ? 'border-red-500' : '')} />
        </div>
        <div className="flex space-x-3 items-center justify-between w-96">
          <label className="text-neutral-800 font-bold text-sm w-1/5">TELÉFONO</label>
          <input type="text" name="phoneNumber" value={formInfo.phoneNumber} onChange={handleChange} className="px-2 py-1 rounded text-lg border-2 w-2/3" />
        </div>
        <div className="flex space-x-3 items-center justify-between w-96">
          <label className="text-neutral-800 font-bold text-sm w-1/5">DIRECCIÓN</label>
          <input type="text" name="address" value={formInfo.address} onChange={handleChange} className="px-2 py-1 rounded text-lg border-2 w-2/3" />
        </div>

        <input type="submit" value="CONFIRMAR" className={"text-white bg-cyan-800 text-center text-xl w-40 p-2 rounded-xl font-bold transition-all " + (noInputs ? 'cursor-default opacity-10 ' : ' cursor-pointer hover:scale-105 hover:bg-yellow-300 hover:text-neutral-800 ')} />

        <div className="w-80">
          {
            Boolean(msgError.length) && msgError.map((el,ix)=><p key={ix+' msg-error'} className="text-red-600 text-sm font-bold">- {el}</p>)
          }
        </div>
      </form>
  </div>
  );
}

export default Register;