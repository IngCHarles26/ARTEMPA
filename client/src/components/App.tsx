import { Outlet } from "react-router-dom"

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-slate-200 to-slate-100"> 
      <Outlet />
    </div>
  )
}

export default App
