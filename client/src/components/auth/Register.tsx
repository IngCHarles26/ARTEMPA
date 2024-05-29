import { ChangeEvent, FormEvent, useState } from "react";
import { routes } from "../../routes";

const initialState = {
  name: '',
  userName: '',
  password: '',
  repeatPassword: '',
  email: '',
  phoneNumber: '',
  address: '',
  contactPerson: '',
  phoneNumberContactPerson: ''
}

const regM = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
const regP = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#._-])[A-Za-z\d@$!%*?&#._-]{8,}$/

function Register() {
  const [errors, setErrors] = useState({...initialState});
  const [formInfo, setFormInfo] = useState(initialState);

  const handleChange = (e:ChangeEvent<HTMLInputElement>)=>{
    const {name,value} = e.target
    setFormInfo({...formInfo,[name]:value})
    console.log(formInfo)
    setErrors(initialState)
  }

  const handleSubmit = (e:FormEvent)=>{
    e.preventDefault()

    const {
      userName:user,
      password: pass,
      repeatPassword: rPass,
      email: mail,
      phoneNumber: phone,
      address: dress,
      contactPerson: cPerson,
      phoneNumberContactPerson: nCPerson,
      name: fullName,
    } = formInfo

    const userName = user.length<8 ? 'El usuario debe tener al menos 8 caracteres' : ''
    const password =  !regP.test(pass) ? 'al menos de 8 caracteres, una mayuscula, un numero y caracter especial' : ''
    const repeatPassword =  rPass != pass ? 'Las contraseñas no coinciden' : ''
    const email = !regM.test(mail) ?  'Ingresa un email válido' : ''
    //@ts-ignore
    const valPhone = phone.replaceAll(' ','').split('')
    const phoneNumber = (valPhone.length != 9 || valPhone.some((el:string)=>isNaN(+el))) ? 'Ingresa un numero de celular válido' : ''
    const address = !dress ? 'La direccion no puede estar vacía' : ''
    const contactPerson =  !cPerson ? 'El nombre de contacto no puede estar vacio' : ''
    const name =  !fullName ? 'El nombre completo no puede estar vacio' : ''
    //@ts-ignore
    const valCPhone = nCPerson.replaceAll(' ','').split('')
    const phoneNumberContactPerson =  (valCPhone.length != 9 || valCPhone.some((el:string)=>isNaN(+el))) ? 'Ingresa un numero de celular válido' : ''

    const ans = {userName,password,repeatPassword,email,phoneNumber,address,contactPerson,phoneNumberContactPerson,name}

    if(Object.values(ans).some(el=>el)) return setErrors({...ans})

  }

  // {errors.userName && <p className="text-red-600 text-sm w-full text-right">{errors.userName}</p>}
  return (
    <div className="w-96 px-8 py-4 rounded-3xl bg-white border-gray-300 shadow border flex flex-col">
      <form onSubmit={handleSubmit}  className="my-4">
        <input onChange={handleChange} value={formInfo.userName} placeholder="Nombre de Usuario" type="text" name="userName"  className="p-2 my-1 rounded w-full focus:outline-blue-600 border-slate-800 border" />
        {errors.userName && <p className="text-red-600 text-sm w-full text-right">{errors.userName}</p>}
        <input onChange={handleChange} value={formInfo.name} placeholder="Su nombre completo" type="text" name="name"  className="p-2 my-1 rounded w-full focus:outline-blue-600 border-slate-800 border" />
        {errors.name && <p className="text-red-600 text-sm w-full text-right">{errors.name}</p>}
        <input onChange={handleChange} value={formInfo.password} placeholder="Contraseña" type="password" name="password" className="p-2 my-1 rounded w-full focus:outline-blue-600 border-slate-800 border" />
        {errors.password && <p className="text-red-600 text-sm w-full text-right">{errors.password}</p>}
        <input onChange={handleChange} value={formInfo.repeatPassword} placeholder="Repite Contraseña" type="password" name="repeatPassword" className="p-2 my-1 rounded w-full focus:outline-blue-600 border-slate-800 border" />
        {errors.repeatPassword && <p className="text-red-600 text-sm w-full text-right">{errors.repeatPassword}</p>}
        <input onChange={handleChange} value={formInfo.email} placeholder="Email" type="email" name="email" className="p-2 my-1 rounded w-full focus:outline-blue-600 border-slate-800 border" />
        {errors.email && <p className="text-red-600 text-sm w-full text-right">{errors.email}</p>}
        <input onChange={handleChange} value={formInfo.phoneNumber} placeholder="Teléfono" type="text" name="phoneNumber" className="p-2 my-1 rounded w-full focus:outline-blue-600 border-slate-800 border" />
        {errors.phoneNumber && <p className="text-red-600 text-sm w-full text-right">{errors.phoneNumber}</p>}
        <input onChange={handleChange} value={formInfo.address} placeholder="Dirección" type="text" name="address" className="p-2 my-1 rounded w-full focus:outline-blue-600 border-slate-800 border" />
        {errors.address && <p className="text-red-600 text-sm w-full text-right">{errors.address}</p>}
        <input onChange={handleChange} value={formInfo.contactPerson} placeholder="Persona de Contacto" type="text" name="contactPerson" className="p-2 my-1 rounded w-full focus:outline-blue-600 border-slate-800 border" />
        {errors.contactPerson && <p className="text-red-600 text-sm w-full text-right">{errors.contactPerson}</p>}
        <input onChange={handleChange} value={formInfo.phoneNumberContactPerson} placeholder="Telefono de Contacto" type="text" name="phoneNumberContactPerson" className="p-2 my-1 rounded w-full focus:outline-blue-600 border-slate-800 border" />
        {errors.phoneNumberContactPerson && <p className="text-red-600 text-sm w-full text-right">{errors.phoneNumberContactPerson}</p>}
        <input type="submit"  value={'REGISTRATE'} className="bg-green-600 hover:bg-green-500 uppercase text-white font-semibold p-2 mt-3 rounded w-full"/>
      </form>
      <a href={routes.login} className="text-center text-sm underline text-blue-600">Ingresa</a>
    </div>
  );
}

export default Register;