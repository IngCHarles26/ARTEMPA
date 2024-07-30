import { Outlet } from "react-router-dom"
import Alerts from "./components/global/Alerts"

function App() {

  return (
    <div className="min-h-screen flex bg-slate-100">
      <Outlet />
      <Alerts />
    </div>
  )
}

export default App
