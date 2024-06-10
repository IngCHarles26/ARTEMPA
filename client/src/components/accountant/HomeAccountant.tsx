import { AccMenu } from ".";
import appRoutes from "../../assets/routesAll";
import MenuHomeCard from "../mini-components/MenuHomeCard";



function HomeAccountant() {
  const { accountant } = appRoutes

  return (
    <div className="flex-grow flex justify-center items-center">
      <div className="flex flex-wrap gap-4 p-4 justify-center">
        {
          AccMenu.map(({image,name,route},ix)=>
            <MenuHomeCard 
              key={ix+' menuOption'} 
              Image={image} 
              name={name} 
              route={'/'+accountant(route)} />)
        }
      </div>
    </div>
  );
}

export default HomeAccountant;