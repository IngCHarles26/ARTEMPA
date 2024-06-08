import { AdmMenu } from ".";
import appRoutes from "../../assets/routesAll";
import MenuHomeCard from "../mini-components/MenuHomeCard";

function HomeAdmin() {
  const { admin } = appRoutes

  return (
    <div className="h-96 flex flex-wrap  justify-center items-center mx-auto mt-28 p-10 gap-5">
      {
        AdmMenu.map(({image,name,route},ix)=>
          <MenuHomeCard 
            key={ix+' menuOption'} 
            Image={image} 
            name={name} 
            route={'/'+admin(route)} />)
      }
    </div>
  );
}

export default HomeAdmin;