import { useEffect } from "react"
import { NavLink, Navigate, Outlet, useLocation } from "react-router-dom"
import { useTasks } from "../context/TasksContext"

const HomePage = () => {
  const location = useLocation()
  const { getAllTasks } = useTasks()

  useEffect(() => {
    getAllTasks()
  }, [])

  return (
    <>
      <section className="padding-t">
        {location.pathname === "/" && <Navigate to="/all" />}
        <nav className="flex justify-center items-center mb-5 gap-4">
          <NavLink to="/all">All</NavLink>
          <NavLink to="/pending">Pending</NavLink>
          <NavLink to="/completed">Completed</NavLink>
        </nav>
        <Outlet />
      </section>
    </>
  )
}
export default HomePage
