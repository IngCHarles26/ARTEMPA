import { AdmMenu } from ".";
import appRoutes from "../../assets/routesAll";
import MenuHomeCard from "../mini-components/MenuHomeCard";

function HomeAdmin() {
  const { admin } = appRoutes

  return (
    <div className="flex-grow flex justify-center items-center">
      <div className="flex flex-wrap gap-4 p-4 justify-center">
        {
          AdmMenu.map(({image,name,route},ix)=>
            <MenuHomeCard 
              key={ix+' menuOption'} 
              Image={image} 
              name={name} 
              route={'/'+admin(route)} />)
        }
      </div>
    </div>
  );
}

export default HomeAdmin;