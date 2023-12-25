import { useState } from "react"
import TasksList from "../components/TasksList"

const tabsData = ["all", "done"]

const HomePage = () => {
  const [tab, setTab] = useState("all")

  const firstLetterUpperCase = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1)
  }

  return (
    <>
      <section className="padding-t">
        <div className="mb-10 flex items center justify-center gap-4">
          {tabsData.map((item, idx) => (
            <button
              key={idx}
              className={`${
                tab === item ? "text-green-500 font-semibold" : "text-light"
              }`}
              onClick={() => setTab(item)}
            >
              {firstLetterUpperCase(item)}
            </button>
          ))}
        </div>

        {tab === "all" ? <TasksList /> : <TasksList done={true} />}
      </section>
    </>
  )
}
export default HomePage
