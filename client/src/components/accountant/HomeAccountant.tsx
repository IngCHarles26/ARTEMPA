import { AccMenu } from ".";
import appRoutes from "../../assets/routesAll";
import MenuHomeCard from "../mini-components/MenuHomeCard";



function HomeAccountant() {
  const { accountant } = appRoutes

  return (
    <div className="h-96 flex flex-wrap  justify-center items-center mx-auto mt-28 p-10 gap-5">
      {
        AccMenu.map(({image,name,route},ix)=>
          <MenuHomeCard 
            key={ix+' menuOption'} 
            Image={image} 
            name={name} 
            route={'/'+accountant(route)} />)
      }
    </div>
  );
}

export default HomeAccountant;