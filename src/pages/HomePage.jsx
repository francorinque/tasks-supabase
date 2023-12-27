import { useEffect } from "react"
import { NavLink, Navigate, Outlet, useLocation } from "react-router-dom"
import { useTasks } from "../context/TasksContext"

import { dataMenuTasks } from "../constants"

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
          {dataMenuTasks.map(({ id, text, to }) => (
            <NavLink
              to={to}
              key={id}
              activeclassname="active"
              className="text-light/60"
            >
              {text}
            </NavLink>
          ))}
        </nav>
        <Outlet />
      </section>
    </>
  )
}
export default HomePage
