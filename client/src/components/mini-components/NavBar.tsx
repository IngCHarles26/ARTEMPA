import { useLocation } from "react-router-dom";
import { RouteMenu } from "../../assets/routesAll";
import ExitOpt from "./ExitOpt";
import NavBarOpt from "./NavBarOpt";
import UserOpt from "./UserOpt";
import { useSelector } from "react-redux";
import { TypeStore } from "../../redux/store";
import useWindowSize from "../../hooks/useWindowSize";

interface Props {
  menuOptions: RouteMenu[],
  userName: string,
  routeUser: (rt: string) => string
}

function Navbar(props:Props) {
  const { menuOptions, userName ,routeUser} = props
  const { pathname } = useLocation()
  const { menuHidden } = useSelector((st:TypeStore)=> st.style)
  const { width } = useWindowSize()

  return (
    <div className={`bg-cyan-800 p-2 flex-col justify-between relative 
        ${menuHidden && width<700 ? 'hidden' : 'flex'}
      `}>

      <div className="flex flex-col gap-1 ">

        <UserOpt
            userName= { userName }
          />

        {
          menuOptions.map(({image,name,route},ix)=>{
            const toRoute = `/${routeUser(route)}`

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

      <div className="z-50">
        {/* <TextSizeHandler /> */}

        <ExitOpt />   
      </div>

    </div>
  );
}

export default Navbar;