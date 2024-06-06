import { ChangeEvent, FormEvent, useState } from "react";
import { routes } from "../../routes";

const initialState = {
  name: '',
  userName: '',
  password: '',
  repeatPassword: '',
  phoneNumber: '',
  address: '',
  email: '',
}

const regM = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
// const regP = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#._-])[A-Za-z\d@$!%*?&#._-]{8,}$/

function Register() {
  
  // const [errors, setErrors] = useState({...initialState});
  const [formInfo, setFormInfo] = useState(initialState);
  const noInputs = !Object.values(formInfo).every(el=>el)


  // const handleChange = (e:ChangeEvent<HTMLInputElement>)=>{
  //   const {name,value} = e.target
  //   setFormInfo({...formInfo,[name]:value})
  //   console.log(formInfo)
  //   setErrors(initialState)
  // }

  // const handleSubmit = (e:FormEvent)=>{
  //   e.preventDefault()

  //   const {
  //     userName:user,
  //     password: pass,
  //     repeatPassword: rPass,
  //     phoneNumber: phone,
  //     address: dress,
  //     contactPerson: cPerson,
  //     phoneNumberContactPerson: nCPerson,
  //     name: fullName,
  //   } = formInfo

  //   const userName = user.length<8 ? 'El usuario debe tener al menos 8 caracteres' : ''
  //   const password =  !regP.test(pass) ? 'al menos de 8 caracteres, una mayuscula, un numero y caracter especial' : ''
  //   const repeatPassword =  rPass != pass ? 'Las contraseñas no coinciden' : ''
  //   //@ts-ignore
  //   const valPhone = phone.replaceAll(' ','').split('')
  //   const phoneNumber = (valPhone.length != 9 || valPhone.some((el:string)=>isNaN(+el))) ? 'Ingresa un numero de celular válido' : ''
  //   const address = !dress ? 'La direccion no puede estar vacía' : ''
  //   const contactPerson =  !cPerson ? 'El nombre de contacto no puede estar vacio' : ''
  //   const name =  !fullName ? 'El nombre completo no puede estar vacio' : ''
  //   //@ts-ignore
  //   const valCPhone = nCPerson.replaceAll(' ','').split('')
  //   const phoneNumberContactPerson =  (valCPhone.length != 9 || valCPhone.some((el:string)=>isNaN(+el))) ? 'Ingresa un numero de celular válido' : ''


  //   if(Object.values(ans).some(el=>el)) return setErrors({...ans})

  // }

  // {errors.userName && <p className="text-red-600 text-sm w-full text-right">{errors.userName}</p>}

  const handleChange = (e:ChangeEvent<HTMLInputElement>) => {
    const {value,name} = e.target;
    setFormInfo({...formInfo,[name]:value})
    console.log(formInfo)
  }

  const handleSubmit = (e:FormEvent)=>{
    e.preventDefault()
  }


  return (
    <div>
      <h1 className="mb-3">Confirma tus Datos</h1>
      <form action="" onSubmit={handleSubmit} className="bg-white flex flex-col px-6 py-4 space-y-4 items-center rounded-xl shadow">
        <div className="flex space-x-3 items-center justify-between w-96">
          <label className="text-neutral-800 font-bold text-sm w-1/5">USUARIO</label>
          <input type="text" name="userName" value={formInfo.userName} onChange={handleChange} className="px-2 py-1 rounded text-lg border-2 w-2/3" />
        </div>
        <div className="flex space-x-3 items-center justify-between w-96">
          <label className="text-neutral-800 font-bold text-xs w-1/5">NOMBRES Y APELLIDOS:</label>
          <input type="text" name="name" value={formInfo.name} onChange={handleChange} className="px-2 py-1 rounded text-lg border-2 w-2/3" />
        </div>
        <div className="flex space-x-3 items-center justify-between w-96">
          <label className="text-neutral-800 font-bold text-sm w-1/5">CONTRASEÑA</label>
          <input type="password" name="password" value={formInfo.password} onChange={handleChange} className="px-2 py-1 rounded text-lg border-2 w-2/3" />
        </div>
        <div className="flex space-x-3 items-center justify-between w-96">
          <label className="text-neutral-800 font-bold text-xs w-1/5">REPITE CONTRASEÑA</label>
          <input type="password" name="repeatPassword" value={formInfo.repeatPassword} onChange={handleChange} className="px-2 py-1 rounded text-lg border-2 w-2/3" />
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
        {/* <p className="text-red-600 text-lg font-bold">Datos Incorrectos</p> */}
      </form>
  </div>
  );
}

export default Register;