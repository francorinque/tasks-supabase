import { useEffect } from "react"
import { useLocation, useNavigate } from "react-router-dom"

import Nav from "./components/Nav"
import MyRoutes from "./routes/MyRoutes"
import supabase from "./supabase/client"

// logica de borrado de tareas

function App() {
  const location = useLocation()
  const navigate = useNavigate()

  const paths = ["/login", "/register"]
  const showComponent = !paths.includes(location.pathname)

  useEffect(() => {
    supabase.auth.onAuthStateChange((event, session) => {
      if (!session) navigate("/login")
      else if (session && location.pathname === "/login") navigate("/")
    })
  }, [])

  return (
    <>
      {showComponent && <Nav />}
      <main className="w-full py-[50px] px-[10px]  max-w-7xl mx-auto">
        <MyRoutes />
      </main>
    </>
  )
}

export default App
