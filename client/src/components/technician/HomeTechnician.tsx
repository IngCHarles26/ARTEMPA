import { TechMenu } from ".";
import appRoutes from "../../assets/routesAll";
import MenuHomeCard from "../mini-components/MenuHomeCard";

function HomeTechnician() {
  const { technician } = appRoutes

  return (
    <div className="flex-grow flex justify-center items-center">
      <div className="flex flex-wrap gap-4 p-4 justify-center">
        {
          TechMenu.map(({image,name,route},ix)=>
            <MenuHomeCard 
              key={ix+' menuOption'} 
              Image={image} 
              name={name} 
              route={'/'+technician(route)} />)
        }
      </div>
    </div>
  );
}

export default HomeTechnician;