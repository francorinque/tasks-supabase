import { NavLink, useLocation } from "react-router-dom"
import { useEffect, useState } from "react"

import supabase from "../supabase/client"
import { dataMenu } from "../constants"

const Nav = () => {
  const [openMenu, setOpenMenu] = useState(false)

  const location = useLocation()

  useEffect(() => {
    setOpenMenu(false)
  }, [location.pathname])

  return (
    <header>
      <nav className="w-full border-b border-neutral px-4 flex items-center justify-between max-w-7xl mx-auto md:py-5">
        <div className="text-3xl font-bold">Tasks</div>

        <ul className=" gap-4 items-center hidden md:flex">
          {dataMenu.map(({ id, text, to }) => (
            <li key={id}>
              <NavLink to={to} className=" text-light/60 hover:text-light">
                {text}
              </NavLink>
            </li>
          ))}

          <li>
            <button
              onClick={() => supabase.auth.signOut()}
              className="black_btn font-semibold"
            >
              Logout
            </button>
          </li>
        </ul>

        {/* mobile menu */}
        <div className="md:hidden relative p-4 ">
          <p className="cursor-pointer" onClick={() => setOpenMenu(!openMenu)}>
            Menu
          </p>
          <ul
            className={` md:hidden flex-col gap-4 items-center  mt-5 absolute z-[999] right-0  glassmorphism p-5 ${
              openMenu ? "flex" : "hidden"
            }`}
          >
            {dataMenu.map(({ id, text, to }) => (
              <li key={id}>
                <NavLink to={to} className=" text-light/60">
                  {text}
                </NavLink>
              </li>
            ))}

            <li>
              <button
                onClick={() => supabase.auth.signOut()}
                className="black_btn font-semibold"
              >
                Logout
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  )
}
export default Nav
