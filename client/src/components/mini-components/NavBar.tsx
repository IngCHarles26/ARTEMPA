import { useLocation } from "react-router-dom";
import appRoutes, { RouteMenu } from "../../assets/routesAll";
import ExitOpt from "./ExitOpt";
import NavBarOpt from "./NavBarOpt";
import UserOpt from "./UserOpt";

interface Props {
  menuOptions: RouteMenu[],
  userName: string
}

function Navbar(props:Props) {
  const { menuOptions, userName } = props
  const { accountant } = appRoutes
  const { pathname } = useLocation()

  console.log(pathname)

  return (
    <div className="bg-cyan-800 p-2 flex flex-col justify-between relative">

      <div className="flex flex-col gap-1 ">

        <UserOpt
            userName= { userName }
          />

        {
          menuOptions.map(({image,name,route},ix)=>{
            const toRoute = `/${accountant(route)}`

            return(
              <NavBarOpt
                key   = { `${ix}menuOption` }
                image = { image }
                name  = { name }
                route = { toRoute }
                selected = { pathname == toRoute }
              />)
            }
          )
        }
      </div>

      <div>
        {/* <TextSizeHandler /> */}

        <ExitOpt />   
      </div>
      
    </div>
  );
}

export default Navbar;