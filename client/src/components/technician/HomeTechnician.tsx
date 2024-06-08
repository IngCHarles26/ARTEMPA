import { TechMenu } from ".";
import appRoutes from "../../assets/routesAll";
import MenuHomeCard from "../mini-components/MenuHomeCard";

function HomeTechnician() {
  const { technician } = appRoutes

  return (
    <div className="h-96 flex flex-wrap  justify-center items-center mx-auto mt-28 p-10 gap-5">
      {
        TechMenu.map(({image,name,route},ix)=>
          <MenuHomeCard 
            key={ix+' menuOption'} 
            Image={image} 
            name={name} 
            route={'/'+technician(route)} />)
      }
    </div>
  );
}

export default HomeTechnician;