import { Outlet } from "react-router-dom"
import HiddenMenu from "./mini-components/HiddenMenu"

function App() {

  return (
    <div className="min-h-screen flex bg-gradient-to-b from-slate-200 to-slate-100"> 
      <Outlet />
      <HiddenMenu/>
    </div>
  )
}

export default App