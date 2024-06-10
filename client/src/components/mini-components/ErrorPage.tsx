import { useSelector } from "react-redux";
import { TypeStore } from "../../redux/store";
import { useNavigate } from "react-router-dom";
import appRoutes from "../../assets/routesAll";

function ErrorPage() {
  const {typeUser} = useSelector((st:TypeStore)=>st.userInfo)
  const nav = useNavigate()

  const handleCLick = ()=>{
    //@ts-ignore
    const rout = appRoutes[typeUser]
    nav('/'+rout('home'),{replace:true})
  }

  return (
    <div className=" min-h-screen grid 
        grid-cols-1 grid-rows-2 
        md:grid-cols-2 md:grid-rows-1
      ">
      <div className="bg-neutral-300 
          order-2
          md:order-1
          flex flex-col justify-center items-center p-5 gap-10
        ">
        <p className="text-cyan-800 text-5xl font-extrabold font-mono">Ups!!</p>
        <p className="text-cyan-800 text-3xl text-center font-bold font-mono">La pagina que estas buscando no existe :(</p>
        {
          Boolean(typeUser) &&
          <button className="transition-all bg-yellow-300 text-neutral-800 px-4 py-2 text-xl font-bold rounded-lg hover:bg-yellow-200 hover:text-cyan-800 hover:scale-105 hover:font-extrabold"
              onClick={handleCLick}
            >
            REGRESAR
          </button>
        }
      </div>
      <div className="bg-neutral-800
          order-1
          md:order-2
          flex justify-center items-center
        ">
        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-face-id-error stroke-yellow-300 w-2/3 hover:animate-pulse cursor-pointer" viewBox="0 0 24 24" fill="none" strokeLinecap="round" strokeLinejoin="round">
          <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
          <path d="M4 8v-2a2 2 0 0 1 2 -2h2" />
          <path d="M4 16v2a2 2 0 0 0 2 2h2" />
          <path d="M16 4h2a2 2 0 0 1 2 2v2" />
          <path d="M16 20h2a2 2 0 0 0 2 -2v-2" />
          <path d="M9 10h.01" />
          <path d="M15 10h.01" />
          <path d="M9.5 15.05a3.5 3.5 0 0 1 5 0" />
        </svg>
        </div>
    </div>
  );
}

export default ErrorPage;