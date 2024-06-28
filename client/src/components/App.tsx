import { Outlet } from "react-router-dom"
import HiddenMenu from "./mini-components/HiddenMenu"
import AlertMessage from "./mini-components/Notification"

function App() {

  return (
    <div className="min-h-screen flex bg-gradient-to-b from-slate-200 to-slate-100"> 
      <Outlet />
      <HiddenMenu/>
      <AlertMessage />
    </div>
  )
}

export default App