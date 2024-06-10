import { Outlet } from "react-router-dom"

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-slate-300 to-slate-100 font-mono"> 
      <Outlet />
    </div>
  )
}

export default App
