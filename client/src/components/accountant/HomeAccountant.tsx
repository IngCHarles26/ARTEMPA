import {AccOffMenu} from "../accountant-office/images";
import MenuHomeCard from "./mini-components/MenuHomeCard";

function HomeAccountant() {

  return (
    <div className="h-96 flex flex-wrap  justify-center items-center mx-auto mt-28 p-10 gap-5">
      {
        AccOffMenu.map(({image,name,route},ix)=><MenuHomeCard key={ix+' menuOption'} Image={image} name={name} route={route} />)
      }
    </div>
  );
}

export default HomeAccountant;