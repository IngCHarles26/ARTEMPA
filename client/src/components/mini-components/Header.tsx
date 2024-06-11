// import { useSelector } from "react-redux";
// import { TypeStore } from "../../redux/store";

import { useSelector } from "react-redux";
import { TypeStore } from "../../redux/store";

function Header() {
  const {typeUser,currentNav,nameUser} = useSelector((st:TypeStore)=>st.userInfo)


  return (
    <header className="flex justify-between p-2 bg-cyan-800">
      <p className="text-yellow-300 font-bold uppercase">{currentNav}</p>
      <p className="text-lg text-neutral-300">{typeUser}: <span className="text-xl font-bold text-yellow-300">{nameUser}</span></p>
    </header>
  );
}

export default Header;