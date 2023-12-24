import { NavLink } from "react-router-dom"
import supabase from "../supabase/client"

const Nav = () => {
  return (
    <header>
      <nav className="w-full border-b border-neutral py-5 px-4 flex items-center justify-between max-w-7xl mx-auto">
        <div className="text-3xl font-bold">Tasks</div>

        <ul className="flex gap-4 items-center">
          <li>
            <NavLink to="/" className="outline_btn ">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/create-task" className="outline_btn ">
              Create Task
            </NavLink>
          </li>
          <li>
            <button
              onClick={() => supabase.auth.signOut()}
              className="black_btn"
            >
              Logout
            </button>
          </li>
        </ul>
      </nav>
    </header>
  )
}
export default Nav
